type NormalizedCacheObject = import("@apollo/client").NormalizedCacheObject

declare interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initGeetest: (...args: any[]) => void
}

type CachedData = {
  authToken: string
  satPriceInCents: number
}

type UseMyUpdates = {
  satsToUsd: ((sats: number) => number) | null
  usdToSats: ((usd: number) => number) | null
  currentBalance: number | null
  intraLedgerUpdate: import("@galoymoney/client").GaloyGQL.IntraLedgerUpdate | null
  lnUpdate: import("@galoymoney/client").GaloyGQL.LnUpdate | null
  onChainUpdate: import("@galoymoney/client").GaloyGQL.OnChainUpdate | null
}

type SpinnerSize = "small" | "big"
