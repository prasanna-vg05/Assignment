const EventEmitter = require('events');

const delivery = new EventEmitter();

delivery.on('packageShipped', (packageId) => {
  console.log(`Package ${packageId} has been shipped!`);
});

delivery.on('packageDelivered', (packageId) => {
  console.log(`Package ${packageId} has been delivered!`);
});

function shipPackage(id) {
  console.log(`Preparing package ${id}...`);
  delivery.emit('packageShipped', id);

  setTimeout(() => {
    delivery.emit('packageDelivered', id);
  }, 2000); 
}

module.exports = {shipPackage,delivery}