const logger = {};

logger.mdwTest1 = (req, res, next) => {
  req.greeting = 'Hello F1';
  const date = new Date();
  console.log('this is a middleware');
  if (date.getDay() !== 1) {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    res.send('closed');
  } else next();
};

logger.mdwTest2 = (req, res, next) => {
  console.log('another middleware', req.greeting);

  next();
};

module.exports = logger;
