angular
  .module('file-uploader')
  .controller('demo', ['$scope', function ($scope){
    $scope.data = '';
    //after a new image has been uploaded, you can view $scope.data in the console to see output
  }]);
