const mockData = [
  { id: 'chemistry', name: 'Chemistry' },
  { id: 'english', name: 'English' },
  { id: 'maths', name: 'Maths' },
];

export const getCourses = () => (
  new Promise((resolve, reject) => {
    resolve(mockData);
  })
);
