class stack {
        constructor() {
            this.arr = []
        }
        push(value) {
            this.arr.push(value)
        }
        pop() {
            return this.arr.pop()
        }
        peek() {
            return this.arr[this.arr.length - 1]
        }
        isempty() {
            return (this.arr.length === 0)
        }
        emptythis() {
            return this.arr.length = 0
            // or this.arr=0
        }
        sizeofstack(){
            return this.arr.length
        }
        toarray(){
            return this.arr
        }
        converttostr(){
            return this.arr.toString()
        }

    }


    var s1 = new stack
    console.log('s1: before inserting elements ', s1);
    s1.push(20)
    s1.push(30)
    s1.push(24)
    console.log('  s1.peek(): ',   s1.peek());
    s1.push(30)
    s1.pop()
    s1.push(24)
    s1.push(30)
    s1.pop()
    s1.push(24)
    s1.push(30)
    console.log('  s1.peek(): ',   s1.peek());
    s1.push(24)
    s1.pop()
    console.log('s1: ', s1);
    console.log('s1.isempty(): ', s1.isempty());
    console.log('  s1.sizeofstack(): ',   s1.sizeofstack());
    console.log('  s1.converttostr(): ',   s1.converttostr());
    console.log(' s1.toarray(): ',  s1.toarray());
    s1.emptythis()
    console.log('s1.emptythis(): ', s1.emptythis());
    console.log('  s1.peek(): ',   s1.peek());
    console.log('  s1.sizeofstack(): ',   s1.sizeofstack());
    console.log('s1.isempty(): ', s1.isempty());