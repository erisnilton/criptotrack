# 🪙 Cripto Track

**Cripto Track** é um sistema simples que exibe a cotação de criptomoedas **em tempo real**. A aplicação busca os dados mais recentes e os armazena temporariamente em cache para garantir performance e eficiência.
Os dados de cotação são obtidos da API pública da [CoinGecko](https://www.coingecko.com/).

## 🚀 Tecnologias Utilizadas

* [Redis](https://redis.io/) (via Docker) – utilizado para cache das cotações
* [Express](https://expressjs.com/) – servidor backend em Node.js
* HTML e CSS – estrutura e estilo da interface
* [Vue.js](https://vuejs.org/) – frontend estático para exibir os dados ao usuário

## ⚙️ Como Executar o Projeto

### Pré-requisitos

* Node.js instalado
* Docker e Docker Compose instalados

### 1. Clone o repositório

```bash
git https://github.com/erisnilton/criptotrack.git
cd criptotrack
```

### 2. Instalando as dependências do projeto

```bash
pnpm i
```
### 3. Subindo o Redis

```bash
docker-compose up -d
```

### 4. Inicie o servidor

```bash
pnpm dev
```


### 5. Acesse a interface

Abra o navegador e acesse `http://localhost:8080` para visualizar a aplicação.

## 📸 Demonstração

![Demonstração do Cripto Track](https://raw.githubusercontent.com/erisnilton/criptotrack/main/public/demo.gif)

*Desenvolvido com 💻 por Erisnilton Freitas*
