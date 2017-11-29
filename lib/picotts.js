const config = require('../config.js');
const md5 = require('md5');
const fs = require('fs-extra');
const lame = require('lame');
const wav = require('wav');
const exec = require('child_process').exec;


module.exports = function(sentence, lang){
    return new Promise(function(resolve, reject){

        var dest = config.cacheDirectory + md5(lang + sentence) + '.mp3';
        var temp = config.cacheDirectory + md5(lang + sentence) + '.wav';

        // first off all, check if file exists
        fs.exists(dest, function(exists){

            if(exists){

                console.log('PicoTTS : Using cache, file already exists');
                return resolve(dest);

            }else{

                // create the WAV file from sentence
                var cmd = 'pico2wave -l ' + lang + ' -w ' + temp + ' " ' + sentence + ' "';
                exec(cmd, function(error){
                    if(error){
                        console.log('PicoTTS : error while executing command ', cmd);
                        return reject(new Error(`PicoTTS : error while executing command ${cmd}`));
                    }
                });

                var input = fs.createReadStream(temp);
                var output = fs.createWriteStream(dest);

                // start reading the WAV file from input
                var reader = new wav.reader();

                // we have to wait for the "format" event before we can start encoding
                reader.on('format', function(error, format) {
                    if(error){
                        console.error('PicoTTS : WAV format: %j', format);
                        return reject(new Error(`PicoTTS : WAV format: ${format}`));
                    }

                    // encoding the wave file into an MP3 is as simple calling pipe()
                    var encoder = new lame.Encoder(format);
                    reader.pipe(encoder).pipe(dest);

                    // remove temp file
                    fs.remove(temp)
                    .catch(error => {
                        console.error('PicoTTS : error %j', error);
                    });
                });

                // start transferring the data
                input.pipe(reader);

                return resolve(dest);
            }
        });
    });
}
