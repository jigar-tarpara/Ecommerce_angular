import template from './home.html';
module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller:homeController
};
homeController.$inject=[];
function homeController(){
  let vm=this;
  vm.name='home';
}
