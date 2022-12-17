
        class node
        {
            constructor (value)
            {
                this.value = value;
                this.next = null;

            }
        }
        class Linked_list
        {
            constructor (value)
            {
                this.head={
                    value: value,
                    next: null

                }
                this.tail=this.head;
                this.length = 1;

                } 
                
            }
            
            var obj1 = new Linked_list(1000)
            console.log(obj1)

