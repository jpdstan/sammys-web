'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.about'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl'
  });
  $routeProvider.when('/blog', {
    templateUrl: 'blog/blog.html',
    controller: 'AboutCtrl'
  });
  $routeProvider.when('/blog/:blog_id', {
    templateUrl: 'blog/blog-post.html',
    controller: 'AboutCtrl'
  });
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
  $routeProvider.otherwise({redirectTo: '/blog'});
}]);
