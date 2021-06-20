const goodPromise = Promise.resolve('RESOLVED');
const badPromise = Promise.reject(new Error('REJECTED'));

goodPromise.then(console.log);
badPromise.catch((error) => console.log(error.message));
