import {HashNode} from "./hashMapNode.js"


class HashMap{
    constructor(){
        this.bucket = new Array(16).fill(null);
        this.loadFactor = 0.75;
        this.capacity = this.bucket.length;
        this.occupied = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.capacity;
    }

    updateData(key,value){
        let hash = this.hash(key);
        if(!this.bucket[hash]){
            const node = new HashNode;
            node.prepend(key,value);
            this.bucket[hash] = node;
            this.occupied++;
        }
        else{
            const node = this.bucket[hash];
            if(node.contains(key)){
                const index = node.find(key);
                node.replace(value, index);
            }
            else{
                node.append(key, value);
                this.occupied++;
            }
        }
    }

    set(key, value){
        const currentLoad = this.loadFactor * this.capacity;
        if(this.occupied >= currentLoad){
            this.capacity *= 2;
            const newSize = this.capacity - this.bucket.length;
            const temp = this.bucket;
            this.bucket = new Array(newSize).fill(null);
            this.occupied = 0;
            for(let i = 0; i < temp.length; i++){
                let node = temp[i];
                if(node){
                    let bucket = node.head;
                    for(let i = 0; i < node.size; i++){
                        this.updateData(bucket.key, bucket.value);
                        bucket = bucket.next;

                    }
                }
            }
        }
        this.updateData(key,value);
    }

    get(key){
        const hash = this.hash(key);
        let bucket = this.bucket[hash];
        bucket = bucket.head;
        if(bucket.key === key){
            console.log(bucket.key);
        }
        else{
            while(bucket.next){
                bucket = bucket.next;
                if(bucket.key === key){
                    console.log(bucket.key);
                }
                return;
            }
            console.log(null);
        }
    }

    has(key){
        const hash = this.hash(key);
        const node = this.bucket[hash];
        if(!node){
            console.log(false)
        }
        else{
            console.log(node.contains(key));
        }
    }

    remove(key){
        const hash = this.hash(key);
        const node = this.bucket[hash];
        if(!node){
            console.log(false);
        }
        if(node.getSize() === 1){
            this.bucket[hash] = null;
            this.occupied--;
        }
        else{
            const index = node.find(key);
            node.removeAt(index);
            console.log(true);
            this.occupied--;
        }
    }

    length(){
        console.log(this.occupied);
    }

    clear(){
        this.bucket = Array(10).fill(null);
        this.occupied = 0;
    }

    keys(){
        let keys = [];
        let node;
        for(let i = 0; i < this.bucket.length; i++){
            node = this.bucket[i];
            if(node){
                let bucket = node.head;
                keys.push(bucket.key);
                while(bucket.next){
                    bucket = bucket.next;
                    keys.push(bucket.key);
                }
            }
        }
        console.log(keys);
    }

    values(){
        let values = [];
        let node;
        for(let i = 0; i < this.bucket.length; i++){
            node = this.bucket[i];
            if(node){
                let bucket = node.head;
                values.push(bucket.value);
                while(bucket.next){
                    bucket = bucket.next;
                    values.push(bucket.value);
                }
            }
        }
        console.log(values);
    }

    entries(){
        let entries = [];
        let node;
        for(let i = 0; i < this.bucket.length; i++){
            node = this.bucket[i];
            if(node){
                let bucket = node.head;
                entries.push([bucket.key,bucket.value]);
                while(bucket.next){
                    bucket = bucket.next;
                    entries.push([bucket.key,bucket.value]);
                }
            }
        }
        console.log(entries);
    }
}

export{HashMap};
