import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"

beforeEach(() => {
    console.log("************ Before Each ************");

})

test('Click event test case ', () => {
    render(<App />)
    let btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(screen.getByText("Updated data")).toBeInTheDocument()
})
test('Click event test case 1 ', () => {
    render(<App />)
    let btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(screen.getByText("Updated data")).toBeInTheDocument()
})
test('Click event test case 2 ', () => {
    render(<App />)
    let btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(screen.getByText("Updated data")).toBeInTheDocument()
})
