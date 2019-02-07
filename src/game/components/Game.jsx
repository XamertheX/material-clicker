import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles, createStyles } from '@material-ui/core';

const styles = (theme) => createStyles({
    main: {
        flex: 1,
    },
    appBar: {
        WebkitAppRegion: 'drag',
    },
});

class Game extends Component {
    state = {  }
    render() {
        const c = this.props.classes;

        return <>
            {/* TODO: Create a actual title bar. */}
            <AppBar color="primary" className={c.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit">Material Clicker</Typography>
                </Toolbar>
            </AppBar>
            <div className={c.main}>

            </div>
        </>;
    }
}
 
export default withStyles(styles)(Game);
