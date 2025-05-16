import { createClient } from "redis";
import { setTimeout } from "node:timers/promises";
import { parentPort } from "node:worker_threads";

const client = createClient();
await client.connect();

let lastMessageSend = null;
while (true) {
  let result = await client.get("data");
  if (!result) {
    result = await getCoingeckoData();
    console.log(result);
    const data = JSON.parse(result);
    if (data.status?.error_code === 429) {
      console.log("Limite de requisição atingida, aguadando 60 segundos!");
      await setTimeout(60000);
      continue;
    }

    await client.set("data", result, { expiration: { type: "EX", value: 25 } });
  }

  if (result !== lastMessageSend) {
    parentPort.postMessage(result);
    lastMessageSend = result;
  }

  await setTimeout(1000);
}

async function getCoingeckoData() {
  console.log("requesição");
  return fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=usd-coin,basic-attention-token,bitcoin,ethereum,binancecoin,solana,ripple,usd&vs_currencies=brl"
  ).then((res) => res.text());
}
