(function() {
  var app = angular.module("PlunkViewer", ['ngRoute', 'directives']);
 // app.$inject = ['$http', '$scope'];
  app.config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
           $routeProvider.when("/", {templateUrl: "/TabTag.html"})
                         .when("/tag", {templateUrl: "/Tab-dir.html", controller: TabDirController, controllerAs: 'panel'})
                         .when("/dir", {templateUrl: "/note-dir.html", controller: NoteDirController, controllerAs: 'nc'})
                         .otherwise("/");
      })
}());
