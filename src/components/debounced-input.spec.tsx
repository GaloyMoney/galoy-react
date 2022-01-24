import { render } from "@testing-library/react"

import { DebouncedInput } from "./debounced-input"

describe("DebouncedInput", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<DebouncedInput />)
    expect(asFragment()).toMatchSnapshot()
  })
})
