const mockData = [
  { id: 'improve_performance', name: 'Improve academic performance' },
  { id: 'need_care', name: 'Need a day care' },
  { id: 'all', name: 'All of the above' },
];

export const getEnrollmentReasons = () => (
  new Promise((resolve, reject) => {
    resolve(mockData);
  })
);
