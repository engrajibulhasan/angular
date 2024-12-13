const app = angular.module("counterApp", []);

app.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    // Configure routes
    $routeProvider
      .when("/", {
        templateUrl: "home.html",
        controller: "HomeController",
      })
      .when("/about", {
        templateUrl: "about.html",
        controller: "AboutController",
      })
      .when("/users", {
        templateUrl: "users.html",
      })
      .otherwise({
        redirectTo: "/",
      });

    // Enable hashbang mode (#!) for routes
    $locationProvider.hashPrefix("!");
  },
]);

app.controller("HomeController", function ($scope, $timeout) {
  $scope.counterr = 0;
  $scope.gender = "Male";
  $scope.message = "Welcome home";

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

app.controller("AboutController", function ($scope) {
  $scope.message = "Welcome About Us";
});
