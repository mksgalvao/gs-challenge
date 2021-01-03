import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const phonesInfoStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexGrow: 1,
      marginTop: 30,
    },
    cardWrapper: {
      maxWidth: 600,
      maxHeight: 800,
    },
    media: {
      height: 400,
      maxWidth: "100%",
      marginTop: 30,
      marginLeft: 10,
      marginRight: 10,
    },
  })
);
