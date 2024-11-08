class Node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    //append value to the end of th list
    append(data){
        const node = new Node(data);
        if(this.size === 0){
            this.head = node;
            this.tail = this.head;
        }
        else{
            let currNode = this.head;
            while(currNode.next){
                currNode = currNode.next;
            }
            currNode.next = node;
            this.tail = node;
        }
        this.size++;
    }
    //prepend value to the start of the list
    prepend(data){
        this.head = new Node(data, this.head);
        if(!this.tail) this.tail = this.head;
        this.size++;
    }
    //get the size of the list
    getSize(){
        console.log(this.size);
    }
    //get the head node of the list
    getHead(){
        console.log(this.head);
    }
    //get the tail node of the list
    getTail(){
        console.log(this.tail);
    }
    //get the node at the given index
    atIndex(index){
        if(index >= this.size) return;
        if(index === 0){
            console.log(this.head);
        }
        else{
            let currNode = this.head;
            for(let i = 0; i < this.size; i++){
                if(i === index){
                    console.log(currNode);
                }
                else{
                    currNode = currNode.next;
                }
            }
        }
    }
    //remove the last node from the list
    pop(){
        if(this.size === 0) return;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        else{
            let currNode = this.head;
            for(let i = 1; i < this.size -1; i++){
                currNode = currNode.next;
                if(i === this.size - 2){
                    currNode.next = null;
                    this.tail = currNode;
                    break;
                }
            }
        }
        this.size--;
        console.log(this);
    }
    //returns true if the give value is available in the list
    contains(data){
        let currNode = this.head;
        let containsValue = false;
        for(let i = 0; i < this.size; i++){
            if(currNode.value === data){
                console.log(true);
                containsValue = true;
                break;
            }
            else{
                currNode = currNode.next;
            }
        }
        if(!containsValue) console.log(false);
    }
    //returns the index of the given value
    find(data){
        let currNode = this.head;
        let containsValue = false;
        for(let i = 0; i < this.size; i++){
            if(currNode.value === data){
                console.log(i);
                containsValue = true;
                break;
            }
            else{
                currNode = currNode.next;
            }
        }
        if(!containsValue) console.log(null);
    }
    //prints all the values from the list
    toString(){
        let currNode = this.head;
        let text = ``;
        while(currNode){
            text += `( ${currNode.value} ) - > `;
            currNode = currNode.next;
        }
        text += null;
        console.log(text);
    }
    //insert new node at the given index
    insertAt(data, index){
        if(index === 0) this.prepend(data);
        if(index >= this.size) return;

        const node = new Node(data);
        let curr = this.head;
        let pre = null;
        for(let i = 0; i < index; i++){
            pre = curr;
            curr = curr.next;
        }
        pre.next = node;
        node.next = curr;
    }
    //remove node at the given index from the list
    removeAt(index){
        if(index === 0) this.head = this.head.next;
        if(index >= this.size) return;

        let curr = this.head;
        let pre = null;
        for(let i = 0; i < index; i++){
            pre = curr;
            curr = curr.next;
        }
        pre.next = curr.next;
    }
}

export {LinkedList}