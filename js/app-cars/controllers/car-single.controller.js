let CarSingleController = function(CarService, $stateParams) {
  
  let vm = this;

  activate();

  function activate () {
    CarService.getCar($stateParams.id).then( (res) => {
      vm.car = res.data;
    });
  }

};

CarSingleController.$inject = ['CarService', '$stateParams'];

export default CarSingleController;