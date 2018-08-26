export const removeFalsyFromObjects = (obj) => {
  let newObj = {};

  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== '' && obj[prop] != null) {
      newObj[prop] = obj[prop];
    }
  });

  return newObj;
};
