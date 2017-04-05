<?php
	$cars = array
	(
		array("Volvo",100,96),
		array("BMW",60,59),
		array("Toyota",110,100)
	);
	
	foreach ($cars as $value)
	{
		foreach($value as $car)
		{			
			echo $car . "<br>\n";
		}
	}

	date_default_timezone_set('UTC');

	$file=fopen("welcome.txt","r") or exit("Unable to open file!");
	
	while(!feof($file))
	{
		echo fgets($file). "<br>\n";
	}
	
	fclose($file);
?>