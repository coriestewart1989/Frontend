import React from "react";
import { render, screen } from "@testing-library/react";

import Classes from "../components/Classes";

describe("Unit Testing", () => {
  it("Test that Classes component renders", () => {
    render(<Classes />);
  });
});
