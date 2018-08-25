import React, { Component } from 'react';
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
      gender: 'female',
      name: '',
      national_id: '',
      school_id: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { relationships, schools, step } = this.props;
    const {
      caregiver_contact,
      caregiver_name,
      caregiver_relationship,
      center_referral,
      date_of_birth,
      gender,
      name,
      national_id,
      school_id
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
                <MenuItem key={school.school_id} value={school.school_id}>
                  {school.school_name}
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
              value={center_referral}
              onChange={this.handleChange('center_referral')}
              margin="normal"
            />
          </form>
        ) : null}
      </div>
    );
  }
}

FormRegistration.defaultProps = {
  relationships: [],
  schools: [],
  step: 0,
};

export default FormRegistration;
