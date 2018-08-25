const mockData = [
  { id: 'mother', name: 'Mother' },
  { id: 'father', name: 'Father' },
];

export const getRelationships = () => (
  new Promise((resolve, reject) => {
    resolve(mockData);
  })
);
