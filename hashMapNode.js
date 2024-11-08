class Node{
    constructor(key = null, value = null, next = null){
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashNode{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    //append value to the end of th list
    append(key,data){
        const node = new Node(key,data);
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
    prepend(key,data){
        this.head = new Node(key,data, this.head);
        if(!this.tail) this.tail = this.head;
        this.size++;
    }
    //get the size of the list
    getSize(){
        return this.size;
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
    //returns true if the give value is available in the list
    contains(data){
        let currNode = this.head;
        let containsValue = false;
        for(let i = 0; i < this.size; i++){
            if(currNode.key === data){
                containsValue = true;
                return true;
            }
            else{
                currNode = currNode.next;
            }
        }
        return false;
    }
    //returns the index of the given value
    find(data){
        let currNode = this.head;
        let containsValue = false;
        for(let i = 0; i < this.size; i++){
            if(currNode.key === data){
                containsValue = true;
                return i;
            }
            else{
                currNode = currNode.next;
            }
        }
        return null;
    }
    //replace value at index
    replace(data, index){
        if(index >= this.size) return;
        if(index === 0){
            this.head.value = data;
        }
        else{
            let currNode = this.head;
            for(let i = 0; i < index; i++){
                currNode = currNode.next;
            }
            currNode.value = data;
        }
    }
    //remove node at the given index from the list
    removeAt(index){
        if(index === 0){
            this.head = this.head.next;
            this.tail = this.head;
        }
        else{
            if(index >= this.size) return;

            let curr = this.head;
            let pre = null;
            for(let i = 0; i < index; i++){
                pre = curr;
                curr = curr.next;
            }
            pre.next = curr.next;
            if(!pre.next){
                this.tail = pre;
            }
            else{
                this.tail = pre.next;
            }
        }
        this.size--;
    }
}

export {HashNode}

