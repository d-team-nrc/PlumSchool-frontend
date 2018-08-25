const mockData = [
  { school_id: 'school1', school_name: 'School 1' },
  { school_id: 'school2', school_name: 'School 2' },
];

export const getSchools = () => (
  new Promise((resolve, reject) => {
    resolve(mockData);
  })
);
