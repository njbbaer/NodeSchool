const attachTitle = (name) => `DR. ${name}`;

const getName = Promise.resolve('MANHATTAN');

getName.then(attachTitle).then(console.log);
