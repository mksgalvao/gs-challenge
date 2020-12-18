import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const editPhoneModalStyle = makeStyles((theme: Theme) =>
createStyles({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(2)",
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid blue",
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
})
);