app.controller("GameBoardCtrl", function GameBoardCtrl($scope, $firebase, questions) {
	$scope.boardType = 'board-type-game';
	$scope.questions = questions;
	var ref = new Firebase("https://brilliant-torch-8319.firebaseio.com/progress");
	var sync = $firebase(ref);
	$scope.progress = sync.$asObject();
	$scope.flip = function flip(position) {};
	$scope.toggleQuestionVisibility = function toggleQuestionVisibility() {};
	$scope.pushScore = function pushScore(direction) {};
	$scope.toggleX = function toggleX(position) {};
	$scope.nav = function nav(direction) {};
});