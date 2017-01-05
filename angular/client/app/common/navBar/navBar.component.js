import template from './navBar.html';
module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller:navBarController
};
navBarController.$inject=[];
function navBarController(){
  let vm=this;
  vm.name='navBar';
}
