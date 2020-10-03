

interface SortableCollection {
    swap : (index1:number,index2:number) => void;
    compare: (index1:number, index2:number , comparator : (x:any,y:any) => -1 | 0 | 1 ) => -1 | 0 | 1;
}


export default SortableCollection;