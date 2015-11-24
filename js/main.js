// Import our core files
import angular from 'angular';

// Import jQuery and Foundation
import $ from 'jquery';
import 'foundation';

// Start Foundation
$(document).foundation();

// Import our sub modules
import './app-core/index';
import './app-layout/index';
import './app-cars/index';


angular
  .module('app', ['app.core', 'app.layout', 'app.cars'])
;