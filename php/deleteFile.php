<?php

$file = ".." . $_POST["filename"];

// Use unlink() function to delete a file
if (!unlink($file)) {
    echo ("$file cannot be deleted due to an error");
} else {
    echo ("$file has been deleted");
}
