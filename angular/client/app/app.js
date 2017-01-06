import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lodash from 'lodash';
import jQuery from 'jquery';
import angularUiBootstrap from 'angular-ui-bootstrap';
import ngMaterial from 'angular-material';
import ngArea from 'angular-aria';
import ngAnimate from 'angular-animate';


angular.module('app', [
  uiRouter,
  angularUiBootstrap,
  ngMaterial,
  ngArea,
  ngAnimate,

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
