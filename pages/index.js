import Head from 'next/head'
import Link from 'next/link'
import { Button, Box, ButtonGroup,  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
       <title>รับออกแบบและพัฒนาเว็บไซต์</title>
      </Head>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/"><a>Home</a></Link> |  
            <Link href="/about"><a>About</a></Link> |    
            <Link href="/service"><a>Service</a></Link> |    
            <Link href="/products/P001"><a>Products</a></Link> |
            <Link href="/components"><a>Components</a></Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
      <div>
        <h1><center>Index Page</center></h1>
        <br/>
        <center>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <br /><br /><br />
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <br /><br /><br />
        </center>
      </div>
    </div>
  )
}