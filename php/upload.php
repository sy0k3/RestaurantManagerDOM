<?php
if (isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $targetDir = 'C:\xampp\htdocs\RestaurantManagerDOM\js\data\backup/';
    $targetFile = $targetDir . basename($file['name']);

    if (move_uploaded_file($file['tmp_name'], $targetFile)) {
        echo "El archivo JSON se ha subido correctamente.";
    } else {
        echo "Ha habido un error al subir el archivo JSON.";
    }
} else {
    echo "No se ha recibido ningún archivo JSON.";
}
