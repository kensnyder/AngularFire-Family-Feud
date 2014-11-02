var app = angular.module("feud", ["firebase", "ngRoute"]);

var resolver = {
	questions: function() { return questions; }
};

app.config(['$routeProvider', function appConfig($routeProvider) {
	$routeProvider
		.when('/game', {
			controller: 'GameBoardCtrl',
			templateUrl: 'app/GameBoard/GameBoard.html',
			resolve: resolver
		})
		.when('/host', {
			controller: 'HostQuestionsCtrl',
			templateUrl: 'app/HostQuestions/HostQuestions.html',
			resolve: resolver
		})
		.when('/wizard', {
			controller: 'WizardBoardCtrl',
			templateUrl: 'app/GameBoard/GameBoard.html',
			resolve: resolver
		})		
		.otherwise({
			redirectTo: '/game'
		})
	;
}]);

var questions = [
	{
		text: "50 456789 123456789 123456789 123456789 1234567890",
		answers: [
			{
				text: "University of Utah",
				points: 42
			},
			{
				text: "BYU",
				points: 20
			},
			{
				text: "Utah State University",
				points: 10
			},			
			{
				text: "20 456789 1234567890",
				points: 4
			},			
			{
				text: "25 456789 123456789 12345",
				points: 2
			},			
			{
				text: "30 456789 123456789 1234567890",
				points: 2
			},			
			{
				text: "35 456789 123456789 123456789 12345",
				points: 2
			},
			{
				text: "40 456789 123456789 123456789 1234567890",
				points: 8
			}					
		]
	},
	{
		text: "40 456789 123456789 123456789 1234567890",
		answers: [
			{
				text: "Toiletries",
				points: 38
			},
			{
				text: "Clothes",
				points: 29				
			},
			{
				text: "Documents",
				points: 8				
			},
			{
				text: "Food",
				points: 7				
			},
			{
				text: "Something",
				points: 5				
			},			
			{
				text: "Something",
				points: 2
			}	
		]
	}
];



//app.controller("QuestionsCtrl", function ($scope, $firebase) {
//	var ref = new Firebase("https://brilliant-torch-8319.firebaseio.com/questions");
//	var sync = $firebase(ref);
//	// create a synchronized array for use in our HTML code
//	$scope.questions = sync.$asArray();
//});
//app.controller("BoardCtrl", function ($scope, $firebase) {
//	var ref = new Firebase("https://brilliant-torch-8319.firebaseio.com/questions");
//	var sync = $firebase(ref);
//	// create a synchronized array for use in our HTML code
//	var questions = sync.$asArray();
//	$scope.position = 0;
//	var setQuestion = function () {
//		$scope.question = questions[$scope.position];
//	};
//	$scope.prev = function() {
//		if ($scope.position === 0) {
//			return;
//		}
//		$scope.position--;
//		setQuestion();
//	};
//	$scope.next = function() {
//		if ($scope.position === questions.length-1) {
//			return;
//		}
//		$scope.position++;
//		setQuestion();
//	};
//	questions.$loaded().then(function() {
//		setQuestion();
//	});
//});
//app.controller("HostCtrl", function ($scope, $firebase) {
//	var ref = new Firebase("https://brilliant-torch-8319.firebaseio.com/questions");
//	var sync = $firebase(ref);
//	// create a synchronized array for use in our HTML code
//	var questions = sync.$asArray();
//	$scope.position = 0;
//	var setQuestion = function () {
//		$scope.question = questions[$scope.position];
//	};
//	$scope.prev = function() {
//		if ($scope.position === 0) {
//			return;
//		}
//		$scope.position--;
//		setQuestion();
//	};
//	$scope.next = function() {
//		if ($scope.position === questions.length-1) {
//			return;
//		}
//		$scope.position++;
//		setQuestion();
//	};
//	questions.$loaded().then(function() {
//		setQuestion();
//	});
//	// ---
//	$scope.flip = function(position) {
//		$scope.question['a' + position + '_flipped'] = !$scope.question['a' + position + '_flipped'];
//		questions.$save($scope.question);
//	};
//});