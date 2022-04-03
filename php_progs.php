<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel = "stylesheet" href = "style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>
<body class="bg-primary">
    <div class="container">
            <div class="navbar">
                <ul>
                    <li><a href="index.html" class="navs">HOME</a></li>
                    <li><a href="cv.html" class="navs">CV</a></li>
                    <li><a href="programs.html" class="navs">PROGRAMS</a></li>
                    <li><a href="#" class="navs">PHP</a></li>
                </ul>
            </div>
    </div>
    <div class="php_div1">
        <p class="php_fib">Print the first 10 elements of the Fibonacci Sequence!</p>
    </div>    
    <div class="php_fib_color">
        <p class="php_print">
        <?php 
            $x = 0;    
            $y = 1; 
            
            echo $x.", ";
            echo $y.", ";

            for($i=0;$i<=7;$i++)    
            {    
                $z = $x + $y;    
                echo $z.", ";         
                $x=$y;       
                $y=$z;     
            }   
        ?>
        </p>
    </div>
    <div class="php_fact">
        <p class="php_fact_text">Print the factorial of 5!</p>   
    </div>
    <div class="php_fact">
        <p class="php_fact_text">
            <?php
                $five = 5;
                
                for($i=4;$i>0;$i--){
                    $five = $five * $i;
                }
                echo $five;
            ?>
        </p>
    </div>