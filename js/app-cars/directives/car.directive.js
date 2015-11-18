let carItem = function($state, CarService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '=pizza'
    },
    template: `
      <div class="panel" ng-click="vm.clicked(car)">
        <h5>{{ car.name }}</h5>
        <p ng-show="car.fuzzydice">Has Fuzzy Dice</p>
        <p>{{ car.year }} {{ car.make }} {{ car.model }}</p>
      </div>
    `,
    controller: 'CarsController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        CarService.toggleFuzzy(scope.car);
        // CarService.destroy(scope.car.name);
        // $state.go('root.singleCar', { id: scope.car.objectId });
      });
    }
  };

};

carItem.$inject = ['$state', 'CarService'];

export default carItem;