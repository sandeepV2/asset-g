/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

test("renders learn react link", async () => {
  // render(<App />);
  // const linkElement = screen.getByText(/FIRM ID/i);
  const { getByTestId } = render(<App />);
  const investorTableHeader = getByTestId("investorHeader");

  await waitFor(() =>
    expect(investorTableHeader.innerHTML).toContain("Firm Id")
  );
});
