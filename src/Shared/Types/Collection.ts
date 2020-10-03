import SortableCollection from './sort_interface';

const DEFAULT_COMPARATOR = (v1:any,v2:any) => {
    if (v1 > v2) {
        return 1;
    } else if (v1 == v2) {
        return 0
    } else {
        return -1
    }
};

export class Collection implements SortableCollection {
    

    constructor(private items : any[], private comparator: (v1:any, v2:any) => -1|0|1 = DEFAULT_COMPARATOR ) {}

    public swap(i1:number,i2:number) {
        if (i1 > this.items.length || i1 < 0 || i2 > this.items.length || i2 < 0) {
            return;
        } else {
            let tmp : any = this.items[i1];
            this.items[i1] = this.items[i2];
            this.items[i2] = tmp;
        }
    }

    public compare(i1:number,i2:number) {
        if (i1 > this.items.length || i1 < 0 || i2 > this.items.length || i2 < 0) {
            return 0;
        } else {
            return this.comparator(this.items[i1],this.items[i2]);
        }
    }

    public getItems() {
        return this.items;
    }

    public getSize() {
        return this.items.length;
    }

    public set(index:number, value:any) {
        if (index < 0 || index > this.items.length) {
            return;
        } else {
            this.items[index] = value;
        }
    }

    public get(index:number) {
        if (index < 0 || index > this.items.length) {
            return;
        } else {
            return this.items[index];
        }
    }
}