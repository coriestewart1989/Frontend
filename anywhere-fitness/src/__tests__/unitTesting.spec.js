import React from "react";
import { render, screen } from "@testing-library/react";

import { fetchClasses as mockFetchClasses } from "../__mocks__/fetchClasses";
import { mockClasses } from "../__mocks__/classesData";

import Classes from "../components/Classes";

jest.mock("../__mocks__/fetchClasses.js");

describe("Unit Testing", () => {
  describe("Classes Component", () => {
    it("Test that Classes component renders", () => {
      render(<Classes />);
    });
    it("Check that list of classes renders", () => {
      mockFetchClasses.mockResolvedValueOnce(mockClasses);
      render(<Classes />);
    });
  });
});
