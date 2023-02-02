export function truncateAddress(address: string) {
  if (!address) return "";

  return `${address.slice(0, 5)}...${address.slice(-3)}`;
}

export function truncateAmount(amount: number, decimals = 4) {
  return Math.round(amount * 10 ** decimals) / 10 ** decimals || amount;
}
