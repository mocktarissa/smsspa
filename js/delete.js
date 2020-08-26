//delete using js 

let del = document.getElementById('id');

del.addEventListener('click',deleteuser)

const deleteRequest= new XMLHttpRequest();
deleteRequest.addEventListener('readystatechange',()=>{
     if(deleteRequest.readyState ===4 && deleteRequest.status===200){
        
      }
 })
function deleteuser(id){
    let tr = document.getElementById(id);
    var answer = confirm('Emin misiniz?');
    if (answer){
        let params= `id=${id}`
        deleteRequest.open('GET',`${APIURL}/delete.php?id=${id}?`,true);
        deleteRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
        // deleteRequest.send(params);
        deleteRequest.send();
        var toResetTr = document.getElementById(id);
        toResetTr.innerHTML =``;

    } 
    
            
        
}