# fis-optimizer-imagemin

A optimizer for fis to compress JPG,JPEG,PNG,GIF and SVG by using imagemin.
## use
```node
npm install --save fis-optimizer-imagemin
```

## settings

```javascript
//file : path/to/project/fis-conf.js
fis.match('/img/(*.{jpg,png,gif})', {
    optimizer: fis.plugin('imagemin', {
        release: '../output/img'
    })
});
```
