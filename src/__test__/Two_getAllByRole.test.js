import { render, screen } from "@testing-library/react"
import Two_getAllByRole from "../Components/two_getAllByRole"

test('Testing buttons by getAllByRole', () => {
    render(<Two_getAllByRole />)
    const btns = screen.getAllByRole("button")
    // expect(btns).toBeInTheDocument(); // error   received value must be an HTMLElement or an SVGElement. Received has type:  array Received has value: [<button>Click me</button>, <button>Click me</button>]
    // expect(btns[0]).toBeInTheDocument()
    // looping
    for (let i = 0; i < btns.length; i++) {
        expect(btns[i]).toBeInTheDocument()
    }

})

test('Testing options by getAllByRole', () => {
    render(<Two_getAllByRole />)
    const options = screen.getAllByRole("option")
    for (let i = 0; i < options.length; i++) {
        expect(options[i]).toBeInTheDocument()
    }
})
