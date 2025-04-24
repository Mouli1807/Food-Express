import { render, screen } from "@testing-library/react"
import Contact from "../ContactUs"
import "@testing-library/jest-dom"

test("it should load button component", () => {
    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});