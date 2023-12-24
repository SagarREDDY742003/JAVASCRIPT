/// switch

const month = 3;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    default:
        console.log("may");
        break;
}

/////TRUTHY values

// "0", 'false', " ",[], {}, function(){}


////FALSY values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


///Ternary operator

const iceprice = 100;
iceprice <=80 ? console.log("less than 80") : console.log("more than 80");