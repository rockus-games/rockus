<?php
if(isset($_GET['apk'])) { header('Content-Disposition: attachment; filename="first_aid.apk"'); 
exit(file_get_contents('first_aid.apk')); }
header("Location: https://rockus.su/portfolio/assets/apk/first_aid.apk"); 
exit();
?>