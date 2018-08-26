import { apiUrl } from '../config';

export const getSchools = () => (
  fetch(`${apiUrl}/schools`).then(res => res.json())
);
