/*
const user = {id: 1, name: 'Gorib Amir', job:'actor'};
// javaScript object notation (jason)
const stringifyied = JSON.stringify(user);
console.log(user);
console.log(stringifyied);
*/

const shop = {
    owner:'alia',
    adress:{
        street: 'kochukhet',
        revenew: 45000,
        isOpen: true,
        isNew: false,
    },
};
const a = JSON.stringify(shop);
// console.log();
console.log(JSON.parse(a));