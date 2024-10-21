const itembill = {
    items: [
      { code: '001', name: 'Milk', qty: 2, unit: 'Liter', price: 30, discount: 0.1 },
      { code: '002', name: 'Bread', qty: 3, unit: 'Pack', price: 50, discount: 0.05 },
      { code: '003', name: 'Jam', qty: 1, unit: 'Pack', price: 50, discount: 0.05 },
      { code: '004', name: 'Eggs', qty: 1, unit: 'Dozen', price: 60, discount: 0 }
    ],
  
    calctotal: function(item) {
      return (item.qty * item.price) * (1 - item.discount);
    },
  
    display: function() {
      let gtotal = 0;
      console.log('BILL GENERATION')
      console.log('Code | Name   | Qty | Unit | Price | Discount | Total');
      console.log('-----------------------------------------------');
  
      this.items.forEach(item => {
        const item_total = this.calctotal(item);
        gtotal += item_total;
  
        console.log(`${item.code}  | ${item.name} | ${item.qty}  | ${item.unit}  | Rs. ${item.price} | ${item.discount * 100}% | Rs. ${item_total.toFixed(2)}`);
      });
  
      console.log('-----------------------------------------------');
      console.log(`Grand Total: Rs. ${gtotal.toFixed(2)}`);
      console.log('-----------------------------------------------');
    }
  };
  itembill.display();