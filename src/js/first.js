const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

const arrayPromise = [
  delay(2000).then(logger),
  delay(1000).then(logger),
  delay(1500).then(logger),
];

Promise.all(arrayPromise).then(() => console.log('-------------------'));
