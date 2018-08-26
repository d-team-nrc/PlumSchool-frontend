import { apiUrl } from '../config';

export const getRelationships = () => (
  fetch(`${apiUrl}/caregiver_relationships`).then(res => res.json())
);
