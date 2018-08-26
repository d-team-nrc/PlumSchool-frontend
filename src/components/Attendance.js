import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { saveAttendance } from '../services/attendance';
import { getCourses } from '../services/course';
import { getStudents } from '../services/student';

import AttendanceForm from './AttendanceForm';

class Attendance extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      courses: [],
      selectedCourse: {},
      students: [],
    };
  }

  componentDidMount() {
    getCourses().then(courses => this.setState({ courses, selectedCourse: courses[0] }));
    getStudents().then(students => this.setState({ students }));
  }

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  selectedCourse = course => {
    this.setState((prevState) => ({
      anchorEl: null,
      selectedCourse: course || prevState.selectedCourse,
    }));
  };

  /**
   * TODO: We need to check if the API expects an array of students or individual requests.
   */
  handleSubmit = data => {}

  render() {
    const {
      anchorEl,
      courses,
      selectedCourse,
      students,
    } = this.state;

    return (
      <section style={{ padding: '16px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <h2>{selectedCourse.name}</h2>
          <IconButton
            style={{ marginLeft: '8px' }}
            aria-owns={anchorEl ? 'course-selector' : null}
            aria-haspopup="true"
            onClick={this.openMenu}
          >
            <Icon>arrow_drop_down_circle</Icon>
          </IconButton>
          <Menu
            id="course-selector"
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={() => this.selectedCourse(null)}
          >
            {courses.map(course => (
              <MenuItem key={course.id} value={course.id} onClick={() => this.selectedCourse(course)}>
                {course.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <AttendanceForm students={students} />
      </section>
    );
  }
}

export default Attendance;
