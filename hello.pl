<?php
$studentID = $_POST['studentID']; // Assuming you receive this data through POST request
$semester = $_POST['semester'];
$marks = $_POST['marks']; // Assuming an array with multiple marks if any

// Create the directory structure if not exists.
if (!file_exists("students/$studentID/")) {
    mkdir("students/$studentID/", 0755, true);
}
$filename = "students/{$studentID}/marks_{$semester}.txt";

// Open the file in append mode
$file = fopen($filename, 'a');
if ($file) {
    // Write student ID and semester followed by marks
    fwrite($file, "$studentID\t{$semester}\t");

    // Write each mark on a new line
    foreach ($marks as $mark) {
        fwrite($file, "$mark\n");
    }

    fclose($file);
} else {
    echo "Error: Unable to open file.";
}
?>
```

2. Creating interfaces for managing directories and files:

Create a new file called `directory_manager.php`. This script will handle the creation and deletion of directories
and files.

```perl
<?php
$studentID = $_POST['studentID']; // Assuming you receive this data through POST request
$action = $_POST['action']; // 'create_directory' or 'delete_file'

if ($action == "create_directory") {
    if (!file_exists("students/$studentID/")) {
        mkdir("students/$studentID/", 0755, true);
        echo "Directory created successfully.";
    } else {
        echo "Directory already exists.";
    }
} elseif ($action == "delete_file") {
    $filename = $_POST['filename']; // Assuming you receive the filename through POST request
    if (file_exists("students/{$studentID}/{$filename}")) {
        unlink("students/{$studentID}/{$filename}");
        echo "File deleted successfully.";
    } else {
        echo "File not found.";
    }
}
?>