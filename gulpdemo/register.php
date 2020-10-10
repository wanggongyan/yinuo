<?php
header('"content-type:text;charset="utf-8"');

//var_dump($_POST);
	$responseData = array("code"=>0,"message"=>"");
	$username = $_POST['username'];
	$password = $_POST['password'];

	//对后台接收到的数据判断
	if(!$username){
		$responseData["code"] = 1;
		$responseData["message"]  = "用户名不能为空";
		echo json_encode($responseData);
		exit;
	}


	if(!$password){
		$responseData["code"] = 2;
		$responseData["message"]  = "密码不能为空";
		echo json_encode($responseData);
		exit;
	}

	//连接数据库
	 //1、链接数据库
  $link = mysql_connect("127.0.0.1", "root", "123456");

  //2、判断数据库是否链接成功
  if(!$link){
    $responseData['code'] = 3;
    $responseData['msg'] = "服务器忙";
    echo json_encode($responseData);
    exit;
  }

  //3、设置访问字符集
  mysql_set_charset( "utf8");

  //4、选择数据库
  mysql_select_db("qd2004");

  //5、准备sql语句
  $sql = "SELECT * FROM users WHERE username='{$username}'";

  // echo $sql; //输出一下，看一下sql拼接的对不对
  //6、发送sql语句
  $res = mysql_query( $sql);

  //7、取出一行
  $row = mysql_fetch_assoc($res);
  if($row){
    $responseData['code'] = 4;
    $responseData['msg'] = "用户名已存在";
    echo json_encode($responseData);
    exit;
  }

  $password = md5(md5(md5($password)."qianfeng")."qingdao");

  //注册
  $sql2 = "INSERT INTO users(username,password,createtime) VALUES('{$username}','{$password}',{$createtime})";

  $res = mysql_query($sql2);

  if(!$res){
    $responseData['code'] = 5;
    $responseData['msg'] = "注册失败";
    echo json_encode($responseData);
    exit;
  }

  $responseData['msg'] = "注册成功";
  echo json_encode($responseData);


  //8、关闭数据库
  mysql_close($link);

?>