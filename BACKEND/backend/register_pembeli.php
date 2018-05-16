<?php
  include 'db_connect.php';
  //ini register  
  $postdata = file_get_contents("php://input");
    $email = "";
    $password ="";
    $nama ="";
    $telepon ="";
    $username ="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        $password = $request->password;
        $nama = $request->nama;
        $telepon = $request->telepon;
        $username = $request->username;
        
        if($request){
            $query_register = mysqli_query($connect, "INSERT INTO user_pembeli(email,password,nama,telepon,username) VALUE ('$email','$password','$nama','$telepon','$username') ");
            if($query_register){
                $data =array(
                    'message' => "Success!",
                    'status' => "200"
                );
            }
            else{
                $data =array(
                    'message' => "gagal bos!",
                    'status' => "401"
                );
            }
        }

        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }
        echo json_encode($data);
    }
?>