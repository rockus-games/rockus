<?php
    $a = array_diff(scandir("../uploads"), array('.', '..'));
    $json = json_encode($a);
    echo $json;
?>