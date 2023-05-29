<?php
    $file = $_POST["file"];

    if (!unlink("../uploads/$file")) {
        echo ("$file cannot be deleted due to an error");
    }
    else {
        echo ("$file has been deleted");
    }
?>