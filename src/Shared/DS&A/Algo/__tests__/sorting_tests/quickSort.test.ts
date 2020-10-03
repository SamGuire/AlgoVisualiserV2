import {quickSort} from  "../../sort/QuickSort/quick_sort";
import {Collection} from  "../../../../Types/Collection";
import shuffle from "../../math/random";


const correct_arrays = [
    [],
    [1,2,3,4,5,6,7,8,9,10],
    [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
];


test('Sorted Array', () => {
    expect(
        quickSort(
            new Collection([])))
            .toEqual(correct_arrays[0]);
  });

test('Sorted Array', () => {
    expect(
        quickSort(
            new Collection([1,2,3,4,5,6,7,8,9,10].reverse())))
            .toEqual(correct_arrays[1]);
});

test('Sorted Array', () => {
    expect(
        quickSort(
            new Collection([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1].reverse()))).
            toEqual(correct_arrays[2]);
});

test('Sorted Array', () => {
    expect(
        quickSort(
            new Collection(shuffle([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1].reverse()))))
            .toEqual(correct_arrays[2]);
});

test('Sorted Array', () => {
    expect(
        quickSort(
            new Collection(shuffle([1,2,3,4,5,6,7,8,9,10].reverse()))))
            .toEqual(correct_arrays[1]);
});

test('Sorted Array', () => {
    expect(
        quickSort(
            new Collection([1,2,3,4,5,6,7,8,9,10])))
            .toEqual(correct_arrays[1]);
});