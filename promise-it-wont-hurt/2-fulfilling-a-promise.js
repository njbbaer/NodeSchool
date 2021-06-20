const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    fulfill();
  }, 300);
});

promise.then(console.log('FULFILLED!'));
