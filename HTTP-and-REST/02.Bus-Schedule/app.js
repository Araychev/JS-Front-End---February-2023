function solve() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
  const depButton = document.getElementById("depart");
  const arriveButton = document.getElementById("arrive");
  const infoField = document.querySelector(".info");
  let stopName = "depot";

  function depart() {
    fetch(`${BASE_URL}${stopName}`)
      .then((res) => res.json())
      .then((data) => {
        const { name, next } = data;
        console.log(`${name} ->${next}`);
        infoField.textContent = `Next stop ${name}`;
        depButton.setAttribute("disabled", true);
        arriveButton.removeAttribute("disabled");
      })
      .catch((error) => {
        infoField.textContent = "Error";
      });
  }

  function arrive() {
    fetch(`${BASE_URL}${stopName}`)
      .then((res) => res.json())
      .then((data) => {
        const { name, next } = data;
        infoField.textContent = `Arriving at ${name}`;
        arriveButton.setAttribute("disabled", true);
        depButton.removeAttribute("disabled");
        stopName = next;
      })
      .catch((error) => {
        infoField.textContent = "Error";
      });
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
