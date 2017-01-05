module.exports="home";
angular.module('home',[])
  .component('home', require('./home/home.component'))
  .config(require('./componentRoutes'));
