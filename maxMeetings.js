function printMaxActivities(s, f, n) {
  let i, j;
  document.write("Following activities are selected : n");

  // The first activity always gets selected
  i = 0;
  document.write(i + " ");

  // Consider rest of the activities
  for (j = 1; j < n; j++) {

    // If this activity has start time greater than or
    // equal to the finish time of previously selected
    // activity, then select it
    if (s[j] >= f[i]) {
      document.write(j + " ");
      i = j;
    }
  }
}

// Driver program to test above function
let s = [1, 3, 0, 5, 8, 5]
let f = [2, 4, 6, 7, 9, 9]
let n = s.length;
printMaxActivities(s, f, n);

// void print_Max_Activities(Activity arr[], int n) 
// { 
//     // Sort activities according to finish time 
// 	sort(arr, arr+n, Sort_activity); 

// 	cout<< "Following activities are selected \n"; 

//     // Select the first activity
//     int i = 0; 
// 	cout<< "(" <<arr[i].start<< ", " <<arr[i].finish << ")\n"; 

//     // Consider the remaining activities from 1 to n-1 
//     for (int j = 1; j < n; j++) 
//     { 
//     	// Select this activity if it has start time greater than or equal
//     	// to the finish time of previously selected activity
//       	if (arr[j].start>= arr[i].finish) 
//       	{	 
// 			cout<< "(" <<arr[j].start<< ", "<<arr[j].finish << ") \n"; 
// 			i = j; 
//       	} 
//     } 
// } 