'use strict';
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const deasync = require('deasync');

module.exports = function(content, file, conf) {
	var result, isReturn = false;

    imagemin.buffer(content, {
		use: [imageminMozjpeg({
			quality: 98
		}), imageminPngquant({
			quality: '80-85'
		}), imageminGifsicle({
			optimizationLevel: 3
		}), imageminSvgo()]
	}).then(function(data){
		isReturn = true;
		result = data;
	});

	while(!isReturn){
        deasync.runLoopOnce();
    }

	return result;
}