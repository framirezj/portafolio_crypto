# Portafolio Crypto

Este proyecto es una aplicación Node.js que permite consultar información de criptomonedas utilizando la API de Buda.com. Proporciona rutas y servicios para obtener datos relevantes sobre el portafolio de criptomonedas.

## Estructura del proyecto

- `app.js`: Archivo principal de la aplicación.
- `routes/crypto.route.js`: Define las rutas relacionadas con las criptomonedas.
- `services/apibuda.service.js`: Servicio para interactuar con la API de Buda.com.
- `services/getTotal.service.js`: Servicio para calcular totales del portafolio.

## Instalación

1. Clona el repositorio:
   ```powershell
   git clone <url-del-repositorio>
   ```
2. Instala las dependencias:
   ```powershell
   cd portafolio_crypto
   npm install
   ```


## Uso

1. Inicia la aplicación:
   ```powershell
   node app.js
   ```

2. Realiza una petición POST al endpoint principal para obtener el valor total de tu portafolio:

   **Endpoint:**
   ```
   POST /
   ```

   **Body esperado (JSON):**
   ```json
   {
      "portfolio": {
         "BTC": 0.5,
         "ETH": 2.0,
         "USDT": 1000
      },
      "fiat_currency": "CLP"
   }
   ```

   - `portfolio`: Un objeto donde las claves son los símbolos de las criptomonedas y los valores la cantidad que posees de cada una.
   - `fiat_currency`: Moneda fiat en la que deseas obtener el valor total (por ejemplo, "CLP").

   **Ejemplo de respuesta:**
   ```json
   {
      "total": 1234567.89,
      "currency": "CLP"
   }
   ```

   - `total`: Valor total del portafolio en la moneda solicitada.
   - `currency`: Moneda utilizada para el cálculo.

## Dependencias

Consulta el archivo `package.json` para ver todas las dependencias utilizadas.


