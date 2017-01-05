import template from './app.html';

module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller:appController
};

appController.$inject=[];

function appController(){
  let vm=this;
  vm.name='App';
}
