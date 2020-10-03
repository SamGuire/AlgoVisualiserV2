import {Collection} from '../../../../Types/Collection'


export function insertionSort(arr : Collection) : any[] {

    let s : number = arr.getSize();
    for (let i = 1 ; i < s ; i++) {
        let key = arr.get(i);
        let current_idx : number = i;

        //  [A1,A2...Am-1]                              [Am,Am+1......,An] 
        //  Sorted sub-array                  Values to be placed in the Sorted sub-array
        // If the value behind the current item is bigger, place that value in the current index else place the key in the current index.
        // If the current index is at 0, we are done (nothing behind it).
        while (key < arr.get(current_idx-1) && current_idx > 0) {
            arr.set(current_idx, arr.get(current_idx-1))
            current_idx--;
        }
       
        arr.set(current_idx,key)
    }

    return arr.getItems();
}
