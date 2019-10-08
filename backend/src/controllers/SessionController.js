// index, show, store, update, destroy

const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    // const user = await User.create({ email });
    console.log('asdasdas');
    let user = await User.findOne({ email });

    if (!user) user = await User.create({ email });

    return res.json(user);
  },

  index() {},
  show() {},

  update() {},
  destroy() {}
};
