import {Collection} from '../../../../Types/Collection'


export function mergeSort(arr : Collection) : any[] {

    helper(arr,0,arr.getSize()-1);
    return arr.getItems();

}

function helper(A : Collection, l : number , r : number)  {
    if (l < r) {

        let m : number = Math.floor((r-l)/2) + l;

        helper(A,l,m);
        helper(A,m+1,r);
        merge(A,l,m,r);

    }
}

function merge(A:Collection, l:number, m:number , r:number) {
    let s2 = m + 1;
    if (A.compare(m,s2) <= 0) {
        return;
    }
    while (l <= m && s2 <= r){
        if (A.compare(l,s2) <= 0){
            l++; 
        }
        else {
            let value : any = A.get(s2); 
            let index = s2; 
  

            while (index != l){
                A.set(index,A.get(index - 1)); 
                index -= 1; 
            }
              
            A.set(l,value) 
  
            l += 1; 
            m += 1; 
            s2 += 1; 
        }
    }
}

