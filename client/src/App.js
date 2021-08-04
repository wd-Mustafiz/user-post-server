import React, { useEffect } from 'react';
import {AppBar, Container, Grid, Grow, Typography} from '@material-ui/core'
import logo from "./images/logo.png"
import From from './components/Form/From';
import Posts from './components/Posts/Posts';
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import { getPosts } from './Redux/Actions/posts';

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    } , [dispatch])
    return (
        <Container maxwidth="lg">
            <AppBar className={`${classes.appBar} appBg`} position="static" color="inherit">
                <Typography className={classes.heading} variant="h4" align="center">
                MEMORIES
                </Typography>
                <img height='40' className={classes.image} src={logo} alt="memories" srcSet=""/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" className={classes.mainContainer} alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <From />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;