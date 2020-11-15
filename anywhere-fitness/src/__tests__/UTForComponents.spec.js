import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { fetchClasses as mockFetchClasses } from "../api/fetchClasses";
import { fetchUesrInfo as mockFetchUserInfo } from "../api/fetchUserInfo";
import { mockClasses } from "../__mocks__/classesData";
import { mockClass } from "../__mocks__/classData";
import { mockUserInfo } from "../__mocks__/userData";

import Classes from "../components/Classes";
import Class from "../components/Class";
import Dashboard from "../components/Dashboard";

jest.mock("../__mocks__/fetchClasses.js");
jest.mock("../__mocks__/fetchUserInfo.js");

describe("Unit Testing", () => {
  describe("Classes Component", () => {
    it("Test that Classes component renders", () => {
      render(<Classes />);
    });
    it("Check that list of classes renders", async () => {
      mockFetchClasses.mockResolvedValueOnce(mockClasses);
      render(<Classes />);

      await waitFor(() => {
        const classes = screen.getByTestId("classes-all");
        expect(classes).toHaveLength(3);
      });
    });
  });

  describe("Class Component", () => {
    it("Check that component displays the correct values", () => {
      render(<Class class={mockClass} />);
      expect(screen.getAllByTestId("class-detail")).toHaveLength(3);

      fireEvent.click(screen.getByTestId("class-show-button"));
      expect(screen.getAllByTestId("class-detail")).toHaveLength(8);

      fireEvent.click(screen.getByTestId("class-hide-button"));
      expect(screen.getAllByTestId("class detail")).toHaveLength(3);
    });
  });

  describe("Dashboard Component", () => {
    it("Check that dashboard displays customer info and classes", () => {
      mockFetchUserInfo.mockResolvedValueOnce(mockUserInfo);
      mockFetchClasses.mockResolvedValueOnce(mockClasses);
      render(<Dashboard />);
      expect(screen.getByText("chrisg8691")).toBeTruthy();
      expect(screen.getAllByTestId("class")).toHaveLength(3);
    });

    it("Check that dashboard displays instructor info and class form", () => {
      mockFetchUserInfo.mockResolvedValueOnce(mockUserInfo);
      mockFetchUserInfo.mockResolvedValueOnce(mockClasses);
      render(<Dashboard optionType="instructor" />);

      expect(screen.getAllByTestId("class")).toHaveLength(3);

      fireEvent.click(screen.getByTestId("dashboard-edit"));

      userEvent.type(screen.getByTestId("class-form-name"), "Yoga");

      expect(screen.getByTestId("class-form-name")).toHaveValue("Yoga");
    });
  });
});
