class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the stack
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Peek at the top element without removing it
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print the stack elements
    print() {
      console.log(this.items.join(' '));
    }
  }