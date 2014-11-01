app.controller("HostQuestionsCtrl", function HostQuestionsCtrl($scope, $firebase, questions) {
	$scope.questions = questions;
	var ref = new Firebase("https://brilliant-torch-8319.firebaseio.com/progress");
	var sync = $firebase(ref);
	$scope.progress = sync.$asObject();
});