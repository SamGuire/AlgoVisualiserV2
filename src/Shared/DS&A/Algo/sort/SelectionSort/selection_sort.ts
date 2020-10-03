import {Collection} from '../../../../Types/Collection'

export function selectionSort(arr : Collection) : any[] {
    let s : number = arr.getSize();

    for (let i = 0 ;i < s ; i++) {
        let min = arr.get(i)
        let min_idx = i
        for (let j = i ; j < s ; j++) {
            if (arr.compare(min_idx,j)  > 0) {
                min = arr.get(j);
                min_idx = j;
            }
        }
        arr.set(min_idx,arr.get(i))
        arr.set(i,min)
    }

    return arr.getItems();
}
