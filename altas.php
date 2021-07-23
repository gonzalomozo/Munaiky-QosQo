<?php
include("conexion.php");

$Nombres=$_POST["Nombres"];
$Apellidos=$_POST["Apellidos"];
$Correo=$_POST["Correo"];
$Telefono=$_POST["Telefono"];
$query="INSERT INTO Usuario (Nombres,Apellidos,Correo,Telefono) VALUES('$Nombres','$Apellidos','$Correo','$Telefono')";
$res=sqlsrv_prepare($con,$query);


if (sqlsrv_execute($res)){
echo "<a href='index.html'>DatosIngresadosCorrectamente</a>";
}else{
echo "error al insertar los datos";
}

?>