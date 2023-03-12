function storeProvision(currentStockArr, orderedForDeliveryArr) {
  let storeObj = {};
  for (let i = 0; i < currentStockArr.length; i++) {
    if (i % 2 === 0) {
      storeObj[currentStockArr[i]] = Number(currentStockArr[i + 1]);
    }
  }

  for (let i = 0; i < orderedForDeliveryArr.length; i++) {
    if (i % 2 === 0) {
      if (!storeObj.hasOwnProperty(orderedForDeliveryArr[i])) {
        storeObj[orderedForDeliveryArr[i]] = Number(
          orderedForDeliveryArr[i + 1]
        );
      } else {
        storeObj[orderedForDeliveryArr[i]] += Number(
          orderedForDeliveryArr[i + 1]
        );
      }
    }
  }

  for (const key in storeObj) {
    console.log(`${key} -> ${storeObj[key]}`);
  }
}

storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
