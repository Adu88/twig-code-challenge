export const groupArrayElements = (array, arrayGroups) => {
    let newArray = [];
    let arrayGroupSize = 0;
    let i = 0;
    if (arrayGroups < 2) {
        return array
    }

    if (array.length % arrayGroups === 0) {
        arrayGroupSize = array.length / arrayGroups;
        while (i < array.length) {
            newArray.push(array.slice(i, i += arrayGroupSize));
        }
    } else {
        for (let i = arrayGroups; i > 0; i--) {
            newArray.push(array.splice(0, Math.ceil(array.length / i)));
        }
    }

    return newArray;
};
