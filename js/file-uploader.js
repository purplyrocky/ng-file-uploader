angular
	.module('file-uploader', [])
  .directive('fileUploader', [function() {
		return {
      scope: {
        model: "="
      },
      link: function (scope, element, attributes) {
          element.bind("change", function (changeEvent) {
            var reader = new FileReader(),
							  file = changeEvent.target.files[0];
            reader.onload = function (loadEvent) {
              scope.$apply(function () {
              	scope.model = reader.result;
            });
          }
          reader.readAsDataURL(file);
        });
      }
    }
	}]);
