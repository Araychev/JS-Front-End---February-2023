function towns(arr) {
  let objTowns = {
    town: "",
    latitude: 0,
    longitude: 0,
  };

  for (const item of arr) {
    let line = item.split(" | ");
    objTowns.town = line[0];
    objTowns.latitude = Number(line[1]).toFixed(2);
    objTowns.longitude = Number(line[2]).toFixed(2);

    console.log(objTowns);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
