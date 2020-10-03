
import {Collection} from '../../../../Types/Collection'

export function bubbleSort(arr : Collection) : any[] {
    let s : number = arr.getSize();

    for (let i = 0 ;i < s ; i++) {
        for (let j = i ; j < s ; j++) {
            if (arr.compare(i,j) == 1) {
                arr.swap(i,j);
            }
        }
    }

    return arr.getItems();
}