
module.exports = {
  // Default true, used for development
  soundCapable: typeof(process.env.GLADYS_SOUND_CAPABLE) != 'undefined' ? (process.env.GLADYS_SOUND_CAPABLE === 'true') : true,

  language: process.env.RECOGNITION_LANGUAGE ||'fr-FR',
  cacheDirectory: './cache/voicecache/'
};
