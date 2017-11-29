
module.exports = function(sails) {
  return {

    // Method called by gladys to install/init module
    install: require('./lib/install'),

    // Method called by gladys to notify
    notify: require('./lib/notify'),

    // Those methods can be called in a script
    // gladys.module.picotts.say({text:"MyText", language:"fr-fr"})
    say: require('./lib/say')

    // gladys.module.picotts.say({text:"MyText", language:"fr-fr"})
    repeat: require('./lib/repeat')

    // gladys.module.picotts.say({text:"MyText", language:"fr-fr"})
    shutup: require('./lib/shutup')

  };
};
