module.exports=componentService;
componentService.$inject=['PRODUCTS','$http'];
function componentService(PRODUCTS,$http) {
  let vm=this;
  vm.getProducts=getProducts;
  function getProducts(){
    return PRODUCTS;
    // return $http.get();
  }
}
