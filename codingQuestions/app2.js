function reversePrint(head) {
    if (!head) {
      return;
    }
  
    const elements = [];
    let current = head;
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
  
    for (let i = elements.length - 1; i >= 0; i--) {
      console.log(elements[i]);
    }
  }