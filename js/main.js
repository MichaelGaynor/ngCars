// Import our core files
import angular from 'angular';
import 'angular-ui-router';

// Import config, run & constant, value blocks
import config from './config';

// Import our Controllers
import HomeController from './controllers/home.controller';

// Call our `angular` global object to add our blocks to
angular
  // Define our Module - common practice is to use 'app'
  .module('app', ['ui.router'])
  // Our Configuration Block
  .config(config)
  // Register Our Controllers
  .controller('HomeController', HomeController)
;