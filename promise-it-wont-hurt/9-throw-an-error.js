const parsePromised = (json) => new Promise(
  (fulfill, reject) => {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  },
);

parsePromised(process.argv[2])
  .catch((error) => console.log(error.message));
