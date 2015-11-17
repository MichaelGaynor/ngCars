// Import our core files
import angular from 'angular';
import 'angular-ui-router';

// Import config, run & constant, value blocks
import config from './config';

// Import our Controllers
import HomeController from './controllers/home.controller';
import CarsController from './controllers/cars.controller';
import CarsAddController from './controllers/cars-add.controller';

// Import some Constants
import PARSE from './constants/parse.constant';

// Call our `angular` global object to add our blocks to
angular
  // Define our Module - common practice is to use 'app'
  .module('app', ['ui.router'])
  // Our Configuration Block
  .config(config)
  // Register Our Constants
  .constant('PARSE', PARSE)
  // Register Our Controllers
  .controller('HomeController', HomeController)
  .controller('CarsController', CarsController)
  .controller('CarsAddController', CarsAddController)
;