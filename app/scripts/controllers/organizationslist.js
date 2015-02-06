'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationslistCtrl
 * @description
 * # OrganizationslistCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationslistCtrl',['$scope', '$stateParams', 'OrganizationsService', function ($scope, $stateParams,OrganizationsService ) {

    $scope.orgList = OrganizationsService.orgLists();
  }]);
