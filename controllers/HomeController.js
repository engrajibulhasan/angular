app.controller("HomeController", function ($scope, $timeout) {
  $scope.counterr = 0;
  $scope.gender = "Male";
  $scope.message = "Welcome to home";

  $scope.increment = function () {
    $scope.counterr++;
    console.log("scope", $scope.counterr);

    // Check if counterr reaches 100 and clear the interval
    if ($scope.counterr === 100) {
      clearInterval(id);
      console.log("Interval cleared at counterr = 100");
    }
  };

  $scope.decrement = function () {
    $scope.counterr--;
    console.log("scope", $scope);
  };

  var id = setInterval(() => {
    $timeout(function () {
      $scope.increment();
    });
  }, 1000);
});
