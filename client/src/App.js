import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, DialogTitle } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import doge from './images/doge.png'
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Task Flow Tracker</Typography>
                <img src={doge} alt="doge" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;