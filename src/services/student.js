import { apiUrl } from '../config';

export const getStudents = () => (
  fetch(`${apiUrl}/students`).then(res => res.json())
);
