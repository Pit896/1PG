const sessions = require('./sessions');

module.exports.updateGuilds = async (req, res, next) => {
  try {
    const key = res.cookies.get('key');
    if (key) {
      const { guilds } = await sessions.get(key);
      res.locals.guilds = guilds;
    }
  } finally {
    next();
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const key = res.cookies.get('key');
    if (key) {
      const { authUser } = await sessions.get(key);
      res.locals.user = authUser;
    }
  } finally {
    next();
  }
};

module.exports.validateGuild = async (req, res, next) => {
  const exists = res.locals.guilds.some(g => g.id === req.params.id);
  (exists)
    ? next()
    : res.render('errors/404');
};

module.exports.validateUser = async (req, res, next) => {
  (res.locals.user)
    ? next()
    : res.render('errors/401');
};