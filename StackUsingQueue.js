class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(data) {
      // Enqueue the data to the first queue
      this.queue1.push(data);
    }
  
    pop() {
      // Check if the first queue is empty
      if (this.queue1.length === 0) {
        console.log("Stack is empty");
        return;
      }
  
      // Dequeue all elements from the first queue except the last element and enqueue them to the second queue
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      // Dequeue the last element of the first queue
      let last = this.queue1.shift();
  
      // Swap the two queues
      let temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
  
      // Return the last element
      return last;
    }
  }
  
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); 
  console.log(stack.pop()); 
  console.log(stack.pop()); 
  