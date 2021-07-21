<?php
$servername="DESKTOP-BLPUJMI\SQLEXPRESS";
$conexion=array("Database"=>"Historiainador",
"UID"=>"pancho1",
"PWD"=>"123456789",
"CharacterSet"=>"UTF-8");
$con=sqlsrv_connect($servername,$conexion);
if($con){
echo "<h1 ><font color='green'>conexion exitosa</font><h1>";
}else{
    echo "fallo en la conexion";
}

?>