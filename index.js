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
get(pos) {
  if (pos > this.items.length) {
    throw new Error('OutOfBounds');
  } else{
    return this.items[pos];
  }} 
  // When getting the position, you need to check if the position is greater than the length  of the array.
  // After this is done, you should use the return method and the this.items[pos] to return the item. 
  // It is important to use the [] notation as it helps us to access the items position in the array.
 

// Iteration 4: max()
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1];
    }
  }
  // when checking for the max value in an array you need to check if the array is empty.
  // After this is done, you can use the return method and the this.items[this.items.length - 1] to return the last item in the array.
  // It is important to use the [] notation as it helps us to acess the items position in the array.
  // It is also important to use the this.items.length - 1 as it helps us to access the last item in the array.
   
// Iteration 5: min()
  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }
  // when checking for the min value in an array you need to check if the array is empty.
  // After this is done, you can use the return method and the this.items[0] to return the first item in the array.
  // It is important to use the [] notation as it helps us to acess the items position in the array.
  // IT is also important to use the this.items[0] as it helps us to access the first item in the array.

  
// Iteration 6: sum()
  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b);
    }
  }
  // When summing the items in an array, you need to check if the array is empty.
  // After this is done, you can use the reduce method to sum the items in the array.
  // It is important to use the reduce method as it helps us to sum the items in the array.
  // It is also important to use the (a, b) => a + b as it helps us to sum the items in the array.
  // The a and b are the items in the array that are being added together and we use the arrow function and a + b to add the items together.
  // The ((a, b) => a + b) is the callback function that is being used to sum the items in the array. 


  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length;
    }
  }
}
// When averaging the items in an array, you need to check if the array is empty.
// After this is done, you can use the return method and the this.sum() / this.items.length to return the average of the items in the array.
// It is important to use the this.sum() / this.items.length as it helps us to access the sum of the items in the array and divide it by the length of the array.
// It is also important to use the this.sum() as it helps us to access the sum of the items in the array.
// The this.sum() is utilised from the previous iteration, iteration 6 and is used to divide the sum of the items length by the length of the array.
// It is also important to use the this.items.length as it helps us to access the length of the array.
// The this.items.length is utilised from the previous iteration, iteration 1 and is used to divide the sum of the items length by the length of the array.

module.exports = SortedList;
