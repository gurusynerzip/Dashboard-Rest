'use strict';

describe('Service: OrganizationsService', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var OrganizationsService;
  beforeEach(inject(function (_OrganizationsService_) {
    OrganizationsService = _OrganizationsService_;
  }));

  it('should do something', function () {
    expect(!!OrganizationsService).toBe(true);
  });

});
