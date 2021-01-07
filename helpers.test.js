import { groupArrayElements } from "./helpers";

describe("group array elements", () => {
    it("should return the array if number of array groups < 2", () => {
        const array = [1, 2, 3, 4, 5];
        const groupedArray = groupArrayElements([1, 2, 3, 4, 5], 0);
        const otherGroupedArray = groupArrayElements([1, 2, 3, 4, 5], 1);
        expect(groupedArray).toEqual(array);
        expect(otherGroupedArray).toEqual(array);
    });

    it("should fill the array response with empty arrays to match the expected number of array groups", () => {
        const array = [1, 2, 3, 4, 5];
        const response = [[1], [2], [3], [4], [5], [], [], []];
        const groupedArray = groupArrayElements(array, 8);
        expect(groupedArray).toEqual(response);
    });

    it("should return equally sized arrays", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const response = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const groupedArray = groupArrayElements(array, 3);
        expect(groupedArray).toEqual(response);
    });

    it("should return equally sized arrays + remainder if possible", () => {
        const array = [1, 2, 3, 4, 5];
        const response = [[1, 2], [3, 4], [5]];
        const groupedArray = groupArrayElements(array, 3);
        expect(groupedArray).toEqual(response);
    });

    it("should balance the arrays + remainder if possible", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const response = [[1, 2], [3, 4], [5, 6], [7, 8], [9], [10], [11], [12], [13]];
        const groupedArray = groupArrayElements(array, 9);
        expect(groupedArray).toEqual(response);
    });
});
