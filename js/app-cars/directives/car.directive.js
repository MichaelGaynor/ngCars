let carItem = function() {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '=pizza'
    },
    template: `
      <div class="panel">
        <h5>{{ car.name }}</h5>
        <p>{{ car.year }} {{ car.make }} {{ car.model }}</p>
      </div>
    `,
  };

};

carItem.$inject = [];

export default carItem;