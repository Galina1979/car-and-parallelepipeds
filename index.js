class Car {
  constructor(brand, color, fuelTankVolume, fuelConsumption) {
      this.brand = brand;
      this.color = color;
      this.fuelTankVolume = fuelTankVolume;
      this.fuelConsumption = fuelConsumption;
  }

  calculateDistance() {
      const distance = (this.fuelTankVolume * 100) / this.fuelConsumption;
      return distance;
  }
}

class Truck extends Car {
  constructor(brand, color, fuelTankVolume, fuelConsumption, cargoCapacity) {
      super(brand, color, fuelTankVolume, fuelConsumption);
      this.cargoCapacity = cargoCapacity;
  }

  calculateTransportCost(fuelPrice) {
      const cost = (this.fuelConsumption / 100) * fuelPrice;
      return cost / this.cargoCapacity;
  }
}

function createCar() {
  const marka = document.querySelector(".marka").value;
  const color = document.querySelector(".color").value;
  const fuelTankVolume = parseFloat(document.querySelector(".fuelTankVolume").value);
  const fuelConsumption = parseFloat(document.querySelector(".fuelConsumption").value);

  const car = new Car(marka, color, fuelTankVolume, fuelConsumption);

  const carBrand = document.querySelector(".carBrand");
  const carColor = document.querySelector(".carColor");
  const carDistance = document.querySelector(".carDistance");

  carBrand.textContent = car.brand;
  carColor.textContent = car.color;
  carDistance.textContent = car.calculateDistance().toFixed(2);
}

function createTruck() {
  const marka = document.querySelector(".truckMarka").value;
  const color = document.querySelector(".truckColor").value;
  const fuelTankVolume = parseFloat(document.querySelector(".fuelTankVolume").value);
  const fuelConsumption = parseFloat(document.querySelector(".truckConsumption").value);
  const cargoCapacity = parseFloat(document.querySelector(".cargoCapacity").value);
  const fuelPrice = parseFloat(document.querySelector(".fuelPrice").value);

  const truck = new Truck(marka, color, fuelTankVolume, fuelConsumption, cargoCapacity);

  const truckBrand = document.querySelector(".truckBrand");
  const truckColorResult = document.querySelector(".truckColorResult");
  const transportCostResult = document.querySelector(".transportCost");

  truckBrand.textContent = truck.brand;
  truckColorResult.textContent = truck.color;
  transportCostResult.textContent = truck.calculateTransportCost(fuelPrice).toFixed(2);
}
// ----------------------------------------------------





class Parallelepiped {
  constructor(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  calculateVolume() {
    return this.width * this.height * this.depth;
  }

  displayCharacteristics() {
    const volumeSpan = document.querySelector('.truckVolume');
    volumeSpan.textContent = this.calculateVolume();
  }
}

class WeightedParallelepiped extends Parallelepiped {
  constructor(width, height, depth, weight) {
    super(width, height, depth);
    this.weight = weight;
  }

  calculateDensity() {
    const volume = this.calculateVolume();
    if (volume !== 0) {
      return this.weight / volume;
    } else {
      return "Невозможно вычислить плотность: объём равен нулю.";
    }
  }

  displayCharacteristics() {
    super.displayCharacteristics(); // Вызов метода родительского класса
    const weightInput = document.querySelector('.weight');
    const densitySpan = document.querySelector('.truckDensity');
    weightInput.value = this.weight;
    densitySpan.textContent = this.calculateDensity();
  }
}

function volume() {
  const width = parseFloat(document.querySelector('.width').value) || 0;
  const height = parseFloat(document.querySelector('.height').value) || 0;
  const depth = parseFloat(document.querySelector('.depth').value) || 0;

  const parallelepiped = new Parallelepiped(width, height, depth);
  parallelepiped.displayCharacteristics();
}

function density() {
  const width = parseFloat(document.querySelector('.width').value) || 0;
  const height = parseFloat(document.querySelector('.height').value) || 0;
  const depth = parseFloat(document.querySelector('.depth').value) || 0;
  const weight = parseFloat(document.querySelector('.weight').value) || 0;

  const weightedParallelepiped = new WeightedParallelepiped(width, height, depth, weight);
  weightedParallelepiped.displayCharacteristics();
}
