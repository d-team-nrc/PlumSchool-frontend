const mockData = [
  { id: 'anna', name: 'Anna' },
  { id: 'ania', name: 'Ania' },
  { id: 'henrick', name: 'Henrick' },
];

export const getStudents = () => (
  new Promise((resolve, reject) => {
    resolve(mockData);
  })
);
