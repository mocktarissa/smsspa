let btn= document.getElementById('createstudent');

btn.addEventListener('click',createstudent);

 const createRequest= new XMLHttpRequest();
 
 createRequest.addEventListener('readystatechange',()=>{
     if(createRequest.readyState ===4 && createRequest.status===200){
        let name= document.getElementById('nameVal').value;
        let surname= document.getElementById('surnameVal').value;
        let tr = document.createElement('tr');
        tr.innerHTML =`
        <td>
                ?
                </td>
                
                <td>
                ${name}
                </td>
                
                <td>
                ${surname}
                </td>
                <td>
                Empty
                </td>
                `;
                document.getElementById("subfield").appendChild(tr);
                document.getElementById('nameVal').value='';
                document.getElementById('surnameVal').value='';
     }
})



function createstudent(){
 let tr = document.createElement('tr');
 let name= document.getElementById('nameVal').value;
 let surname= document.getElementById('surnameVal').value;
 let params= `name=${name}&surname=${surname}`
 console.log(name,surname)
    createRequest.open('POST',`${APIURL}/create.php`,true);
    createRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
    createRequest.send(params);
}






