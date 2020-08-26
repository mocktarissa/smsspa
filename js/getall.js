
const getrequest= new XMLHttpRequest();
document.getElementById("loading").innerHTML='Loading ....';


getrequest.addEventListener('readystatechange',()=>{
    if(getrequest.readyState=== 1){
        
        
    }
    if(getrequest.readyState=== 4){
        


            let response= JSON.parse(getrequest.responseText);
            response.map(
                (res)=>{
                    var trs= document.createElement('tr');
                    trs.setAttribute('id',res.id);
                    
                    trs.innerHTML= `
                    <td>
                    ${res.id}
                    </td>
                    
                    <td>
                    ${res.name}
                    </td>
                    
                    <td>
                    ${res.surname}
                    </td>
                    <td>
                    <a href='#' onclick="updateuser(${res.id},'${res.name}','${res.surname}');"  class='btn btn-primary'>Guncelle</a>
                    <a href='#' onclick='deleteuser(${res.id});'  class='btn btn-danger'>Sil</a>
                    </td>
                    `;
                    document.getElementById("subfield").appendChild(trs);
                    document.getElementById("loading").innerHTML='';
                  
                }
            )

    
        ;
        
        
        
    }
});
    let key= ''
    console.log(key);
    getrequest.open('GET',`${APIURL}/search.php?key=${key}`,true);   
    getrequest.send();






