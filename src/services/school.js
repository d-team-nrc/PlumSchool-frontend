const mockData = [
  { id: 'school1', name: 'School 1' },
  { id: 'school2', name: 'School 2' },
];

export const getSchools = () => (
  new Promise((resolve, reject) => {
    resolve(mockData);
  })
);
