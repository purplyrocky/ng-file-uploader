# ng-photo-uploader

demo: https://purplyrocky.github.io/ng-photo-uploader

using bower `bower install ng-photo-uploader`

link to `../bower_components/ng-photo-uploader/js/photo-uploader.js`

add `'photo-uploader'` to your module

add directive to html as an attribute `<input type="file" model="data" photo-uploader>`

right now, this directive changes whatever variable you set in `model`

you can test if it's working by setting `$scope.data = '';` in your controller then view the output in the console by selecting your scope and checking `$scope.data`

after selecting a photo to upload, the console should return something like `"data:image/png;base64,iVBORw0KGgoA..."`
