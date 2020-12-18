import {
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";

export const cardComponentStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardsWrapper:{
      display: "flex",
      flexWrap: "wrap",

      [theme.breakpoints.down("xs")]: {
        flexDirection: "column !important",      
      },

    },
    root: {
      maxWidth: 500,
      margin: 10,

      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",      
      },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    moreInfo: { marginLeft: 'auto'},

    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },

  })
);
