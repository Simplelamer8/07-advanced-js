function delay(ms){
  return new Promise(
    (resolve, reject) => 
    {
      return setTimeout(
        () => resolve(), 
        ms)
    });
}

delay(5000).then(() => alert("alert after 5 sec..."));


let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);


//выведет сразу 1 так как не дойдет до setTimeout