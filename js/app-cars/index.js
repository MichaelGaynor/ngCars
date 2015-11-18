import angular from 'angular';
import '../app-core/index';

import CarsController from './controllers/cars.controller';
import CarsAddController from './controllers/cars-add.controller';

import CarService from './services/car.service';

import carItem from './directives/car.directive';

angular
  .module('app.cars', ['app.core'])
  .controller('CarsController', CarsController)
  .controller('CarsAddController', CarsAddController)
  .service('CarService', CarService)
  .directive('carItem', carItem)
;