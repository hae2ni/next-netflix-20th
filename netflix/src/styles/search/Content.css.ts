import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "7px",
  backgroundColor: "#424242",

  color: "white",
});

export const textplaycontainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
