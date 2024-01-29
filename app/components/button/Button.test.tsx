import { render, screen } from "@testing-library/react";

import Button from ".";

describe("<Button />", () => {
  it("Should render the component", () => {
    render(<Button />);

    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });
});
