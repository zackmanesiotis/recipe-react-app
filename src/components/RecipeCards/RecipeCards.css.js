import red from "@material-ui/core/colors/red";

export const styles = theme => ({
  card: {
    maxWidth: 400,
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  actions: {
    display: 'flex',
  },

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },

  avatar: {
    backgroundColor: red[500],
  },

  toolbar: theme.mixins.toolbar,
});