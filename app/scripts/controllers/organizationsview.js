'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsviewCtrl
 * @description
 * # OrganizationsviewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsviewCtrl',['$scope', '$stateParams','OrganizationsService', function ($scope, $stateParams, OrganizationsService) {

    $scope.org = OrganizationsService.getOrg($stateParams.orgId);
  }]);
