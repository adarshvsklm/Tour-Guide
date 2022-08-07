export const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.send({ auth: false, message: 'Authentication Failed' });
  } else {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: 'Authentication Failed' });
      }else{
        req.userId = decoded._id;
        next();
      }
    });
  }
};
