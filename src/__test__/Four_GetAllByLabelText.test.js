import { render, screen } from "@testing-library/react"
import Four_GetAllByLabelText from "../Components/Four_GetAllByLabelText"

test('Testing multiple element with same label name', () => {
    render(<Four_GetAllByLabelText />)
    const inputs = screen.getAllByLabelText("Username")
    // console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument()
    }

})
