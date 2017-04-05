 <?php
 	 $servername = "127.0.0.1";
 	 $username = "root";
 	 $password = "";
 	 $dbname = "test";
 	 
 	 $conn = new mysqli($servername, $username, $password, $dbname);
 	 
 	 if($conn->connect_error){
 	 	die("Connection failed:".$conn->connect_error);
 	 }
 	 
 	 $sql = "SELECT id, firstname, lastname FROM MyGuests";
 	 $result = $conn->query($sql);
	 
	 if($result->num_rows > 0){
		while( $row = $result->fetch_assoc() ){
			echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"] . "<br>\n";
		} 
	}else {
			echo "0 result";
	 }
	 
	 $conn->close();
 ?>