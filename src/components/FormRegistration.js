import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const style = {
  display: 'flex',
  flexDirection: 'column',
}

const btnGroup = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '32px',
};

const grades = Array.from(new Array(8), (val, index) => index + 1);

class FormRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caregiver_contact: '',
      caregiver_name: '',
      caregiver_referral: '',
      caregiver_relationship: '',
      date_of_birth: '',
      enrollment_reason_id: '',
      fmr_school_attended: false,
      gender: 'female',
      has_been_referred: false,
      has_chronical: false,
      has_disability: false,
      has_injury: false,
      has_passed_grade_exam: false,
      health_consent: false,
      last_grade_completed: 1,
      name: '',
      national_id: '',
      previously_enrolled: false,
      previous_school_id: '',
      school_id: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  cancelChanges = () => {
    if (window.confirm('Are you sure? The student registration is not saved yet.')) {
      this.props.history.push('/');
    }
  }

  render() {
    const { enrollmentReasons, relationships, schools, step } = this.props;
    const {
      caregiver_contact,
      caregiver_name,
      caregiver_referral,
      caregiver_relationship,
      date_of_birth,
      enrollment_reason_id,
      fmr_school_attended,
      gender,
      has_been_referred,
      has_chronical,
      has_disability,
      has_injury,
      has_passed_grade_exam,
      health_consent,
      last_grade_completed,
      name,
      national_id,
      previously_enrolled,
      previous_school_id,
      school_id,
    } = this.state;

    return (
      <div style={{ padding: '16px' }}>
        {step === 0 ? (
          <form style={style}>
            <TextField
              required
              id="name"
              label="Name"
              value={name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              required
              id="gender"
              select
              label="Gender"
              value={gender}
              onChange={this.handleChange('gender')}
              margin="normal"
            >
              <MenuItem key="female" value="female">
                Female
              </MenuItem>
              <MenuItem key="male" value="male">
                Male
              </MenuItem>
            </TextField>
            <TextField
              id="date_of_birth"
              label="Date of Birth"
              type="date"
              value={date_of_birth}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleChange('date_of_birth')}
              margin="normal"
            />
            <TextField
              required
              id="national_id"
              label="National ID"
              value={national_id}
              onChange={this.handleChange('national_id')}
              margin="normal"
            />
            <TextField
              required
              id="school_id"
              select
              label="School"
              value={school_id}
              onChange={this.handleChange('school_id')}
              margin="normal"
            >
              {schools.map(school => (
                <MenuItem key={school.id} value={school.id}>
                  {school.name}
                </MenuItem>
              ))}
            </TextField>
          </form>
        ) : null}

        {step === 1 ? (
          <form style={style}>
            <TextField
              required
              id="caregiver_name"
              label="Caregiver Name"
              value={caregiver_name}
              onChange={this.handleChange('caregiver_name')}
              margin="normal"
            />
            <TextField
              required
              id="caregiver_contact"
              label="Caregiver Contact"
              value={caregiver_contact}
              onChange={this.handleChange('caregiver_contact')}
              margin="normal"
            />
            <TextField
              id="caregiver_relationship"
              select
              label="Caregiver Relationship"
              value={caregiver_relationship}
              onChange={this.handleChange('caregiver_relationship')}
              margin="normal"
            >
              {relationships.map(relationship => (
                <MenuItem key={relationship.id} value={relationship.id}>
                  {relationship.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="caregiver_referral"
              label="Center Referral"
              helperText="How did you hear about the center?"
              value={caregiver_referral}
              onChange={this.handleChange('caregiver_referral')}
              margin="normal"
            />
          </form>
        ) : null}

        {step === 2 ? (
          <form style={style}>
            <FormControlLabel
              control={<Checkbox checked={has_disability} value="has_disability" />}
              label="Is the child suffering from any disabilities?"
            />
            <FormControlLabel
              control={<Checkbox checked={has_injury} value="has_injury" />}
              label="Does the child have any injuries?"
            />
            <FormControlLabel
              control={<Checkbox checked={has_chronical} value="has_chronical" />}
              label="Does the child have any chronical diseases?"
            />
            <FormControlLabel
              control={<Checkbox checked={health_consent} value="health_consent" />}
              label="Health consent"
            />
            <FormControlLabel
              control={<Checkbox checked={has_passed_grade_exam} value="has_passed_grade_exam" />}
              label="Has passed grade exam?"
            />
            <FormControlLabel
              control={<Checkbox checked={fmr_school_attended} value="fmr_school_attended" />}
              label="School attended?"
            />
            <FormControlLabel
              control={<Checkbox checked={previously_enrolled} value="previously_enrolled" />}
              label="Previously enrolled?"
            />
            <FormControlLabel
              control={<Checkbox checked={has_been_referred} value="has_been_referred" />}
              label="Has been referred?"
            />
            <TextField
              id="last_grade_completed"
              select
              label="Last Grade Completed"
              value={last_grade_completed}
              onChange={this.handleChange('last_grade_completed')}
              margin="normal"
            >
              {grades.map(grade => (
                <MenuItem key={`grade-${grade}`} value={grade}>
                  {grade}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="enrollment_reason_id"
              select
              label="Enrollment Reason"
              value={enrollment_reason_id}
              onChange={this.handleChange('enrollment_reason_id')}
              margin="normal"
            >
              {enrollmentReasons.map(reason => (
                <MenuItem key={reason.id} value={reason.id}>
                  {reason.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="previous_school_id"
              select
              label="Previous school"
              value={previous_school_id}
              onChange={this.handleChange('previous_school_id')}
              margin="normal"
            >
              {schools.map(school => (
                <MenuItem key={school.id} value={school.id}>
                  {school.name}
                </MenuItem>
              ))}
            </TextField>
          </form>
        ) : null}

        <div style={btnGroup}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => this.props.onSubmit(this.state)}
          >
            Save
          </Button>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={this.cancelChanges}
            style={{ marginLeft: '16px' }}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

FormRegistration.defaultProps = {
  enrollmentReasons: [],
  onSubmit: () => {},
  relationships: [],
  schools: [],
  step: 0,
};

export default withRouter(FormRegistration);
