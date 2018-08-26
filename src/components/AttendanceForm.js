import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const tableCell = {
  textAlign: 'center',
};

class AttendanceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    const { students } = nextProps;

    if (students.length > 0) {
      students.forEach(student => this.setState({
        [student.id]: 'P',
      }));
    }
  }

  changeAttendance = (id, code) => {
    this.setState((prevState) => ({
      [id]: prevState[id] === code ? '' : code,
    }));
  }

  cancelChanges = () => {
    if (window.confirm('Are you sure? The attendance list is not saved yet.')) {
      this.props.history.push('/');
    }
  }

  render() {
    const { students, onSubmit } = this.props;

    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={tableCell} padding="none" title="Present">P</TableCell>
              <TableCell style={tableCell} padding="none" title="Late">L</TableCell>
              <TableCell style={tableCell} padding="none" title="Absent">A</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.id}>
              <TableCell>
                {student.name}
              </TableCell>
              <TableCell padding="none" style={tableCell}>
                <Checkbox
                  checked={this.state[student.id] === 'P'}
                  onChange={() => this.changeAttendance(student.id, 'P')}
                />
              </TableCell>
              <TableCell padding="none" style={tableCell}>
                <Checkbox
                  checked={this.state[student.id] === 'L'}
                  onChange={() => this.changeAttendance(student.id, 'L')}
                />
              </TableCell>
              <TableCell padding="none" style={tableCell}>
                <Checkbox
                  checked={this.state[student.id] === 'A'}
                  onChange={() => this.changeAttendance(student.id, 'A')}
                />
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button
          color="primary"
          variant="contained"
          style={{ width: '100%', marginTop: '32px' }}
          onClick={() => onSubmit(this.state)}
        >
          Submit
        </Button>
        <Button
          color="secondary"
          variant="contained"
          style={{ width: '100%', marginTop: '8px' }}
          onClick={this.cancelChanges}
        >
          Cancel
        </Button>
      </div>
    );
  }
}

export default withRouter(AttendanceForm);
