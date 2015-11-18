let CarService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/car';

  this.getAllCars = getAllCars;
  this.addCar = addCar;

  function Car (carObj) {
    this.make = carObj.make;
    this.model = carObj.model;
    this.year = Number(carObj.year);
    this.name = carObj.name;
    this.color = carObj.color;
    this.fuzzydice = true;
  }

  function getAllCars () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addCar (carObj) {
    let c = new Car(carObj);
    return $http.post(url, c, PARSE.CONFIG);
  }


};

CarService.$inject = ['$http', 'PARSE'];

export default CarService;