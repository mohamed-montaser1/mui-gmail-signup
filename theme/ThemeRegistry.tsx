"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import CssBaseline from "@mui/material/CssBaseline";
const themeOptions: ThemeOptions = {
  direction: "rtl",
};

const theme = createTheme(themeOptions);

interface Props {
  children: React.ReactNode;
}
export default function ThemeRegistry({ children }: Props) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui",   stylisPlugins: [prefixer, rtlPlugin], }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
