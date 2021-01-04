import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const formComponentStyle = makeStyles((theme: Theme) =>
  createStyles({
    formRoot: {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      padding: 30,
      width: 400,
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    title: {
      alignSelf: "center",
      marginTop: 20,
    },

    modal: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "center",
    },

    submit: {
      marginTop: 40,
    },
  })
);
