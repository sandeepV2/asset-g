/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe("App Test", () => {
  test("app test firm id table header", async () => {
    // render(<App />);
    // const linkElement = screen.getByText(/FIRM ID/i);
    const { getByTestId } = render(<App />);
    const investorTableHeader = getByTestId("investorHeader");

    await waitFor(() =>
      expect(investorTableHeader.innerHTML).toContain("Firm Id")
    );
  });

  test("app test firm id inside table", async () => {
    // findByTestId matches the first occurance.
    const { findByTestId } = render(<App />);
    await waitFor(() => {
      const investorTableHeader = findByTestId("firmId");
      expect(investorTableHeader).toBeTruthy();
    });
  });
});
