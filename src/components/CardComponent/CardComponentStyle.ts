import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const cardComponentStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardsWrapper: {
      display: "flex",
      flexWrap: "wrap",

      [theme.breakpoints.between("xs", "sm")]: {
        flexDirection: "column !important",
        maxWidth: "100%",
      },
    },
    cardRoot: {
      maxWidth: 385,
      margin: 10,
      [theme.breakpoints.between("xs", "sm")]: {
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
  })
);
