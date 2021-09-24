$(document).ready(function(){

    $('.center').removeClass('hidden');
    $('.center').slideDown(1000);

});

        var submit = document.getElementById("submit");

        function validate(f1,f2){
            if(f1()&&f2()){
                return true;
            }else{
                alert("Enter Valid Details!!");
                return false;
            }
        }
        
            var name = document.getElementById("name");
            var log = document.getElementById("value");
            log.textContent="";

           function valName(){
                log.textContent="";
                var name = document.getElementById("name");
                let content =  name.value;
                if(content == "admin"){
                   return true;
                }else{
                    log.textContent ="Invalid Username";
                    return false;
                }
            }

            var pwd = document.getElementById("pwd");
            var log1 = document.getElementById("pass");
            log1.textContent="";
            
            function valPwd(){
                log1.textContent="";
                let content1 =  pwd.value;
                if(content1 == "12345"){
                    return true;
                }else{
                    log1.textContent ="Invalid Password";
                    return false;
                }
            }
        
        

    
