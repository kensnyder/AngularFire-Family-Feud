app.controller("WizardBoardCtrl", function WizardBoardCtrl($scope, $firebase, questions) {
	$scope.boardType = 'board-type-wizard';
	$scope.questions = questions;
	var ref = new Firebase("https://brilliant-torch-8319.firebaseio.com/progress");
	var sync = $firebase(ref);
	$scope.progress = sync.$asObject();
	
	function setupBoard() {
		$scope.progress.flipped = '--------';
		$scope.progress.scoreTop = 0;
		$scope.progress.scoreLeft = 0;
		$scope.progress.scoreRight = 0;
		$scope.progress.questionIndex = $scope.progress.questionIndex || 0;
		$scope.progress.redxLeft0 = false;
		$scope.progress.redxLeft1 = false;
		$scope.progress.redxLeft2 = false;
		$scope.progress.redxRight0 = false;
		$scope.progress.redxRight1 = false;
		$scope.progress.redxRight2 = false;
		$scope.progress.questionVisible = false;
		$scope.progress.teamLeft = $scope.progress.teamLeft || 'Team A';
		$scope.progress.teamRight = $scope.progress.teamRight || 'Team B';
		$scope.question = questions[$scope.progress.questionIndex];
		$scope.progress.$save();
	}
	setupBoard();
	
	$scope.flip = function flip(position) {
		var f = $scope.progress.flipped;
		var newState = f.charAt(position) == 'o' ? '-' : 'o';
		$scope.progress.flipped = f.substring(0,position) + newState + f.substring(position+1);
		if (!$scope.progress.stolen) {
			var multiplier = (newState == 'o' ? 1 : -1);
			$scope.progress.scoreTop = $scope.progress.scoreTop + multiplier * $scope.question.answers[position].points;
		}
		$scope.progress.$save();
	};
	$scope.toggleQuestionVisibility = function toggleQuestionVisibility() {
		$scope.progress.questionVisible = !$scope.progress.questionVisible;
	};
	$scope.pushScore = function pushScore(direction) {
		$scope.progress['score' + direction] += $scope.progress.scoreTop;
		$scope.progress.scoreTop = 0;
		$scope.progress.$save();
	};
	$scope.toggleX = function toggleX(position) {
		$scope.progress['redx' + position] = !$scope.progress['redx' + position];
		$scope.progress.$save();
	};
	$scope.nav = function nav(direction) {
		$scope.progress.questionIndex += direction;
		if ($scope.progress.questionIndex < 0) {
			$scope.progress.questionIndex = 0;
		}
		else if ($scope.progress.questionIndex > $scope.questions.length-1) {
			$scope.progress.questionIndex--;
		}
		else {
			setupBoard();
		}
	};

});