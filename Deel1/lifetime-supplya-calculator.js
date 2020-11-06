let calculateSupply = function (age, dayAmount) {
    const favSnack = "Koffee";
    const maxAge = 99;
    const numSuppy = (dayAmount * 365) * (maxAge - age);
    console.log("You will need " + numSuppy + " " + favSnack + " to last you until the ripe old age of " + age);
}

calculateSupply(75, 2);
calculateSupply(99, 3);
calculateSupply(86, 5);