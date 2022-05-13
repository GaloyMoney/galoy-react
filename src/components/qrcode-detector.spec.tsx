import { render } from "@testing-library/react"
import { QRCodeDetecor } from "./qrcode-detector"

describe("QRCodeDetecor", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(
      <QRCodeDetecor
        startText="start"
        stopText="stop"
        onCodeDetected={jest.fn()}
        onValidCode={jest.fn()}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
