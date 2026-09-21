import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import App from "./App.svelte";

test("renders the app name", () => {
  render(App);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Floriograph",
  );
});
