function bitcoinMining(arr) {
  const bitcoinPriceInLv = 11949.16;
  const goldPricePerGrInLv = 67.51;
  let walletInLv = 0;
  let bitcoinWallet = 0;
  let dayCounter = 0;
  let firstDayBuyBitcoin = 0;
  for (const item of arr) {
    let gramsOfGold = item;
    dayCounter++;
    if (dayCounter % 3 === 0) {
      gramsOfGold *= 0.7;
    }
    walletInLv += gramsOfGold * goldPricePerGrInLv;

    if (walletInLv >= bitcoinPriceInLv) {
      while (walletInLv >= bitcoinPriceInLv) {
        bitcoinWallet++;
        walletInLv -= bitcoinPriceInLv;
        if (bitcoinWallet === 1) {
          firstDayBuyBitcoin = dayCounter;
        }
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoinWallet}`);
  if (bitcoinWallet !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDayBuyBitcoin}`);
  }

  console.log(`Left money: ${walletInLv.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
