// function receipt() {
//     const arrayReceipt = [
//         {
//         'Lavash': {
//             info: 'Big Cheese',
//             price: 15000
//         }, 'Hot-dog': {
//             info: 'mini',
//             price: 8500
//         }, 'Cola': {
//             info: '1.5 L',
//             price: 9000
//         }
//     }, 
//     {
//         'Milk': {
//             info: '1 L',
//             price: 8500
//         },
//         'Sugar': {
//             info: '1 kg',
//             price: 7000
//         }
//     },
//      {
//         'Cola': {
//             info: '1 L',
//             price: 6500
//         },
//         'Fanta': {
//             info: '1.5 L',
//             price: 9000
//         },
//         'Lipton': {
//             info: '1.2 L',
//             price: 5000
//         }, 
//         'Nestle': {
//             info: '10 L',
//             price: 8500
//         }
//     }]
//     const count = Math.floor(Math.random() * arrayReceipt.length)
//     return arrayReceipt[count]
// }
const nout = {
    1: {
        name: 'Lenovo ',
        model: 'ThinkPad X1 Carbon Gen 9 (14", Intel) Laptop ',
        price: 122,
        amount: 30,
        get count() {
            return this.price * this.amount
        }
    },
    2: {
        name: 'Lenovo',
        model: 'Legion 5 Pro Gen 6 (16" AMD) Gaming Laptop ',
        price: 350,
        amount: 10,
        get count() {
            return this.price * this.amount
        }
    },

    3: {
        name: 'Acer',
        model: 'Aspire  3 ',
        price: 800,
        amount: 37,
        get count() {
            return this.price * this.amount
        }
    },
    4: {
        name: 'Acer',
        model: 'Aspire 5 ',
        price: 900,
        amount: 29,
        get count() {
            return this.price * this.amount
        }
    },
    5: {
        name: 'Acer',
        model: 'Aspire e 15 ',
        price: 700,
        amount: 28,
        get count() {
            return this.price * this.amount
        }
    },
    6: {
        name: 'HP',
        model: 'pawilion gaming',
        price: 106,
        amount: 40,
        get count() {
            return this.price * this.amount
        }
    },
    7: {
        name: 'HP',
        model: 'laserjet ',
        price: 960,
        amount: 4,
        get count() {
            return this.price * this.amount
        }
    },
    8: {
        name: 'HP',
        model: 'HP Spectre x360 15" ',
        price: 102,
        amount: 2,
        get count() {
            return this.price * this.amount
        }
    }
}
let result
for (const key in nout) {
   result =`\n nomi: ${nout[key].name} 
            \n model: ${nout[key].model} 
            \n narxi: ${nout[key].price}$ 
            \n soni: ${nout[key].amount} 
            \n jamlangan narxi: ${nout[key].count}$`
   console.log(result);
}