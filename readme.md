# Blockexplorer Search

This is a simple app that allows users to search for information related to the Ethereum (or any EVM) blockchain. It consists of two main directories: "frontend" and "backend".

## Frontend
The frontend is built using Next.js, a popular React framework for building server-side rendered applications. It uses components to render the search bar, header and hero section. It also includes the necessary metadata for SEO and sets the favicon.

## Backend
The backend is built using Express, a popular Node.js web application framework. It provides APIs that retrieve data from the Ethereum blockchain using the Moralis API. The APIs allow users to retrieve the current price of Ether, retrieve block information, and retrieve transaction information for a given wallet address.


#### API Endpoints
The backend has the following API endpoints:

/getethprice - Returns the current ETH price.
/getblockinfo - Returns information about the latest block and the previous 5 blocks.
/address?address=*address* - Returns information about the specified Ethereum address.

## Requirements

- Node.js (v14 or higher)
- Moralis API key

## Getting started
To run the app locally, follow these steps:

1. Clone this repository

```
git clone https://github.com/yourusername/etherscan-search.git
```
2. Install dependencies in the root, frontend, and backend directories

```
cd etherscan-search
npm install

cd frontend
npm install

cd ../backend
npm install
```

3. Set the environment variables in the backend directory

```
cp .env.example .env
```

4. Replace YOUR_API_KEY_HERE with your Moralis API key.

Start the frontend and backend servers in separate terminal windows

```
cd ../frontend
npm run dev

cd ../backend
npm start
```

5. Open your browser and navigate to http://localhost:3000 to view the app.

## Deploying the app

The app can be deployed to any hosting provider that supports Node.js applications. You can use a service like Heroku or Vercel to easily deploy the app to the web.

## Contributors
Aziz Aiden - @0xaaiden

## License
This project is licensed under the terms of the MIT license.