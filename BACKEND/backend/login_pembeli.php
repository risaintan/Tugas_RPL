<?php
  include 'db_connect.php';
  //ini register  
  $postdata = file_get_contents("php://input");
    $email = "";
    $password ="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        $password = $request->password;
        
        if($request){
            $query_register = mysqli_query($connect, "SELECT email,password FROM user_pembeli WHERE email='$email' && password='$password'");
            if(mysqli_num_rows($query_register)){
                $result=mysqli_fetch_assoc($query_register);
                $data =array(
                    'message' => "Login Succeed!",
                    'status' => "200",
                    'data' => $result
                );
            }
            
            else{
                $data =array(
                    'message' => "Login Failed, Wrong Username or Password",
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