import { Window as KeplrWindow } from "@keplr-wallet/types";

// https://docs.keplr.app/api/
declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

const btn = document.getElementById("btn") as HTMLButtonElement;

const marsToken = {
  coinDenom: "MARS",
  coinMinimalDenom: "umars",
  coinDecimals: 6,
  coinGeckoId: "mars-protocol",
};

btn.addEventListener("click", () => {
  if (window.keplr) {
    window.keplr.experimentalSuggestChain({
      chainId: "mars-1",
      chainName: "Mars",
      rpc: "https://rpc.marsprotocol.io",
      rest: "https://rest.marsprotocol.io",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "mars",
        bech32PrefixAccPub: "mars" + "pub",
        bech32PrefixValAddr: "mars" + "valoper",
        bech32PrefixValPub: "mars" + "valoperpub",
        bech32PrefixConsAddr: "mars" + "valcons",
        bech32PrefixConsPub: "mars" + "valconspub",
      },
      currencies: [marsToken],
      feeCurrencies: [marsToken],
      stakeCurrency: marsToken,
      coinType: 118,
      gasPriceStep: {
        low: 0,
        average: 0,
        high: 0,
      },
    });
  }
});
