const authAdmin = (req, res, next) => {
  const authToken = req.header('Authorization');
  console.log({ authToken });

  if (!authToken) next(new Error('Unauthorized'));

  if (authToken === 'Bearer SECRET') next();
}

module.exports = authAdmin;