import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const cardComponentStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      margin: 10,
      [theme.breakpoints.between("xs", "md")]: {
        alignItems: "center",
        width: 385,
      },
      [theme.breakpoints.up("md")]: {
        width: 360,
        alignItems: "center",
      },
      cursor: "pointer",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
      hover: {
        "&:hover": {
          backgroundColor: theme.palette.success.main,
        },
      },
    },
    moreInfo: { marginLeft: "auto" },
    description: {
      marginTop: 10,
      height: 170,
    },
  })
);
