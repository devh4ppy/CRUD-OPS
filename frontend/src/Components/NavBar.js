import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20,
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Add Student</NavLink>
                <NavLink className={classes.tabs} to="all" exact>View All Students</NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
