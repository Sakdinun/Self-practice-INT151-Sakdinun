const order = 
    {   id: 101,
        items: [
            {sku:'A', qty:2, price:1200},
            {sku:'B', qty:1, price:500}
        ],
        country:'TH',
        created:'2025-07-01' 
    }
;
  
const promos = [
{ match:{sku:'A'}, discountPct: 10 },
{ match:{country:'TH'}, discountPct: 5 }
];
  
const VAT = { TH: 0.07, US: 0.00 };
  

function createInvoice(orders, promos = []){
    let invoice = {}

    // id
    invoice["id"] = orders.id

    // subtotal sum of qty * price (before discounts)
    invoice["subtotal"] = orders.items.map((e) => e.qty * e.price).reduce((acc,cur) => acc+cur,0)

    //   totalDiscount,  // how much discount in money
    invoice["totalDiscount"] = orders.items.reduce((sum, item) => {
        const itemSubtotal = item.qty * item.price;
     
        const factor = promos
           .filter(p => (p.match.sku && p.match.sku === item.sku) || 
                        (p.match.country && p.match.country === orders.country))
           .reduce((acc, p) => acc * (1 - p.discountPct/100), 1);
     
        const discounted = itemSubtotal * factor;
        const discount = itemSubtotal - discounted;
     
        return sum + discount;
     }, 0);
     
    // VAT
    const rate = VAT[orders.country] ?? 0;
    const afterDiscount = invoice.subtotal - invoice.totalDiscount;
    invoice["vat"] = afterDiscount * rate;
   
    //  total           // final payable amount (subtotal − totalDiscount) + vat
    invoice["total"] = (invoice["subtotal"] - invoice["totalDiscount"] + invoice["vat"])

    return invoice

}

console.log(createInvoice(order, promos));




