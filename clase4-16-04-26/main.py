import requests
API_KEY = "73bf530c07fa45c6a4efcfc90eb9dcfc"
URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
headers = {'Accepts': 'application/json', 'X-CMC_PRO_API_KEY': API_KEY}
params = {'start': '1', 'limit': '5', 'convert': 'USD'}
def consultar_precios():
    try:
        response = requests.get(URL, headers=headers, params=params)
        data = response.json()
        print("--- PRECIO DE CRIPTOS (BACKEND) ---")
        for moneda in data['data']:
            n = moneda['name']
            p = moneda['quote']['USD']['price']
            print(f"Cripto: {n} | Precio: ${p:.2f}")
    except Exception as e:
        print(f"Error: {e}")
if __name__ == "__main__":
    consultar_precios()

