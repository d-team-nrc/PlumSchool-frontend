import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import FormRegistration from './FormRegistration';

import { getEnrollmentReasons } from '../services/enrollment';
import { getRelationships } from '../services/relationship';
import { getSchools } from '../services/school';

class Register extends Component {
  state = {
    activeStep: 0,
    completed: false,
    enrollmentReasons: [],
    relationships: [],
    schools: [],
  };

  componentDidMount() {
    getEnrollmentReasons().then(enrollmentReasons => this.setState({ enrollmentReasons }));
    getRelationships().then(relationships => this.setState({ relationships }));
    getSchools().then(schools => this.setState({ schools }));
  }

  getSteps = () => (['Details', 'Contact', 'Criteria']);

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  render() {
    const {
      activeStep,
      enrollmentReasons,
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
        />
      </React.Fragment>
    );
  }
}

export default Register;
