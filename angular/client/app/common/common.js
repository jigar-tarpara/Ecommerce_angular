module.exports='common';

angular.module('common',[])
  .component('navBar',require('./navBar/navBar.component'))
  .component('fooTer',require('./footer/footer.component'));
