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
