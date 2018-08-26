import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import FormRegistration from './FormRegistration';

import { getEnrollmentReasons } from '../services/enrollment';
import { registerStudent } from '../services/registration';
import { getRelationships } from '../services/relationship';
import { getSchools } from '../services/school';

class Register extends Component {
  state = {
    activeStep: 0,
    completed: false,
    enrollmentReasons: [],
    hasErrors: null,
    relationships: [],
    schools: [],
  };

  componentDidMount() {
    getEnrollmentReasons().then(enrollmentReasons => this.setState({ enrollmentReasons }));
    getRelationships().then(relationships => this.setState({ relationships }));
    getSchools().then(schools => this.setState({ schools }));
  }

  dismiss = () => this.setState({ hasErrors: null });

  getSteps = () => (['Details', 'Contact', 'Criteria']);

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleSubmit = data => {
    registerStudent(data)
      .then(() => this.props.history.push('/attendance'))
      .catch(err => this.setState({ hasErrors: err.message }));
  }

  render() {
    const {
      activeStep,
      enrollmentReasons,
      hasErrors,
      relationships,
      schools,
    } = this.state;
    const steps = this.getSteps();

    return (
      <React.Fragment>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                onClick={this.handleStep(index)}
                completed={this.state.completed[index]}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <Divider />
        <FormRegistration
          enrollmentReasons={enrollmentReasons}
          relationships={relationships}
          schools={schools}
          step={activeStep}
          onSubmit={this.handleSubmit}
        />
        <Snackbar
          open={!!hasErrors}
          message={hasErrors}
          action={
            <Button color="secondary" size="small" onClick={this.dismiss}>
              Dismiss
            </Button>
          }
        />
      </React.Fragment>
    );
  }
}

export default withRouter(Register);
