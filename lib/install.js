const config = require('../config.js');
const fse = require('fs-extra');

module.exports = function(){

  // Create cache folder
  fse.mkdirsSync(config.cacheDirectory);

  // Install notification module
  return gladys.notification.install({
    service: 'picotts', 
    name: 'Speak (PicoTTS)'
  });

};
