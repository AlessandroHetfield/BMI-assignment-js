var marksmass = 95;
var marksheight = 1.88;
var johnsmass = 85;
var johnsheight = 1.76;

marksBMI = marksmass / marksheight ** 2;
johnsBMI = johnsmass / johnsheight ** 2;

const markHigherBMI = marksBMI > johnsBMI;
console.log("Marks is fatter", markHigherBMI);
const johnHigherBMI = johnsBMI > marksBMI;
console.log("Johns is fatter", johnHigherBMI);

console.log("Marks BMI is", marksBMI);
console.log("Johns BMI is ", johnsBMI);

if (marksBMI > johnsBMI) {
  console.log("Marks is fat");
} else {
  console.log("John is fat");
}
