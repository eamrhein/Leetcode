/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(matrix, k) {
   let n = matrix.length **2
   let oneDim = new MinHeap(x => x);
   for(let i = 0; i < matrix.length; i++){
       for(let j = 0; j < matrix.length; j++){
           oneDim.heapify([matrix[i][j]])
       }
   }
    console.log(oneDim.seek(k))
};

class MinHeap {
    constructor(selector) {
        this.items = [];
        this.selector = selector;
    }

    seek() { return this.items[0]; }

    push(item) {
        let i = this.items.length;
        this.items.push(item);
        while (i > 0 && this.selector(this.items[Math.floor((i + 1) / 2 - 1)]) > this.selector(this.items[i])) {
            let t = this.items[i];
            this.items[i] = this.items[Math.floor((i+1)/2-1)];
            this.items[Math.floor((i+1)/2-1)] = t;
            i = Math.floor((i + 1) / 2 - 1);
        }
    }

    pop() {
        if (this.items.length <= 1) return this.items.pop();
        const ret = this.items[0];
        this.items[0] = this.items.pop();
        let i = 0;
        while (true) {
            let lowest = this.selector(this.items[(i + 1) * 2]) < this.selector(this.items[(i + 1) * 2 - 1]) 
                ? (i + 1) * 2 : (i + 1) * 2 - 1;
            if (this.selector(this.items[i]) > this.selector(this.items[lowest])) {
                let t = this.items[i];
                this.items[i] = this.items[lowest];
                this.items[lowest] = t;
                i = lowest             
            } else break;
        }
        return ret;
    }

    delete(item) {
        let i = this.items.indexOf(item);
        // heapify
        this.items[i] = this.items.pop();
        while (true) {
            let lowest = this.selector(this.items[(i + 1) * 2]) < this.selector(this.items[(i + 1) * 2 - 1]) 
                ? (i + 1) * 2 : (i + 1) * 2 - 1;
            if (this.selector(this.items[i]) > this.selector(this.items[lowest])) {
                let t = this.items[i];
                this.items[i] = this.items[lowest];
                this.items[lowest] = t;
                i = lowest             
            } else break;
        }
    }

    heapify(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.push(arr[i]);
        }
    }
}
