const pythagoreanTriplet = (a, b) => {
    const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    if (hypotenuse % 1 !== 0) {
        return null;
    }
    return hypotenuse;
}

let perpendicular = 1;
let base = 1;
let hypotenuse = null;
let found = false;
while (perpendicular < 1000) {
    base = 1;
    while (base < 1000) {
        hypotenuse = pythagoreanTriplet(perpendicular, base);
        if (hypotenuse !== null) {
            const sum = perpendicular + base + hypotenuse;
            if (sum === 1000) {
                found = true;
                break;
            }
        }
        base++;
    }
    if (found) {
        break;
    }
    perpendicular++;
}

console.log(`Product is ${base * perpendicular * hypotenuse}`);