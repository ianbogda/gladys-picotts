
module.exports = function(sails) {
  return {

    // Method called by gladys to install/init module
    install: require('./lib/install.js'),

    // Method called by gladys to notify
    notify: require('./lib/notify.js'),

    // Those methods can be called in a script
    // gladys.module.picotts.say({text:"MyText", language:"fr-FR"})
    say: require('./lib/say.js'),

    // gladys.module.picotts.say({text:"MyText", language:"fr-FR"})
    repeat: require('./lib/say.js')

  };
};
