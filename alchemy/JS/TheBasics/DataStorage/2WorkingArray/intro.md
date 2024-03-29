**Arrays**
Quite often in programming we need to deal with multiple elements at once. Let's say we have a list of test scores and we want to calculate the average score. In JavaScript, we would use an array to store the scores:

const array = [70, 80, 65, 100, 90, 95];
Then we would be able to loop over the array, summing together each test score:

let total = 0; 
for(let i = 0; i < array.length; i++) {
    total += array[i];
}
Once we have a total sum of test scores, we can simply divide it by the array length (the number of tests in our population), to get our average score:

const average = total / array.length;
Having the ability to easily store many elements, use an index to retrieve an element and quickly retrieve the total length of the elements are hallmarks of what make arrays so useful.

Let's dive into the syntax some more and work on some exercises with Arrays!

