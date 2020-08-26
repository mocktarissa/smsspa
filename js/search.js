const search = document.getElementById('search');
const request= new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
    if(request.readyState=== 4){
        let response= JSON.parse(request.responseText);
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
              
            }
        )
        
        
    }
})


search.addEventListener('click',searchKey);

function searchKey(){
 document.getElementById("subfield").innerHTML=null;
    let key= document.getElementById('skey').value;
    console.log(key)
    // let key =1
    request.open('GET',`${APIURL}/search.php?key=${key}`,true);   
    request.send();
}





