<?php

$img = file_get_contents("php://input"); // $_POST didn't work

$target = './stream9.png';

$success = file_put_contents($target, $img);
