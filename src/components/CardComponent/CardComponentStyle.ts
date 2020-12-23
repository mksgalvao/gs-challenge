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
    root: {
      maxWidth: 385,
      margin: 10,
      [theme.breakpoints.between("xs", "sm")]: {
        alignItems: "center",
      },
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

    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);
