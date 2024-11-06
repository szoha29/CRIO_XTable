import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TableSortingApp from "./TableSortingApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TableSortingApp />
  </StrictMode>
);
