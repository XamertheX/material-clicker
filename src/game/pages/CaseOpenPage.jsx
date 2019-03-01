//
// Settings Page: Change game settings.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars } from '../systems/vars';
import classNames from 'classnames';
import { getCaseById } from '../systems/case';
import { easeExpOut } from 'd3-ease';

const quadBezier = 'cubic-bezier(0.165,0.84,0.44,1)';

import CoverImg from '../../res/img/case-roll-cover.png';

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  text1shrink: {
    transition: 'all 0.3s ' + quadBezier,
    transform: 'scale(0.8)',
    opacity: '0',
  },
  roll: {
    position: 'absolute',
    width: '100%',
    height: 450,
    textAlign: 'center',
    fontSize: 28,
    lineHeight: '48px',
    overflow: 'hidden',
    transition: 'all 0.3s ' + quadBezier,
    transform: 'scale(1.2)',
    opacity: '0',
  },
  rollVisible: {
    transform: 'scale(1)',
    opacity: '1',
  },
  coverImg: {
    position: 'absolute',
  },
});

class CaseOpenPage extends Component {
  static id = 'case-open';
  static display = 'Case Opening';
  static hideTab = true;

  animationFrame = 0;

  state = {
    animation: 0,
    caseItems: null,
    scrollHeight: 0,
  };

  refRoot = (root) => {
    if(root) {
      this.root = root;
    }
  }

  componentDidMount() {
    const caseItem = getCaseById(vars.caseOpenCase);
    const gen = caseItem.getItemGenerator();

    this.setState({
      caseItems: Array(250).fill().map(() => gen.next()),
    });

    setTimeout(() => {
      this.setState({ animation: 1 });
    }, 1000);
    setTimeout(() => {
      const calc = () => {
        const x = easeExpOut(this.animationFrame / 400);
        this.root.scrollTop = x * 11500;
      };
      const int = setInterval(() => {
        this.animationFrame++;
        calc();
      }, 1000 / 60);
      setTimeout(() => {
        clearInterval(int);
        this.animationFrame = 400;
      }, 1000 / 60 * 400);
      calc();
    }, 2500);
  }

  render() {
    const { classes: c } = this.props;
    const { animation: step } = this.state;
    const caseItem = getCaseById(vars.caseOpenCase);

    if (!caseItem) {
      return null;
    }

    return <div className={c.root}>
      {
        step <= 1 && <Typography
          variant='h3'
          component='h1'
          className={classNames({
            [c.text1shrink]: step === 1,
          })}
        >
          {caseItem.caseName}
        </Typography>
      }
      {
        step >= 0
        && this.state.caseItems
        && <>
          <div ref={this.refRoot} className={classNames({
            [c.roll]: true,
            [c.rollVisible]: step >= 1,
          })}>
            {
              this.state.caseItems.map(({ name }, i) => {
                return <div key={i}>{name}</div>;
              })
            }
          </div>
          <img src={CoverImg} alt='' className={c.coverImg} />
        </>
      }
    </div>;
  }
}

export default hot(withStyles(styles)(CaseOpenPage));
