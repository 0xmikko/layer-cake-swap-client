
export const isDev = process.env.NODE_ENV !== 'production';

console.log(process.env);

/// BACKEND & CONTRACTS
export const BACKEND_ADDR = process.env.BACKEND_ADDR;
export const VAULT_ADDRESS = process.env.REACT_APP_VAULT_ADDRESS || "";
export const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS || "";
export const CHAIN_ID = parseInt(process.env.REACT_APP_CHAIN_ID || "12");
