import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
