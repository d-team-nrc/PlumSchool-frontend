import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const style = {
  display: 'flex',
  flexDirection: 'column',
}

class FormRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caregiver_contact: '',
      caregiver_name: '',
      caregiver_relationship: '',
      center_referral: '',
      date_of_birth: '',
      enrollment_reasons: '',
      fmr_school_attended: false,
      gender: 'female',
      has_been_referred: false,
      has_chronical: false,
      has_disability: false,
      has_injury: false,
      has_passed_grade_exam: false,
      health_consent: false,
      name: '',
      national_id: '',
      previously_enrolled: false,
      previous_school: '',
      school_id: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { enrollmentReasons, relationships, schools, step } = this.props;
    const {
      caregiver_contact,
      caregiver_name,
      caregiver_relationship,
      center_referral,
      date_of_birth,
      enrollment_reasons,
      fmr_school_attended,
      gender,
      has_been_referred,
      has_chronical,
      has_disability,
      has_injury,
      has_passed_grade_exam,
      health_consent,
      name,
      national_id,
      previously_enrolled,
      previous_school,
      school_id,
    } = this.state;

    return (
      <div style={{ padding: '16px' }}>
        {step === 0 ? (
          <form style={style}>
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
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
              label="Date of Birthday"
              type="date"
              value={date_of_birth}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              id="national_id"
              label="National ID"
              value={national_id}
              onChange={this.handleChange('national_id')}
              margin="normal"
            />
            <TextField
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
              id="caregiver_name"
              label="Caregiver Name"
              value={caregiver_name}
              onChange={this.handleChange('caregiver_name')}
              margin="normal"
            />
            <TextField
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
              id="center_referral"
              label="Center Referral"
              helperText="How did you hear about the center?"
              value={center_referral}
              onChange={this.handleChange('center_referral')}
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
              id="enrollment_reasons"
              select
              label="Enrollment Reason"
              value={enrollment_reasons}
              onChange={this.handleChange('enrollment_reasons')}
              margin="normal"
            >
              {enrollmentReasons.map(reason => (
                <MenuItem key={reason.id} value={reason.id}>
                  {reason.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="previous_school"
              select
              label="Previous school"
              value={previous_school}
              onChange={this.handleChange('previous_school')}
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
      </div>
    );
  }
}

FormRegistration.defaultProps = {
  enrollmentReasons: [],
  relationships: [],
  schools: [],
  step: 0,
};

export default FormRegistration;
