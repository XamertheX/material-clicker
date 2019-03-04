//
// Case Open Page
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars, setVar } from '../systems/vars';
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
    width: 'max-content',
    height: 450,
    textAlign: 'center',
    fontSize: 28,
    lineHeight: '48px',
    overflow: 'hidden',
    transition: 'all 0.3s ' + quadBezier,
    transform: 'scale(1.2)',
    padding: '0 ' + theme.spacing.unit * 3 + 'px',
    opacity: '0',
    background: '#fafafa',
  },
  rollVisible: {
    transform: 'scale(1)',
    opacity: '1',
  },
  scalebig: {
    transition: 'all 0.3s ' + quadBezier,
    transform: 'scale(1.3)',
  },
  coverImg: {
    position: 'absolute',
  },
  divider: {
    height: 2,
    width: '100%',
    position: 'absolute',
    top: 'calc(50% - 1px)',
    background: 'rgba(0,0,0,0.25)',
    zIndex: '-1',
    opacity: 1,
    transition: 'opacity 0.4s linear 0.1s',
  },
  dividerInvisible: {
    opacity: 0,
  },
  opacity0: {
    transition: 'opacity 0.5s',
    opacity: 0,
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
      this.root.scrollTop = 40;
    }
  }

  componentDidMount() {
    const caseItem = getCaseById(vars.caseOpenCase);
    const gen = caseItem.getItemGenerator();

    const caseItems = Array(250).fill().map(() => gen.next());

    this.setState({
      caseItems,
    });

    setTimeout(() => {
      this.setState({ animation: 1 });
    }, 1000);

    setTimeout(() => {
      const calc = () => {
        const x = easeExpOut(this.animationFrame / 400);
        this.root.scrollTop = x * (11500 - 40) + 40 + 21;
      };
      const int = setInterval(() => {
        this.animationFrame++;
        calc();

        if(this.animationFrame >= 400) {
          clearInterval(int);
          caseItems[250 - 6].activate();
          this.setState({ animation: 3 });
          setTimeout(() => {
            setVar('caseOpenCase', null);
          }, 1500);
        }
      }, 1000 / 60);
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
            [c.text1shrink]: step >= 1,
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
                return <div key={i} className={
                  step === 3 && (
                    i !== 250 - 6 ? c.opacity0 : c.scalebig
                  )
                  || undefined
                }>{name}</div>;
              })
            }
          </div>
          <img src={CoverImg} alt='' className={c.coverImg} />

          <div className={classNames({
            [c.divider]: true,
            [c.dividerInvisible]: step === 0,
          })} />
        </>
      }
    </div>;
  }
}

export default hot(withStyles(styles)(CaseOpenPage));
