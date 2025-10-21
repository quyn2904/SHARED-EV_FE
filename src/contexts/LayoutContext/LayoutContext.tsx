import React from "react";

type Collapsible = "offcanvas" | "icon" | "none";
type Variant = "inset" | "sidebar" | "floating";

const LAYOUT_COLLAPSIBLE_STORAGE_NAME = "layout_collapsible";
const LAYOUT_VARIANT_STORAGE_NAME = "layout_variant";

type LayoutContextType = {
  resetLayout: () => void;
  defaultCollapsible: Collapsible;
  collapsible: Collapsible;
  setCollapsible: (collapsible: Collapsible) => void;

  defaultVariant: Variant;
  variant: Variant;
  setVariant: (variant: Variant) => void;
};

const LayoutContext = React.createContext<LayoutContextType | null>(null);

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {};
