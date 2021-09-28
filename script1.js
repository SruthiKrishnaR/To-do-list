
    var toggleButton = document.getElementsByClassName('toggle-button')[0];
    var navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    });

    window.onload = ()=>{
        
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4 && this.status==200){
                var response = JSON.parse(this.responseText);
                var output="";
                
                
                for(var i=0;i<response.length;i++){
                                    
                        if(response[i].completed == true){
                            output += `<ul style="list-style-type:none;"><li><input type="checkbox" checked disabled >    ${response[i].title} 
                                                        </li><br></ul>`;
                            }   
                        else{
                            output += `<ul style="list-style-type:none; class="list-group"><li><input type="checkbox" id="check" >    ${response[i].title}
                                                        </li></ul><br>`;
                            } 
                }
                
            document.querySelector("#list").innerHTML=output;
                
            
                $(document).ready(function(){
                    $("#list").change(function(){

                        var find = $("#list").find("input[id=check]:checked").length;
                        console.log(find);
                        
                        var myPromise = new Promise((resolve,reject)=>{
                            resolve();
                        });
                        myPromise.then(()=>{
                            if(find==5)
                            alert("Congrats!!! 5 Tasks have been Successfully Completed");
                        });
                    });
                });
            

            }   
        }
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();

    };
    
    
 

    
