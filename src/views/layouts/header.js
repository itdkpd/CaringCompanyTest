import React, { useLayoutEffect } from 'react';
import Clock from 'react-live-clock'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import Button from '../../components/appButton/appButton'
import '../../assets/stylesheets/header/header.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        background: 'twilight-blue',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    oval: {
        width: '20px',
        height: '20px',
        fontSize: '12px',
        background: '#202020'
    },
    marginLeft: {
        marginLeft: '10px'
    },
    flexGrow: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    useLayoutEffect(() => {
        ReactDOM.render(
            <Clock format="LTS" ticking timezone="Asia/Manila" />,
            document.getElementById('app-time'),
        )
    }, [])

    return (
        <div className="header">
        <div className={classes.root}>
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: false,
            })}>
            <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Avatar className={classes.oval}>SC</Avatar>
                </IconButton>
                <Collapse component="li" in={true} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        <ListItem button component={RouterLink} to="/">
                            <ListItemText primary='Sydney Clinic' />
                            <ExpandMore/>
                        </ListItem>
                    </List>
                </Collapse>
                <Collapse component="li" className="dark" in={true} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        <ListItem button component={RouterLink} to="/">
                            <ListItemText primary='5 tabs active' />
                            <ExpandMore/>
                        </ListItem>
                    </List>
                </Collapse>
                <Button className={classes.marginLeft} appButton={{ color: 'dark', icon: 'plus', iconOnly: true }} />
                <Button className={classes.marginLeft} appButton={{ color: 'dark', icon: 'search', iconOnly: true }} />
                <span className={classes.flexGrow} />
                <div className="header-end">
                    <span className='fas fa-clock' />
                    <span id="app-time" />
                    <span>|</span>
                    <span className='fas fa-sun' />
                    <span className='fas fa-clipboard-list' />
                    <span className='fas fa-bell' />
                </div>
                <AccountCircle />
            </Toolbar>
            </AppBar>
        </div>
        </div>
    );
}
