(function() {
  var MainController = function($scope, $interval) {
    var questions = 
    [
      "How many people have you killed?",
      "If you can only take one person in this room to a cast away, who will you pick?",
      "What is a near-death experience of yours?",
      "What is your favourite song and why?"
    ];
    var stop;
    
    $scope.question = "How to spell Jeff's surname?";
    
    $scope.generateQuestion = function(){
      var numberOfRepeates = 4;
      //$scope.question = "How many people have you killed?";
      
      $interval(function () 
      {
        var randomIndex = Math.floor(Math.random() * questions.length);
        $scope.question = questions[randomIndex];
        $scope.questionStyle = {color: "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16)};
      }, 200, numberOfRepeates);
    };
  };
  
  var app = angular.module("J-Quiz", []);
  app.controller("MainController", MainController);
})();