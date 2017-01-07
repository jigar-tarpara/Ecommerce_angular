import template from './home.html';
module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller:homeController
};
homeController.$inject=["PRODUCTS","$window",'$mdToast','toastr'];
function homeController(PRODUCTS,$window,$mdToast,toastr){
  let vm=this;
  vm.name='home';
  vm.products=PRODUCTS;
  vm.tshirts=_.filter(PRODUCTS,{subCategory:'T-shirt'});
  vm.blazers=_.filter(PRODUCTS,{subCategory:'Blazers'});
  vm.sunGlasses=_.filter(PRODUCTS,{subCategory:'SunGlass'});
  vm.kids=_.filter(PRODUCTS,{category:'Kids'});
  vm.womens=_.filter(PRODUCTS,{category:'Women'});
  vm.cartStorage=cartStorage;
  function cartStorage(item) {
      let cartItems=$window.localStorage.cartItems && JSON.parse($window.localStorage.cartItems)||[];
      if(!_.find(cartItems,{id:item.id}))
        cartItems.push(item);
      $window.localStorage.cartItems=JSON.stringify(cartItems);
  }
  vm.pop=pop;
  function pop(){
    // $mdToast.show($mdToast.show($mdToast.simple().content('Invoice created!').position('right bottom').hideDelay(3000)));
    toastr.success('Hello world!', 'Toastr fun!');
  }
}
