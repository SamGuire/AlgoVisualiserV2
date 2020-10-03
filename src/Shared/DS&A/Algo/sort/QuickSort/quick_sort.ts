import {Collection} from '../../../../Types/Collection'


export function quickSort(arr : Collection) : any[] {

    helper(arr,0,arr.getSize()-1);
    return arr.getItems();

}

function helper(A : Collection, l : number , r : number)  {
    if (l < r) {

        let partition_idx = partition(A,l,r);
        helper(A,l,partition_idx-1)
        helper(A,partition_idx+1,r)

    }
}

function partition(A:Collection, l:number,r:number) {
    let key = r;
    let s = 0;

    for (let i = 0 ; i < r ; i++) {
        if (A.compare(i,key) < 0) {
            A.swap(s,i)
            s++
        }
    }
    A.swap(s,key)
    return s
}

