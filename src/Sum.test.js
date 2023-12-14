import Sum from './Sum'
import { screen, render } from '@testing-library/react'
test('Check for sum', () => {
    expect(Sum(10, 10)).toBe(20);
})
test('Check for sum 2', () => {
    expect(Sum(100, 10)).toBe(160);
})