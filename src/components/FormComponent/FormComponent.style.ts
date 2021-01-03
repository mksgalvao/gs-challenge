import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const formComponentStyle = makeStyles((theme: Theme) =>
  createStyles({
    formRoot: {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      padding: 30,
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
    paper: {
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid blue",
      borderRadius: 10,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    submit: {
      marginTop: 40,
    },
  })
);
