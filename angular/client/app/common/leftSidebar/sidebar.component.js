import template from './sidebar.html';
module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller:sidebarController
};
sidebarController.$inject=[];
function sidebarController(){
  let vm=this;
  vm.name='sidebar';
}
