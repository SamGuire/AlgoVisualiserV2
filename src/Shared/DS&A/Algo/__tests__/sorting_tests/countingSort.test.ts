import {countingSort} from  "../../sort/CountingSort/counting_sort";
import {Collection} from  "../../../../Types/Collection";
import shuffle from "../../math/random";


const correct_arrays = [
    [],
    [1,2,3,4,5,6,7,8,9,10],
];


test('Sorted Array', () => {
    expect(
        countingSort(
            new Collection([])))
            .toEqual(correct_arrays[0]);
  });

test('Sorted Array', () => {
    expect(
        countingSort(
            new Collection([1,2,3,4,5,6,7,8,9,10].reverse())))
            .toEqual(correct_arrays[1]);
});


test('Sorted Array', () => {
    expect(
        countingSort(
            new Collection(shuffle([1,2,3,4,5,6,7,8,9,10].reverse()))))
            .toEqual(correct_arrays[1]);
});

test('Sorted Array', () => {
    expect(
        countingSort(
            new Collection([1,2,3,4,5,6,7,8,9,10])))
            .toEqual(correct_arrays[1]);
});