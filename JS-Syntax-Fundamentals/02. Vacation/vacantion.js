function totalPrice(count, type, day) {
  let price = 0;
  let calcPrice = 0;

  switch (day) {
    case "Friday":
      if (type === "Students") {
        price = 8.45;
        calcPrice = count * price;
        if (count >= 30) {
          calcPrice *= 0.85;
        }
      } else if (type === "Business") {
        price = 10.9;

        if (count >= 100) {
          count -= 10;
        }
        calcPrice = count * price;
      } else if (type === "Regular") {
        price = 15;
        calcPrice = count * price;
        if (count >= 10 && count <= 20) {
          calcPrice *= 0.95;
        }
      }
      break;
    case "Saturday":
      if (type === "Students") {
        price = 9.8;
        calcPrice = count * price;
        if (count >= 30) {
          calcPrice *= 0.85;
        }
      } else if (type === "Business") {
        price = 15.6;

        if (count >= 100) {
          count -= 10;
        }
        calcPrice = count * price;
      } else if (type === "Regular") {
        price = 20;
        calcPrice = count * price;
        if (count >= 10 && count <= 20) {
          calcPrice *= 0.95;
        }
      }
      break;
    case "Sunday":
      if (type === "Students") {
        if (type === "Students") {
          price = 10.46;
          calcPrice = count * price;
          if (count >= 30) {
            calcPrice *= 0.85;
          }
        } else if (type === "Business") {
          price = 16;

          if (count >= 100) {
            count -= 10;
          }
          calcPrice = count * price;
        } else if (type === "Regular") {
          price = 22.5;
          calcPrice = count * price;
          if (count >= 10 && count <= 20) {
            calcPrice *= 0.95;
          }
        }
        break;
      }
  }

  console.log(`Total price: ${calcPrice.toFixed(2)}`);
}

totalPrice(30, "Students", "Sunday");
