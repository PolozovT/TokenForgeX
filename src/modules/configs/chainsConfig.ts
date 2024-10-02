import { Address } from "viem";
import { currentEnv } from "../common/const";
import { Env } from "../common/types";

interface IChainsConfig {
  eth: Address,
  base: Address,
  bsc: Address,
  arbitrum: Address,
  optimism: Address;
}

// TODO: add layerZero, zkSync, fantom 

const DEV_CONFIG: IChainsConfig = {
  eth: '0x000',
  base: '0x000',
  bsc: '0x000',
  arbitrum: '0x000',
  optimism: '0x000',
};

const PROD_CONFIG: IChainsConfig = {
  eth: '0x000',
  base: '0x000',
  bsc: '0x000',
  arbitrum: '0x000',
  optimism: '0x000',
};

export function chainsConfigFromEnv(env = currentEnv) {
  switch (env) {
    case Env.Prod:
      return PROD_CONFIG;
    case Env.Dev:
    default:
      return DEV_CONFIG;
  }
}
