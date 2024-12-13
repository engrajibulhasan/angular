const app = angular.module("counterApp", ["ngRoute"]);

// Config
app.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    // Configure routes
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeController",
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutController",
      })
      .otherwise({
        redirectTo: "/",
      });

    // Enable hashbang mode (#!) for routes
    // Enable HTML5 mode for clean URLs
    $locationProvider.html5Mode({
      enabled: true, // Enable HTML5 mode
    });
  },
]);

// Controllers ===============================

// Home
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

// About
app.controller("AboutController", function ($scope) {
  $scope.message = "Welcome to About Us";
});
