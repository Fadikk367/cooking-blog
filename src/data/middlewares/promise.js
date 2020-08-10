export default () => next => action => {
  const { promise, type, ...rest } = action;
  console.log({promise, type});
  if (!promise || typeof promise.then !== 'function') {
    return next(action);
  }

  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const REQUEST = `${type}_REQUEST`;

  next({ type: REQUEST, ...rest });

  return promise
    .then(response => response.data)
    .then(data => {
      console.log('promise middleware: ', data);
      next({ 
        type: SUCCESS, 
        payload: data, 
        ...rest 
      });
    })
    .catch(error => {
      console.log('promise middleware failure: ', error);
      next({ 
        type: FAILURE, 
        error, 
        ...rest 
      });
    });
}