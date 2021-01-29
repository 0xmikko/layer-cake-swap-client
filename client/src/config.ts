
export const isDev = process.env.NODE_ENV !== 'production';

/// BACKEND & CONTRACTS
export const VAULT_ADDRESS = process.env.REACT_APP_VAULT_ADDRESS || "";
export const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS || "";
export const CHAIN_ID = parseInt(process.env.REACT_APP_CHAIN_ID || "12");
export const INITIAL_RATIO = 1000;
