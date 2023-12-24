<?php

// Get the data from the POST request
$data = $_POST;

// Save the data to a file
$fileName = htmlspecialchars($_GET["name"]);

echo $fileName;

$file = fopen($fileName . ".txt", "w");


foreach ($data as $key => $value) {
    fwrite($file, $value . "\n");
}
fclose($file);

echo "Data saved to file successfully";


?>