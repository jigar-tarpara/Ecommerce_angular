module.exports=componentRoutes;
componentRoutes.$inject=['$stateProvider','$urlRouterProvider'];
function componentRoutes($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
}
