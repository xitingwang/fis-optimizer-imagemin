/*
 * @Author: wangchao
 * @Date:   2016-08-23 20:03:03
 * @Last Modified by:   wangchao
 * @Last Modified time: 2016-08-24 00:05:57
 */

'use strict';
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

module.exports = function(content, file, conf) {
	imagemin([file.subpath.substr(1)], conf.to, {
		use: [imageminMozjpeg(), imageminPngquant(), imageminGifsicle(), imageminSvgo()]
	}).then(() => {
		//console.log('Images optimized');
	});
	return null;
}