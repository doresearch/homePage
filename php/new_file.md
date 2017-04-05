###Welcome to use MarkDown
   $mysql_server_name="127.0.0.1";
    $mysql_username="root";
    $mysql_password="";
    $mysql_database="test";
    $conn=mysql_connect($mysql_server_name, $mysql_username,$mysql_password);
    $strsql="SELECT * FROM `school`";
    
    $result=mysql_db_query($mysql_database, $strsql, $conn);
    
    $row=mysql_fetch_row($result);
    
    
	
	echo "</b><tr></b>";
    for ($i=0; $i<mysql_num_fields($result); $i++)
    {
      echo '<td bgcolor="#000F00"><b>'.
      mysql_field_name($result, $i);
      echo "</b></td></b>";
    }
    echo "</tr></b>";
    // 定位到第一条记录
    mysql_data_seek($result, 0);
    // 循环取出记录
    while ($row=mysql_fetch_row($result))
    {
      echo "<tr></b>";
      for ($i=0; $i<mysql_num_fields($result); $i++ ){
        echo '<td bgcolor="#00FF00">';
        echo $row[$i];
        echo '</td>';
      }
      echo "</tr></b>";
    }
   
    echo "</table></b>";
    echo "</font>";
    // 释放资源
    mysql_free_result($result);
    // 关闭连接
    mysql_close($conn);  