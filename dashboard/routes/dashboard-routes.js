const express = require('express');
<<<<<<< HEAD
const { validateGuild } = require('../middleware');
const guilds = require('../../data/guilds');
=======
const guilds = require('../../data/guilds');
const { validateGuild } = require('../modules/middleware');
>>>>>>> 27d66cce7102f93d5181ee8bf4521f4a7431ba34

const router = express.Router();

router.get('/dashboard', (req, res) => res.render('dashboard/index'));

<<<<<<< HEAD
router.get('/servers/:id', validateGuild, async (req, res) => {
  const id = req.params.id;
  const guild = bot.guilds.cache.get(id);

  res.render('dashboard/show', {
    guild,
    savedGuild: await guilds.get(id),
    module: req.query.module,
    textChannels: guild.channels.cache
      .array()
      .filter(c => c.type === 'text')
      .sort((a, b) => a.name > b.name ? 1 : -1)
  });
});

router.put('/servers/:id/:module', validateGuild, async (req, res) => {
  const { id, module } = req.params;

  const savedGuild = await guilds.get(id);
  savedGuild[module] = req.body;
  await savedGuild.save();
  
  res.redirect(`/servers/${id}?module=${module}`);
=======
router.get('/servers/:id', validateGuild,
  async (req, res) => res.render('dashboard/show', {
    savedGuild: await guilds.get(req.params.id)
  }));

router.put('/servers/:id/:module', validateGuild, async (req, res) => {
  try {
    const { id, module } = req.params;
    
    const savedGuild = await guilds.get(id);
    savedGuild[module] = req.body;
    await savedGuild.save();

    res.redirect(`/servers/${id}`);
  } catch {
    res.render('errors/400');
  }
>>>>>>> 27d66cce7102f93d5181ee8bf4521f4a7431ba34
});

module.exports = router;