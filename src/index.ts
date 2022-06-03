import { Window as KeplrWindow } from "@keplr-wallet/types";

// https://docs.keplr.app/api/
declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const addNonStandardBtn = document.getElementById("addNonStandardBtn") as HTMLButtonElement;

const marsToken = {
  coinDenom: "MARS",
  coinMinimalDenom: "umars",
  coinDecimals: 6,
  coinGeckoId: "mars-protocol",
};

const keplrChainInfo = (chainName: string, coinType = 118) => ({
  chainId: "mars-1",
  chainName: chainName,
  rpc: "https://rpc.marsprotocol.io",
  rest: "https://rest.marsprotocol.io",
  bip44: {
    coinType,
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
  coinType,
  gasPriceStep: {
    low: 0,
    average: 0,
    high: 0,
  },
});

window.onload = async () => {
  if (!window.keplr) {
    alert("Please install keplr extension");
  }

  addBtn.addEventListener("click", () => {
    window.keplr.experimentalSuggestChain(keplrChainInfo("Mars", 118));
  });

  addNonStandardBtn.addEventListener("click", () => {
    console.log('adding nonstandard')
    window.keplr.experimentalSuggestChain(keplrChainInfo("Mars (non-standard)", 330));
  });
};
