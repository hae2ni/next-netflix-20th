import { createGlobalTheme, globalFontFace, style } from "@vanilla-extract/css";

const sfDisplay = "sfDisplay";

globalFontFace(sfDisplay, [
  {
    src: "url(/fonts/SF_Display_Medium.OTF)",
    fontWeight: "500",
  },
  {
    src: "url(/fonts/SF_Display_Bold.OTF)",
    fontWeight: "700",
  },
  {
    src: "url(/fonts/SF_Display_Regular.OTF)",
    fontWeight: "400",
  },
]);

export const global = createGlobalTheme(":root", {
  font: {
    body: "SF_Display",
    menu: "sfDisplay",
  },
});

export const page = style({
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#000000',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});
