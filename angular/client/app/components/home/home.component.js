import template from './home.html';
module.exports = {
  controllerAs: 'vm',
  restrict: 'E',
  bindings: {},
  template,
  controller: homeController
};
homeController.$inject = ["componentService", "$window", 'toastr'];
function homeController(componentService, $window, toastr) {
  let vm = this;
  vm.name = 'home';
  vm.products = [];
  vm.tshirts = [];
  vm.blazers = [];
  vm.sunGlasses = [];
  vm.kids = [];
  vm.womens = [];

  vm.initialize = initialize;
  vm.getProducts = getProducts;
  vm.cartStorage = cartStorage;
  function getProducts() {
    "use strict";
    vm.products = componentService.getProducts();
    vm.tshirts = _.filter(vm.products, {subCategory: 'T-shirt'});
    vm.blazers = _.filter(vm.products, {subCategory: 'Blazers'});
    vm.sunGlasses = _.filter(vm.products, {subCategory: 'SunGlass'});
    vm.kids = _.filter(vm.products, {category: 'Kids'});
    vm.womens = _.filter(vm.products, {category: 'Women'});
  }

  function initialize() {
    "use strict";
    vm.getProducts();
  }

  function cartStorage(item) {
    let cartItems = $window.localStorage.cartItems && JSON.parse($window.localStorage.cartItems) || [];
    if (!_.find(cartItems, {id: item.id})) {
      cartItems.push(item);
      toastr.success(item.name, 'successfully added to cart!');
    }
    $window.localStorage.cartItems = JSON.stringify(cartItems);
  }

  vm.initialize();
}
