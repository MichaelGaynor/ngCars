let CarSingleController = function(CarService, $stateParams) {
  
  let vm = this;

  vm.showImageUpload = false;
  vm.showForm        = showForm;
  vm.uploadImage     = uploadImage;

  activate();

  function activate () {
    CarService.getCar($stateParams.id).then( (res) => {
      vm.car = res.data;
    });
  }

  function showForm () {
    vm.showImageUpload = (vm.showImageUpload) ? false : true;
  }

  function uploadImage (data) {
    console.log(data);
  }

};

CarSingleController.$inject = ['CarService', '$stateParams'];

export default CarSingleController;