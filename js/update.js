const updateRequest= new XMLHttpRequest();
updateRequest.addEventListener('readystatechange',()=>{
     if(updateRequest.readyState ===4 && updateRequest.status===200){
        
        
      }
 })


function updateuser(id,name,surname){
    

  let tr = document.getElementById(id); 
  tr.innerHTML =`
  <td>
  <input type='text' name='name' value='${id}' class='form-control' readonly '/>
  </td> 

  <td>
  <input type='text' name='name' value='${name}' class='form-control' id='updateNameId${id}'/>
  </td> 

  <td>
  <input type='text' name='name' value='${surname}' class='form-control' id='updateSurnameId${id}' />
  </td>
        
          <td>
        <a href='#' onclick="updatestudent(${id});"  class='btn btn-danger' id="updatebtn${id}">KAYDET</a>
        <a href='#' onclick='cancelupdate(${id},"${name}","${surname}");'  class='btn btn-secondary'>IPTAL</a>
          </td>
          `;

          let kaydet = document.getElementById(`updatebtn${id}`);
          kaydet.addEventListener('click',()=>{
            let tr = document.createElement('tr');
            let name= document.getElementById(`updateNameId${id}`).value;
            let surname= document.getElementById(`updateSurnameId${id}`).value;
            let params= `name=${name}&surname=${surname}&id=${id}`
            console.log(name,surname)
            updateRequest.open('POST',`${APIURL}/update.php`,true);
            updateRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
            updateRequest.send(params);

      
            var toResetTr = document.getElementById(id);

            toResetTr.innerHTML =` <td>
            ${id}
            </td>
            
            <td>
            ${name}
            </td>
            
            <td>
            ${surname}
            </td>
            <td>
            <a href='#' onclick="updateuser(${id},'${name}','${surname}');"  class='btn btn-primary'>Guncelle</a>
            <a href='#' onclick='deleteuser(${id});'  class='btn btn-danger'>IPTAL</a>
            </td>
            `;

            
          })
}



function updatestudent(id){
    
}

function cancelupdate(id,name,surname){
  var toResetTr = document.getElementById(id);

            toResetTr.innerHTML =` <td>
            ${id}
            </td>
            
            <td>
            ${name}
            </td>
            
            <td>
            ${surname}
            </td>
            <td>
            <a href='#' onclick="updateuser(${id},'${name}','${surname}');"  class='btn btn-primary'>Guncelle</a>
            <a href='#' onclick='deleteuser(${id});'  class='btn btn-danger'>Sil</a>
            </td>
            `;
}
function resetFormAfterUpdate(id){

}





