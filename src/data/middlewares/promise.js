export default () => next => action => {
  const { promise, type, ...rest } = action;

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

      next({ 
        type: SUCCESS, 
        payload: data, 
        ...rest 
      });
    })
    .catch(error => {

      next({ 
        type: FAILURE, 
        error, 
        ...rest 
      });
    });
}