import { memo } from "react"
import { SatSymbol } from ".."

type Props = {
  amount: number
}

export const satsFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
})

export const SatFormatComponent = ({ amount }: Props) => {
  const formattedSats = satsFormatter.format(Math.abs(amount))
  return (
    <span className="sat-format" title="Bitcoin Satoshis">
      {amount < 0 && <span className="minus">-</span>}
      <SatSymbol />
      {formattedSats}
    </span>
  )
}

export const SatFormat = memo(SatFormatComponent)
