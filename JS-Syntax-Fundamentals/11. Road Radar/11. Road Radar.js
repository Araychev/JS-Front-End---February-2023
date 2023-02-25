function solve(driverSpeed, area) {
  let speedLimit = 0;
  let difference = 0;
  let status = "";

  switch (area) {
    case "motorway":
      speedLimit = 130;
      if (driverSpeed <= speedLimit) {
        console.log(`Driving ${driverSpeed} km/h in a ${speedLimit} zone`);
      } else {
        difference = driverSpeed - speedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "interstate":
      speedLimit = 90;
      if (driverSpeed <= speedLimit) {
        console.log(`Driving ${driverSpeed} km/h in a ${speedLimit} zone`);
      } else {
        difference = driverSpeed - speedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "residential":
      speedLimit = 20;
      if (driverSpeed <= speedLimit) {
        console.log(`Driving ${driverSpeed} km/h in a ${speedLimit} zone`);
      } else {
        difference = driverSpeed - speedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "city":
      speedLimit = 50;
      if (driverSpeed <= speedLimit) {
        console.log(`Driving ${driverSpeed} km/h in a ${speedLimit} zone`);
      } else {
        difference = driverSpeed - speedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
  }
}

solve(200, "motorway");
