'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationseditCtrl
 * @description
 * # OrganizationseditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationseditCtrl',['$scope', '$stateParams', 'OrganizationsService', function ($scope, $stateParams, OrganizationsService){

   $scope.org = OrganizationsService.getOrg($stateParams.orgId);

  }]);
