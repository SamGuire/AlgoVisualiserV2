import {Collection} from '../../../../Types/Collection'

export function countingSort(arr : Collection) : any[] {
    let s : number = arr.getSize();
    let items = arr.getItems();

    if (!items || items.length == 0) {
        return items;
    }

    let max = Math.max(...items);

    let count = new Array(max+1).fill(0);

    for (let i = 0 ;i < s ; i++) {
        if (!count[arr.get(i)]) {
            count[arr.get(i)] = 1;
        } else {
            count[arr.get(i)]++;
        }
    }

    let idx = 0;

    for (let i = 0 ;i < count.length ; i++) {
        while (count[i]) {
            arr.set(idx,i)
            count[i]--;
            idx++;
        }
    }

    return arr.getItems();
}
