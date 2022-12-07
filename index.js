// Iteration 1: Constructor()
class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  
// Iteration 2: add(items)
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  // When you add an the items, use the push method to add the item to the array. 
  // After this has been done, you can and should use the sort method to sort the array in the correct order, in this case, ascending order.
  // Lastly, it is important to update the length of the array so that it matches the new length of the array. 

// Iteration 3: get(pos)
get(pos) {}
 

// Iteration 4: max()
  max() {}
   
// Iteration 5: min()
  min() {}
  
// Iteration 6: sum()
  sum() {}

  avg() {}
}

module.exports = SortedList;
