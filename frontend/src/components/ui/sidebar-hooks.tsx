import * as React from "react";
import { type SidebarContextProps } from "./sidebar-types";

// Import the context from the main sidebar file
import { SidebarContext } from "./sidebar";

export function useSidebar(): SidebarContextProps {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}
