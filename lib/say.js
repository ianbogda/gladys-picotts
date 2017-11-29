const config = require('../config.js');
const pico = require('./picotss');
var fs = require('fs-extra');
var Speaker = require('speaker');
var lame = require('lame');
const shared = require('./shared.js');

var lastSentence = '';

module.exports = function(params){

    //first, we create the file
    // or take it from cahce
    return pico(params.language, params.sentence)
        .then(function(path){
            shared.queue.push(function(cb){
                say(path, cb);
                // remember the last sentence
                lastSentence = path;
            });

            shared.queue.start(function(err) {});
        })
        // repeat the las sentence
        .then(() => {
                repeat(path, cb);
            };
        });
};

function say(mp3, cb){
    fs.createReadStream(mp3)
    .pipe(new lame.Decoder())
    .on('format', function (format) {
        var speaker = new Speaker(format);
        speaker.on('close', function(){
            pause(cb);
        });
        this.pipe(speaker);
    });
}

function pause(cb){
    setTimeout(cb, 500);
}

function repeat(mp3, cb) {
    say(mp3, cb);
}
