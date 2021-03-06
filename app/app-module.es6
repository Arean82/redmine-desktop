(function () {
  'use strict';

  /* @ngdoc object
   * @name redmineDesktop
   * @description
   *
   */
  angular
    .module('redmineDesktop', [
      'ngAria',
      'ngCookies',
      'ngMaterial',
      'ui.router',
      'visor',
      'LocalStorageModule',
      'auth',
      'rmResource',
      'lodash',
      'layout',
      'loggedUser',
      'projects',
      'issues'
    ]);
}());
