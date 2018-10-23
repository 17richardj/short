<?php
include 'DBConfig.php';

// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

if ($conn->connect_error) {//if there is something wrong with the connection

 die("Connection failed: " . $conn->connect_error);//emit error
}

$sql = "SELECT * FROM members";//select info from table "members"

$result = $conn->query($sql);

if ($result->num_rows >0) {//if there are table rows and data


 while($row[] = $result->fetch_assoc()) {//create array of data

 $tem = $row;

 $json = json_encode($tem);//turn data into json


 }

} else {
 echo "No Results Found.";//no data in table
}
 echo $json;//print out data
$conn->close();//close connection to database
?>
