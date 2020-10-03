import { Collection } from "../../../../Types/Collection";
import {Heap, HEAPTYPE} from "../../list-based/Heap/heap";
import shuffle from "../../../Algo/math/random";


const cases = [
    [new Collection([1,2,3,4,5,6,7,8,9,10]),true,1,10],
    [new Collection([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]),true,-10,-1],
    [new Collection(shuffle([1,2,3,4,5,6,7,8,9,10])),true,1,10],
    [new Collection(shuffle([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1])),true,-10,-1],
];

const error_cases = [
    [new Collection([]),true],
];

describe('Build Valid Min-Heap', () => {
    test.each(cases)(
        'Case is a valid min-heap',(collection,expectedBoolean,expectedValue,_) => {
            let heap = new Heap();
            heap.buildHeap(collection as Collection ,HEAPTYPE.MIN_HEAP);
            expect(heap.isHeap(collection as Collection, 0, HEAPTYPE.MIN_HEAP)).toBe(expectedBoolean);
            expect(heap.extract(collection as Collection, HEAPTYPE.MIN_HEAP)).toBe(expectedValue);
        }
    )
})

describe('Build Valid Max-Heap', () => {
    test.each(cases)(
        'Case is a valid Max-heap',(collection,expectedBoolean,_,expectedValue) => {
            let heap = new Heap();
            heap.buildHeap(collection as Collection ,HEAPTYPE.MAX_HEAP);
            expect(heap.isHeap(collection as Collection, 0, HEAPTYPE.MAX_HEAP)).toBe(expectedBoolean)
            expect(heap.extract(collection as Collection, HEAPTYPE.MAX_HEAP)).toBe(expectedValue);
        }
    )
})

describe("Error throw Min-Heap", () => {
    test.each(error_cases)(
        'Error case throw error', (collection,expectedBoolean) => {
            try {
                let heap = new Heap();
                heap.buildHeap(collection as Collection ,HEAPTYPE.MIN_HEAP);
                expect(heap.isHeap(collection as Collection, 0, HEAPTYPE.MIN_HEAP)).toBe(expectedBoolean)
                heap.extract(collection as Collection, HEAPTYPE.MIN_HEAP)
            } catch(e) {
                expect(e).toHaveProperty("message","This is an empty heap");
            }
        }
    )
})

describe("Error throw Max-Heap", () => {
    test.each(error_cases)(
        'Error case throw error', (collection,expectedBoolean) => {
            try {
                let heap = new Heap();
                heap.buildHeap(collection as Collection ,HEAPTYPE.MAX_HEAP);
                expect(heap.isHeap(collection as Collection, 0, HEAPTYPE.MAX_HEAP)).toBe(expectedBoolean)
                heap.extract(collection as Collection, HEAPTYPE.MAX_HEAP)
            } catch(e) {
                expect(e).toHaveProperty("message","This is an empty heap");
            }
        }
    )
})
