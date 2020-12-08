import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
});

export default function DotsMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <MobileStepper
      variant="dots"
      steps={5}
      style={{ background: 'transparent' }}
      position="none"
      activeStep={props.currentIndex}
      className={classes.root}
      nextButton={
        <Button size="large" style={{ color: 'black' }} onClick={props.handleNext} disabled={props.currentIndex === 4}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="large" style={{ color: 'black' }} onClick={props.handleBack} disabled={props.currentIndex=== 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}