import { memo } from "react"
import { Icon } from "./icon"

type Props = {
  amount: number
}

const satsFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
})

const SatFormatComponent = ({ amount }: Props) => {
  const formattedSats = satsFormatter.format(Math.abs(amount))
  return (
    <span className="sat-format" title="Bitcoin Satoshis">
      {amount < 0 && <span className="minus">-</span>}
      <Icon name="sat" />
      {formattedSats}
    </span>
  )
}

export const SatFormat = memo(SatFormatComponent)
