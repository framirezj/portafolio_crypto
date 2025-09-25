import { getData } from "./apibuda.service.js";

export async function getTotalValue(portfolio, fiat_currency) {
  //obtener los datos
  const datosApi = await getData();

  const cryptoKeys = Object.keys(portfolio); // [BTC, ETH, .....]
  const fiat = fiat_currency; //CLP

  let total = 0;

  for (const cryptoKey of cryptoKeys) {

    const cryptoData = datosApi.find(
      (coin) => coin.market_id === `${cryptoKey}-${fiat}`
    );
    const price = parseFloat(cryptoData.last_price[0]);

    total += price * portfolio[cryptoKey];
  }

  return total;
}

/*
{
	"portfolio": {
		"BTC": 0.5,
		"ETH": 2.0,
		"USDT": 1000
	},
	"fiat_currency": "CLP"
}




"tickers": [
    {
        "market_id":"BTC-CLP",
        "price_variation_24h":"0.001",
        "price_variation_7d":"-0.004",
        "last_price":[
            "14525279.0",
            "CLP"]}

*/
