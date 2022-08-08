// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, destination) {
  return (
    distanceFromHqInFeet(destination) - distanceFromHqInFeet(pickupLocation)
  );
}

function calculatesFarePrice(pickupLocation, destination) {
  let distance = distanceTravelledInFeet(pickupLocation, destination);
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
