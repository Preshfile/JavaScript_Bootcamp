<h1>Welcome to My Levenshtein</h1>

<h2>Task</h2>
<p>The task of this project is to implement a Levenshtein distance algorithm in JavaScript. The Levenshtein distance is a metric used to calculate the difference between two strings by counting the minimum number of operations (insertion, deletion, substitution) needed to transform one string into the other.</p>

<h2>Description</h2>
<p>This project provides a JavaScript function called my_levenshtein which takes in two string arguments str1 and str2, and returns the Levenshtein distance between them. The function splits the input strings into arrays of characters, and then filters out the characters that are not present in the other string. It then returns the sum of the lengths of the resulting arrays.</p>

<p>The function assumes that both input strings are non-null, non-empty strings. If the two strings are identical or if one of the strings is an empty string, the Levenshtein distance is 0. If the two strings have different lengths, the Levenshtein distance is -1.</p>

<h2>Installation</h2>
<p>To use this project, simply copy the contents of my_levenshtein.js into your JavaScript file or Node.js application.</p>

<h2>Usage</h2>
<p>To use the my_levenshtein function, call it with two string arguments as follows:</p>

<p>const distance = my_levenshtein("string1", "string2");
console.log(distance);</p>

<p>The output will be the Levenshtein distance between the two input strings.</p>

<h2>The Core Team</h2>
<p>Authored by Precious Oranye.</p>
