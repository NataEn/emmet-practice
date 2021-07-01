import { keyframes } from "styled-components";

const Theme = {
  fonts: {
    family: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
    size: {
      small: "14px",
    },
  },

  border: {
    radius: "0.25rem",
  },
  padding: {
    large: "3rem",
    medium: "1.5rem",
    small: "0.5rem",
    micro: "2px",
  },
  margin: {
    large: "3rem",
    medium: "1.5rem",
    small: "0.25rem",
    regular: "1rem",
  },
  grid: {
    gap: "1.5rem",
  },
  colors: {
    primary: "#38a6ad",
    primaryLight: "#d2eef0",
    primaryDark: "#1f5b5f",
    secondaryLight: "#c4b8b8",
    secondary: "#8f7979",
    secondaryDark: "#6e5c5c",
    secondaryDarker: "#554747",
    success: "#69da6b",
    danger: "#d11606",
  },
  fonts: {
    primarySize: "16px",
  },
  heights: {
    primary: "33.5vh",
  },
};

export const beat = keyframes`
  to {
    transform: scale(1.2);
}`;

export const shake = keyframes`
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  
}`;

export default Theme;
