import template from './app.html';

module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller:appController
};

appController.$inject=["$window"];

function appController($window){
  let vm=this;
  vm.name='App';
  $window.localStorage.cartItems="";
}
