import { Env } from "./types";

export const currentEnv: Env = import.meta.env.VITE_ENV
  ? (import.meta.env.VITE_ENV as Env)
  : Env.Dev;

export const isMainnet = currentEnv === Env.Prod;
export const isDevEnv = currentEnv === Env.Dev;