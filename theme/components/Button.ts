import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    transitionTimingFunction: "ease-in-out",
    transitionProperty: "box-shadow, background, color, border, transform",
    transitionDuration: "0.5s",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "none",
    },
  },
  defaultProps: {
    size: "lg",
    cursor: "pointer",
    borderRadius: 8,
    width: {
      base: "full",
      sm: "auto",
    },
    mb: {
      base: 2,
      sm: 0,
    },
  },
  variants: {
    primary: {
      bg: "elision.100",
      border: "2px solid black",
      boxShadow: "3px 4px 0px #867df9",
      color: "elision.700",
      _hover: {
        color: "elision.700",
        bg: "elision.200",
        border: "2px solid black",
        transform: "translateY(-2px)",
        boxShadow: "none",
      },
    },
    secondary: {
      bg: "elision.200",
      border: "2px solid black",
      boxShadow: "3px 4px 0px #8882ff",
      color: "elision.700",
      _hover: {
        color: "elision.700",
        bgGradient: "linear(to-br, #1afed8, #8882ff)",
        border: "2px solid black",
        transform: "translateY(-2px)",
        boxShadow: "none",
      },
    },
    outline: {
      border: "2px solid lightgray",
      boxShadow: "3px 4px 0px white",
      _hover: {
        border: "2px solid white",
        transform: "translateY(-2px)",
        boxShadow: "none",
      },
    },
    ghost: {
      boxShadow: "0px 0px 0px white",
      bg: "transparent",
      border: "0px solid transparent",
      _hover: {
        scale: "translateY(-2px)",
        bg: "transparent",
        color: "elision.100",
        boxShadow: "none",
      },
    },
  },
};
