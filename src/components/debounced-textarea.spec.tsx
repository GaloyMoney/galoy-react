import { render } from "@testing-library/react"

import { DebouncedTextarea } from "./debounced-textarea"

describe("DebouncedTextarea", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<DebouncedTextarea />)
    expect(asFragment()).toMatchSnapshot()
  })
})
