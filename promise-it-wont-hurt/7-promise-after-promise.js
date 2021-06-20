const onFulfilled = first().then((value) => second(value));

onFulfilled.then(console.log);
