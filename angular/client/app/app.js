import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lodash from 'lodash';
import angularUiBootstrap from 'angular-ui-bootstrap';
import 'angular-material';
import 'angular-aria';
import 'angular-animate';
import 'angular-toastr';


angular.module('app', [
  uiRouter,
  angularUiBootstrap,
  'ngMaterial',
  'ngAria',
  'ngAnimate',
  'toastr',
  require("./storage/storage"),
  require('./common/common'),
  require('./components/components')
])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', require("./app.component"));
