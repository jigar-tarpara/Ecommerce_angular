module.exports="component";
angular.module('component',[])
  .component('home', require('./home/home.component'))
  .component('cart', require('./cart/cart.component'))
  .service("componentService",require("./services/componentService"))
  .config(require('./componentRoutes'));
