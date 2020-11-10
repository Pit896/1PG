const bodyParser = require('body-parser');
const cookies = require('cookies');
const express = require('express');
<<<<<<< HEAD
const middleware = require('./middleware');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
=======
const methodOverride = require('method-override');
const middleware = require('./modules/middleware');
>>>>>>> 27d66cce7102f93d5181ee8bf4521f4a7431ba34

const authRoutes = require('./routes/auth-routes');
const dashboardRoutes = require('./routes/dashboard-routes');
const rootRoutes = require('./routes/root-routes');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookies.express('a', 'b', 'c'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ encoded: true }));

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.use('/',
  middleware.updateUser, rootRoutes,
  authRoutes,
  middleware.validateUser, middleware.updateGuilds, dashboardRoutes
);

app.all('*', (req, res) => res.render('errors/404'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is live on port ${port}`));