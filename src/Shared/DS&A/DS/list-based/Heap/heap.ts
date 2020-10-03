import "../../../../Types/Collection"
import { Collection } from "../../../../Types/Collection";

export enum HEAPTYPE {
    MIN_HEAP,
    MAX_HEAP
}

export class Heap {

    private size : number = 0;
    public constructor() {}

    public buildHeap = (collection : Collection, type:HEAPTYPE ) => {

        this.size = collection.getSize();
        let heapify = type === HEAPTYPE.MIN_HEAP ? this.minHeapify : this.maxHeapify;

        let start = Math.floor(collection.getSize() / 2) - 1;

        for (let i = start ; i >= 0 ; i--) {
            heapify(collection,i,this.size);
        }
    }

    private minHeapify = (collection:Collection, index:number, size:number) => {
        let left  = index*2 + 1
        let right = index*2 + 2

        let minValue = index
        
        if (left < size && collection.get(left) && collection.compare(left,minValue) < 0) {
            minValue = left
        } 
        if (right < size && collection.get(right) && collection.compare(right,minValue) < 0) {
            minValue = right
        }

        if (minValue == index) {
            return;
        } else {
            collection.swap(minValue,index)
            this.minHeapify(collection,minValue,size);
        }


    }

    private maxHeapify = (collection:Collection, index:number,size:number) => {
        let left  = index*2 + 1
        let right = index*2 + 2

        let maxValue = index

        if (left < size && collection.get(left) && collection.compare(left,maxValue) > 0) {
            maxValue = left
        } 
        if (right < size && collection.get(right) && collection.compare(right,maxValue) > 0) {
            maxValue = right
        }

        if (maxValue == index) {
            return;
        } else {
            collection.swap(maxValue,index)
            this.maxHeapify(collection,maxValue,size);
        }


    }

    public isHeap = (collection:Collection, index:number, type:HEAPTYPE) : boolean => {

        if (index >= collection.getSize()) {
            return true;
        }


        let f = type === HEAPTYPE.MIN_HEAP ? Math.min : Math.max;
        let undefinedValue = type === HEAPTYPE.MIN_HEAP ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
        let left  = index*2 + 1
        let right = index*2 + 2

        let leftV = collection.get(left) === undefined ? undefinedValue : collection.get(left) ;
        let rightV = collection.get(right) === undefined ? undefinedValue : collection.get(right) ;

        let parentV = collection.get(index)

        if (f(leftV,rightV,parentV) === parentV) {
            return true && this.isHeap(collection,left,type) && this.isHeap(collection,right,type)
        } else {
            return false;
        } 

    }

    public extract = (collection:Collection, type:HEAPTYPE) : any => {

        if (this.size <= 0) {
            throw new Error("This is an empty heap");
        }

        let v = collection.get(0);

        let f = type === HEAPTYPE.MIN_HEAP ? this.minHeapify : this.maxHeapify;

        collection.swap(0,this.size-1);

        this.size--;
        
        f(collection,0,this.size);

        return v;

    }

}


