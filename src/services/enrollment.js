import { apiUrl } from '../config';

export const getEnrollmentReasons = () => (
  fetch(`${apiUrl}/enrollment_reasons`).then(res => res.json())
);
