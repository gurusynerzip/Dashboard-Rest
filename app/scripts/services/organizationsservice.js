'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.OrganizationsService
 * @description
 * # OrganizationsService
 * Service in the dashboardApp.
 */
angular.module('dashboardApp')
  .service('OrganizationsService',[ function OrganizationsService() {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    //$resources.orgLists();
    var service ={};
    var orgsList = [
      {
        'id': 1,
        'name': 'Synerzip',
        'owner':{ 'name': 'Vinayak', 'email': 'vinayak@synerzip.com'},
        'projects':[
          { 'id':1, 'name':'FuelQuest' },
          { 'id':2, 'name':'PDX' },
          { 'id':3, 'name':'Google' },
          { 'id':4, 'name':'QSI' }
        ],
        'TotalEmp': 250,
        'BillableEmp':200,
        'BenchEmp': 50
      },

      {
        'id':2,
        'name': 'Starks',
        'owner': { 'name':'Vrinda', 'email':'vrinda@synerzip.com' },
        'projects':[
          { 'id':1, 'name': 'FuelQuest' },
          { 'id':2, 'name':'Google' }
        ],
        'TotalEmp':100,
        'BillableEmp': 80,
        'BenchEmp':20
      },

      {
        'id':3,
        'name': 'Tryrell',
        'owner':{ 'name': 'Ashutosh Kumar', 'email': 'ashutosh@synerzip.com' },
        'projects':[
          { 'id': 1, 'name': 'For Us All' },
          { 'id': 2, 'name': 'HRMS' }
        ],
        'TotalEmp': 50,
        'BillableEmp': 40,
        'BenchEmp': 10
      },

      {
        'id':4,
        'name':'Baratheon',
        'owner':{ 'name':'Mukund', 'email':'mukund@synerzip.com' },
        'projects':[
          { 'id':1, 'name': 'Google' },
          { 'id':2, 'name': 'PDX' }
        ],
        'TotalEmp': 70,
        'BillableEmp': 50,
        'BenchEmp': 20
      }
    ];

    //to get all organizations list
    service.orgLists = function(){
     return orgsList;
    };

    //To get Particular Org (for view and edit)
    service.getOrg = function(orgid){
      var id = orgid;
      var org = null;
      var totalCount = orgsList.length;
      var i;
      for(i=0;i<totalCount;i++){
          if(orgsList[i].id == id){
            org = orgsList[i];
          }
      }
      return org;
    };

   /* service.getProject = function(){
      return orgsList;
    };*/


  return service;

  }]);
