
<html>
    <head>
        <link rel="stylesheet" type="text/css" media="screen" href="css/materialize.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/animated.min.css">
    </head>
    <body class="center-align valign-wrapper">
        <?php
            if (isset($_REQUEST['contact-email']))  {
                $admin_email = "sesa.uok@gmail.com";
                $name = $_REQUEST['contact-name'];
                $email = $_REQUEST['contact-email'];
                $subject = "[RealHack] Message : " . $name;
                $message ="\n\nNew Message From " . $name . "[". $email . "]\n\n" . $_REQUEST['contact-message'];
                
                if(mail($admin_email, $subject, $message, "From:" . $email)){
                    echo "<h1 class='animated flipInX'>Thank you for contacting us!</h1>";
                }else{
                    echo "<h1 class='animated flipInX'>Oops! Something went wrong. Please contact us via Facebook.</h1>";
                }
            }else{
                echo "<h1 class='animated flipInX'>Oops! Something went wrong. Please contact us via Facebook.</h1>";
            }
            header("Refresh:5; URL=http://realhack.lk");
            exit();
        ?>
    </body>
</html>

