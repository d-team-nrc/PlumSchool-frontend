import { apiUrl } from '../config';
import { removeFalsyFromObjects } from '../utils/collections';

export const registerStudent = data => {
  const filtered = removeFalsyFromObjects(data);
  return fetch(`${apiUrl}/student`, { method: 'POST', body: JSON.stringify(filtered) });
};
