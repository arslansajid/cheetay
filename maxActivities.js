function activityselection(start, end, n) {
  let i, j;
  i = 0;

  // Consider rest of the activities
  for (j = 1; j < n; j++) {

    // If this activity has start time greater than or
    // equal to the finish time of previously selected
    // activity, then select it
    if (start[j] >= end[i]) {
      console.log(j + " ");
      i = j;
    }
  }
}

let start = [1, 3, 0, 5, 8, 5]
let end = [2, 4, 6, 7, 9, 9]
let n = start.length;
activityselection(start, end, n);
