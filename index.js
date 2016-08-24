'use strict';
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

module.exports = function(content, file, conf) {
	imagemin([file.subpath.substr(1)], conf.to, {
		use: [imageminMozjpeg({
			quality: 98
		}), imageminPngquant({
			quality: '80-85'
		}), imageminGifsicle({
			optimizationLevel: 3
		}), imageminSvgo()]
	}).then(() => {
		//console.log('Images optimized');
	});
	return null;
}