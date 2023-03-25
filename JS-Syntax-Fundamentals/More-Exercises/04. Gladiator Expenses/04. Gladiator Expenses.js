function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmetRepairPrice =
    Number((lostFightsCount / 2).toString().split(".")[0]) * helmetPrice;

  let swardRepairPrice =
    Number((lostFightsCount / 3).toString().split(".")[0]) * swordPrice;

  let shieldRepairPrice =
    Number((lostFightsCount / 6).toString().split(".")[0]) * shieldPrice;

  let armorRepairPrice =
    Number((lostFightsCount / 12).toString().split(".")[0]) * armorPrice;

  let totalPrice = (
    helmetRepairPrice +
    swardRepairPrice +
    shieldRepairPrice +
    armorRepairPrice
  ).toFixed(2);

  console.log(`Gladiator expenses: ${totalPrice} aureus`);
}

gladiatorExpenses(23, 12.5, 21.5, 40, 200);
