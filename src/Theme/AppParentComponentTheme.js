import { createTheme } from "@mui/material/styles";

let customTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#ffffff",
      transparent: "red",
    },
  },

  components: {
    // Name of the component

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "Gotham-Black",
          fontSize: "60px",
        },
        h2: {
          fontFamily: "Gotham-Black",
          fontSize: "40px",
        },

        h6: {
          fontFamily: "Gotham-Black",
        },

        p2: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "20px",
        },
        p3: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "14px",
        },
        body1: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "25px",
        },
        body2: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "20px",
        },
        body3: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "14px",
        },
        body4: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "20px",
        },
        GothamBlack13: {
          fontFamily: "Gotham-Black",
          fontSize: "13px",
          "@media (max-width: 680px)": {
            fontSize: "11px",
          },
        },
        GothamBlack18: {
          fontFamily: "Gotham-Black",
          fontSize: "18px",
          "@media (max-width: 680px)": {
            fontSize: "14px",
          },
        },

        GothamBlack24: {
          fontFamily: "Gotham-Black",
          fontSize: "24px",
          "@media (max-width: 680px)": {
            fontSize: "20px",
          },
        },
        GothamBlack24Bold: {
          fontFamily: "Gotham-Black",
          fontSize: "24px",
          fontWeight: "900",
          "@media (max-width: 680px)": {
            fontSize: "20px",
          },
        },
        GothamBlack26: {
          fontFamily: "Gotham-Black",
          fontSize: "26px",
          "@media (max-width: 680px)": {
            fontSize: "20px",
          },
        },
        GothamBlack27: {
          fontFamily: "Gotham-Black",
          fontSize: "27px",
          "@media (max-width: 680px)": {
            fontSize: "21px",
          },
        },
        GothamBlack30: {
          fontFamily: "Gotham-Black",
          fontSize: "30px",
          "@media (max-width: 680px)": {
            fontSize: "27px",
          },
        },
        GothamBlack36: {
          fontFamily: "Gotham-Black",
          fontSize: "36px",
          "@media (max-width: 680px)": {
            fontSize: "24px",
          },
        },
        GothamBlack45: {
          fontFamily: "Gotham-Black",
          fontSize: "45px",
          "@media (max-width: 680px)": {
            fontSize: "27px",
          },
        },
        AlwynNewRoundedRegular14: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "14px",
        },
        AlwynNewRoundedRegular14Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "14px",
          fontWeight: "bold",
        },
        AlwynNewRoundedRegular12: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "12px",
        },
        AlwynNewRoundedRegular13: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "13px",
        },
        AlwynNewRoundedRegular13Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "13px",
          fontWeight: "bold",
        },
        AlwynNewRoundedRegular12Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "12px",
          fontWeight: "bold",
        },
        AlwynNewRoundedRegular15: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "15px",
        },
        AlwynNewRoundedRegular15Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "15px",
          fontWeight: "bold",
        },
        AlwynNewRoundedRegular16: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "16px",
        },
        AlwynNewRoundedRegular18: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "18px",
          "@media (max-width: 680px)": {
            fontSize: "14px",
          },
        },
        AlwynNewRoundedRegular28: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "28px",
          "@media (max-width: 680px)": {
            fontSize: "14px",
          },
        },

        DubaiRegular10: {
          fontFamily: "DubaiRegular",
          fontSize: "10px",
        },
        DubaiRegular12: {
          fontFamily: "DubaiRegular",
          fontSize: "12px",
          "@media (max-width: 680px)": {
            fontSize: "10px",
          },
        },
        DubaiRegular14: {
          fontFamily: "DubaiRegular",
          fontSize: "14px",
          "@media (max-width: 680px)": {
            fontSize: "11px",
          },
        },
        DubaiRegular14Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "14px",
          fontWeight: "bold",
          "@media (max-width: 680px)": {
            fontSize: "11px",
          },
        },
        DubaiRegular16: {
          fontFamily: "DubaiRegular",
          fontSize: "16px",
          "@media (max-width: 680px)": {
            fontSize: "12px",
          },
        },
        DubaiRegular16Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "16px",
          fontWeight: "bold",
          "@media (max-width: 680px)": {
            fontSize: "12px",
          },
        },
        DubaiRegular18: {
          fontFamily: "DubaiRegular",
          fontSize: "18px",
          "@media (max-width: 680px)": {
            fontSize: "13px",
          },
        },
        DubaiRegular18Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "18px",
          fontWeight: "bold",
          "@media (max-width: 680px)": {
            fontSize: "14px",
          },
        },
        DubaiRegular20: {
          fontFamily: "DubaiRegular",
          fontSize: "20px",
          "@media (max-width: 680px)": {
            fontSize: "14px",
          },
        },
        DubaiRegular20Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "20px",
          fontWeight: "bold",
          "@media (max-width: 680px)": {
            fontSize: "14px",
          },
        },
        DubaiRegular24: {
          fontFamily: "DubaiRegular",
          fontSize: "24px",
          "@media (max-width: 680px)": {
            fontSize: "16px",
          },
        },
        DubaiRegular24Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "24px",
          fontWeight: "bold",
          "@media (max-width: 680px)": {
            fontSize: "16px",
          },
        },
        DubaiRegular30Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "30px",
          fontWeight: "Bold",
          "@media (max-width: 680px)": {
            fontSize: "14px",
          },
        },
        DubaiRegular32Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "32px",
          fontWeight: "bold",
          "@media (max-width: 680px)": {
            fontSize: "20px",
          },
        },
        footerSocialIcon: {
          fontSize: "12px",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // zIndex: 1301,
          color: "#ffffff !important",
          backgroundColor: "#000000",
          fontFamily: "DubaiRegular16",
        },
      },
    },

    MuiTreeView: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: "54px",
          letterSpacing: "0",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "black",
          },
          "&.customButtonDark": {
            maxHeight: "2.3rem",
            color: "#fff",
            backgroundColor: "#000",
          },
          "&.customButtonDark  svg": {
            fill: "#fff",
          },
          "&.customButtonLight": {
            maxHeight: "2.3rem",
            color: "#000",
            backgroundColor: "#fff",
          },
          "&.customButtonLight  svg": {
            fill: "#000",
          },
          "&.indicator": {
            fontFamily: "DubaiReqular",
            fontSize: "18px",
          },
          //   "&.Mui-disabled": {
          //     backgroundColor:'white', // Customize the disabled background color here
          //     color: 'white', // Custo
          // },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          height: "54px",
          letterSpacing: "0",

          fontSize: "16px",
          fontFamily: "DubaiRegular",
        },
        select: {
          "& .MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-select": {
            height: "0",
          },
        },
        icon: {
          color: "#FFFFFF",
          transition: "none",
          transform: "none",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "black",
            color: "#FFFFFF",
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {},
      },
    },

    MuiMenu: {
      styleOverrides: {},
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          // zIndex:1301
        },
      },
    },

    MuiPopper: {
      styleOverrides: {
        root: {
          // position: "relative",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          zIndex: 1099,
          borderRadius: 0,
          "& .MuiMenu-list": {
            padding: "0px 0",
          },
          "& .MuiMenuItem-root.Mui-selected": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
        },
        dot: {
          height: "12px",
          width: "12px",
          backgroundColor: "transparent",
        },
        positionStatic: {
          paddingTop: "1.5rem",
        },
      },
    },
  },
});

export default customTheme;
