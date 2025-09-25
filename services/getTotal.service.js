import { getData } from "./apibuda.service.js";

export async function getTotalValue(portfolio, fiat_currency) {
  //obtener los datos
  const datosApi = await getData();

  let total = 0;

  for (const [cryptoKey, monto] of Object.entries(portfolio)) {
    const marketId = `${cryptoKey}-${fiat_currency}`;

    const cryptoData = datosApi.find((crypto) => crypto.market_id === marketId);
    if (!cryptoData) {
      console.warn(`No se encontró el ${marketId}`);
      continue;
    }

    const price = Number(cryptoData.last_price[0]);
    if (isNaN(price)) {
      console.warn(`Precio inválido de ${marketId}: ${cryptoData.last_price}`);
      continue;
    }

    total += price * monto;
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
