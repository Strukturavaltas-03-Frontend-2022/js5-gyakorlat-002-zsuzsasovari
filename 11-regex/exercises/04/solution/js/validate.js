// 4. Hozz létre egy Object-et `roles` névvel!
//    Ebben legyen letárolva 3 reguláris kifejezés. Ezek az alábbiak:
//    - `visa`: reguláris kifejezés Visa kártyaszámra 
//    - `ip`: reguláris kifejezés IP címre
//    - `mac`: reguláris kifejezés MAC címre   

//    Írj egy `validate` nevű függvényt, ami paraméterként két paraméter vár. 
//    Az első egy string, ami egy validálandó érték, a második pedig szintén egy string az alábbiak közül: 
//    - `visa` 
//    - `ip`
//    - `mac` 
//    Ez az érték az, hogy milyen adatot akarunk validálni. 
//    A függvény visszatérési értéke egye `Boolean`.
const roles = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    ip: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
    mac: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
};

const validate = (value, role) => {
    let regex = new RegExp(roles[role]);
    if(regex.test(value)){
        return true;
    } else {
        return false;
    }
} 

export default validate;
