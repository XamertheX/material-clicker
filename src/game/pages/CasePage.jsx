//
// Case Page: Lets you view and open cases.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { getCaseInventory } from '../systems/case';

const styles = (theme) => createStyles({
  cardAction: {
    padding: theme.spacing.unit * 2,
  },
  root: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    height: 'calc(100vh - 78px)',
  },
  top: {
    background: 'rgba(255,255,255,0.9)',
    position: 'sticky',
    paddingTop: 10,
    top: -10 - theme.spacing.unit,
    zIndex: 1000,
    boxShadow: '0 0 20px 9px #fffffff2',
  },
  title: {
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3,
    opacity: 0.6,
  },
});

class StatsPage extends Component {
  static id = 'case';
  static display = 'Cases';

  render() {
    const { classes: c } = this.props;

    return <div className={c.root}>
      <div className={c.top}>
        <Typography variant='h4' className={c.title}>
          Your Cases
        </Typography>
        <Typography variant='body1' className={c.desc}>
          Click a case to open it.
        </Typography>
      </div>
      <Grid container spacing={24} style={{padding:'10px'}}>
        {
          getCaseInventory().map((caseItem, i) => {
            return <Grid item lg={2} md={3} sm={4} xs={6} key={i}>
              <Card className={c.card}>
                <CardActionArea className={c.cardAction}>
                  <CardContent>
                    <Typography variant='h5' component='h2'>
                      {caseItem.caseName}
                    </Typography>
                    <Typography component='p'>
                      {caseItem.caseDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>;
          })
        }
      </Grid>
    </div>;
  }
}

export default hot(withStyles(styles)(StatsPage));
