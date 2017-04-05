<?php
//	$file = fopen('welcome.txt','r+') or exit("file is not exit");
//	echo fwrite($file,"Hello World. Testing!");
//
//	while(!feof($file)){
//		echo "\n<br/>".fgets($file);
//	}
	
//	fclose($file);
//	echo $file;
 	// $path = "welcome.txt";

 	//Show filename with file extension
 	// echo "\n<br/>".basename($path)."我不知道这个是干嘛的";

 	//Show filename without file extension
 	// echo "\n<br/>".dirname($path)."\n";
 	//返回filesize
 	// echo "\n".filesize('welcome.txt')."\n"
// 	$a = array (1, 2, array ("a", "b", "c"));
//	$a = 50;
//	$b = 90;
//	var_dump ($a);
	$x = array("a" => "red", "b" => "green"); 
	$y = array("c" => "blue", "d" => "yellow"); 
	$z = $x + $y; // $x 和 $y 数组合并
//	var_dump($x);
//	var_dump($y);
//	var_dump($z);
	echo count($z);
?>