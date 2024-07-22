<?php
// Creating an array with literal syntax
$colors = array("red", "green", "blue");

// Print the first element of the array
echo $colors[0]; // Output: red

// Creating an array using array_merge() function
$numbers1 = array(1, 2, 3);
$numbers2 = array(4, 5, 6);
$numbers = array_merge($numbers1, $numbers2);

// Print the last element of the merged array
echo $numbers[count($numbers) - 1]; // Output: 6

// Creating a multidimensional array
$students = array(
    array("name" => "John Doe", "age" => 25, "gender" => "Male"),
    array("name" => "Jane Doe", "age" => 30, "gender" => "Female"),
);

// Print the name and age of the first student
echo $students[0]["name"]; // Output: John Doe
echo ", ";
echo $students[0]["age"]; // Output: 25
?>