angular.module('app')
.controller('LabController', [ 
   function () { 
      var vm = this; 
      
      vm.person = {
	      name: 'Cristina Rodriguez',
	      penName: 'CrisRodFe'
      };
      
      vm.show = show;
      
      function show() {
	  	alert(JSON.stringify(vm.person));
	}
   } 
]);