import template from './checkOut.html';
module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller:cartController
};
cartController.$inject=["$window","toastr"];
function cartController($window,toastr){
  let vm=this;
  vm.name='cart';
  vm.products=$window.localStorage.cartItems && JSON.parse($window.localStorage.cartItems) || [];
  vm.deleteItem=deleteItem;
  function deleteItem(deleteId){
    vm.products=_.remove(vm.products,function(number){
      return number.id!==deleteId;
    });
    toastr.success('Item successfully removed from cart!');
    $window.localStorage.cartItems=JSON.stringify(vm.products);
  }
}
