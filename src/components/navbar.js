import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    title: {    
      flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Weather Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;