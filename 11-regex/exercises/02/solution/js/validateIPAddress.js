// 2. Írj egy függvényt `validateIPAddress`, ami paraméterként egy IPv4 címet vár stringként!   
// A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott IP cím megfelelő formátumú e, vagy sem.
const validateIPAddress = (address) => {
    const ipv4 = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    if (ipv4.test(address)){
        return true;
    } else {
        return false;
    }
}

export default validateIPAddress;
