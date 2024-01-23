import { render, screen } from '@testing-library/react'
import Three_CheckBox_testing from "../Components/Three_CheckBox_testing"

test('Testing input and label', () => {
    render(<Three_CheckBox_testing />)
    const input = screen.getByLabelText("Username")
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("Jay")

})

test('Testing Checkbox', () => {
    render(<Three_CheckBox_testing />)
    const checkbox = screen.getByLabelText("Skills")
    expect(checkbox).toBeInTheDocument()
})
