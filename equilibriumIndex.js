const findEquilibrium = A => {
  let firstArray = [];
  let firstSum = 0;
  let secondArray = [];
  let secondSum = 0;

  for (let i = 0; i < A.length; i++) {
    let currentIndex = i + 1;

    firstArray.push(A[i]);
    firstSum = firstArray.reduce((a, b) => {
      return a + b;
    }, 0);

    secondArray = [];
    secondSum = 0;
    for (let i = currentIndex; i < A.length; i++) {
      if (A[i] != undefined) {
        secondArray.push(A[i]);
      }
      secondSum = secondArray.reduce((a, b) => {
        return a + b;
      }, 0);
    }

    if (firstSum == secondSum) break;
  }

  return firstArray.length;
};

const a = [1,2,3,3,2,1]; // = 3
const b = [10,1,5,3,1]; // = 1
const c = [1,4,2,1,1,2,5,6]; // = 6

console.log(findEquilibrium(a));