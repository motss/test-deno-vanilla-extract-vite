import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  fontFamily: "system-ui, sans-serif",
});

export const title = style({
  fontSize: "3rem",
  fontWeight: 700,
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const link = style({
  color: "#667eea",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
