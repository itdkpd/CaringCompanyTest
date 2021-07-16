import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import '../../assets/stylesheets/sideMenu/sideMenu.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();

  return (
    <div id="sideMenu" className="sideMenu">
      <Drawer
        variant="permanent"
        className={classes.drawerClose}
        classes={{
          paper: classes.drawerClose,
        }}
      >
        <div className={classes.toolbar} />
        <List>
            <ListItem button>
                <ListItemIcon>
                    <EqualizerIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DateRangeIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
