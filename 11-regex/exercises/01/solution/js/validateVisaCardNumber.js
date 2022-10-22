// 1. Írj egy függvényt `validateVisaCardNumber` néven, ami paraméterként egy visa kártyaszámot vár stringként, szóközök nélkül!   
// A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott kártyaszám megfelelő formátumú e, vagy sem.

const validateVisaCardNumber = (cardnumber) => {
    const visaRegExp = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if (visaRegExp.test(cardnumber)){
        return true;
    } else {
        return false;
    }
}

export default validateVisaCardNumber;
