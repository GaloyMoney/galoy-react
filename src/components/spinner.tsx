import { Icon } from "./icon"

export type SpinnerSize = "big" | "small"

type Props = { size?: SpinnerSize }

export const Spinner = ({ size = "small" }: Props) => {
  if (size === "big") {
    return (
      <div className="big-spinner">
        <Icon name="spinner" />
      </div>
    )
  }
  return <Icon name="spinner" />
}
