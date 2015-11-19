let CarService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/car';

  this.getAllCars   = getAllCars;
  this.addCar       = addCar;
  this.destroy      = destroy;
  this.toggleFuzzy  = toggleFuzzy;
  this.getCar       = getCar;
  this.addImage     = addImage;

  function Car (carObj) {
    this.make = carObj.make;
    this.model = carObj.model;
    this.year = Number(carObj.year);
    this.name = carObj.name;
    this.color = carObj.color;
    this.fuzzydice = true;
  }

  function toggleFuzzy (carObj) {
    carObj.fuzzydice = carObj.fuzzydice ? false : true;
    return $http.put(url + '/' + carObj.objectId, carObj, PARSE.CONFIG);
  }

  function getAllCars () {
    return $http.get(url, PARSE.CONFIG);
  }

  function getCar (id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);
  }

  function addCar (carObj) {
    let c = new Car(carObj);
    return $http.post(url, c, PARSE.CONFIG);
  }

  function addImage (imageUrl, car) {
    car.image = imageUrl;
    return $http.put(url + '/' + car.objectId, car, PARSE.CONFIG);
  }

  function destroy (name) {
    return console.log(name + ' has been destroyed');
  }

};

CarService.$inject = ['$http', 'PARSE'];

export default CarService;