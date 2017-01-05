import template from './footer.html';
module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller:footerController
};
footerController.$inject=[];
function footerController(){
  let vm=this;
  vm.name='footer';
}
