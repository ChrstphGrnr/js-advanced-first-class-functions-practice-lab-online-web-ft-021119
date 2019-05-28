// Code your solution in this file!

function logDriverNames(drivers) {
  for (const drvr of drivers) {
    console.log(drvr.name);
  }
}

function logDriversByHometown(drivers, hometown) {
  for (const drvr of drivers) {
    if (drvr.hometown === hometown) {
      console.log(drvr.name) }
  }
}

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice();
  newDrivers.sort(function (drvrOne, drvrTwo){
    return drvrOne.revenue - drvrTwo.revenue;
  });
  return newDrivers;
}

function driversByName(drivers){
  const newDrivers = drivers.slice();
  newDrivers.sort(function(drvrOne, drvrTwo){
    return drvrOne.name.localeCompare(drvrTwo.name);
  })
  return newDrivers;
}

function totalRevenue(drivers) {
  return drivers.reduce(function(acc, currentValue){
    return acc + currentValue.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  let totalR = totalRevenue(drivers)
  return totalR / drivers.length
}
