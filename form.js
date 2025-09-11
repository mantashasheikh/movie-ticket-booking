 let getdata=async()=>{

    let api="http://localhost:3000/MovieTicketBooking"

   let res=await fetch(api, {method:"GET"} )

   let data=await res.json()

   console.log(data);

   let Show=document.querySelector("#show")
    
    data.map( (e)=>{

        Show.innerHTML+= ` 
        <tr>
           <td> ${e.title} </td>
           <td> ${e.date} </td>
           <td> ${e.time} </td>
           <td> ${e.ticket} </td>
           <td> ${e.ticket*500} </td>
           <td> ${e.email} </td>
           <td> ${e.fname} </td>
           <td> ${e.lname} </td>
           <td onclick="Del('${e.id}')"> Cancel </td> 
           <td onclick="edit('${e.id}')"> Update </td> 
        </tr>
        
        `
    })



 }

 let Del=(id)=>{

        let api=`http://localhost:3000/MovieTicketBooking/${id}`
        fetch(api, {method:"DELETE"} )    

 }



 let PostData=()=>{

   let Name =document.querySelector("#name").value
   let Age =document.querySelector("#age").value
   let Aadhar =document.querySelector("#aadhar").value
   let CheckIn =document.querySelector("#checkin").value
   let CheckOut =document.querySelector("#checkout").value
   let City =document.querySelector("#city").value
   let People =document.querySelector("#people").value

    
   let api="http://localhost:3000/hotel"

   fetch(api, {  

        method:"POST",
         
        header:{
           "Content-type":"application/json"
        },

        body: JSON.stringify( 
          {
              name:Name,
              age:Age,
              aadhar:Aadhar,
              checkIn:CheckIn,
              checkOut:CheckOut,
              city:City,
              people:People,
              price:500

          }
         )
    })


     location.href="CRUD.html"
     return false

}



let edit=async(id)=>{

         let api= http://localhost:3000/hotel/${id}
         
        let res=await fetch(api,{method:"GET"}) 

        let data=await res.json()
        
        console.log(data);
        


   document.querySelector("#formshow").innerHTML= `
   
           
        Enter Name <input type="text" id="upname" value="${data.name}"> <br> <br>

        
        Enter age <input type="text" id="upage" value="${data.age}" > <br> <br>

       
        Enter Adhar <input type="text" id="upaadhar" value="${data.aadhar}" > <br> <br>

       
        Enter Check-In <input type="date" id="upcheckin" value="${data.checkIn}" > <br> <br>

        <p id="errcpass"></p>
        Enter Check-Out <input type="date" id="upcheckout" value="${data.checkOut}" > <br> <br>
        
        Select City  <select id="upcity">
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Ujjain">Ujjain</option>
          <option value="Kalapani">Kalapani</option>
           <option value="Pakistan">Pakistan</option>


        </select> <br> <br>

        Enter people <input type="text" id="uppeople" value="${data.people}"> <br> <br>


        <input type="submit" value="Update-Now" onclick="return UpdateData('${data.id}')">
   
   
   `

}



let UpdateData=(id)=>{

    let Name =document.querySelector("#upname").value
   let Age =document.querySelector("#upage").value
   let Aadhar =document.querySelector("#upaadhar").value
   let CheckIn =document.querySelector("#upcheckin").value
   let CheckOut =document.querySelector("#upcheckout").value
   let City =document.querySelector("#upcity").value
   let People =document.querySelector("#uppeople").value

    
   let api=http://localhost:3000/hotel/${id}

   fetch(api, {  

        method:"PUT",
         
        header:{
           "Content-type":"application/json"
        },

        body: JSON.stringify( 
          {
              name:Name,
              age:Age,
              aadhar:Aadhar,
              checkIn:CheckIn,
              checkOut:CheckOut,
              city:City,
              people:People,
              price:500
          }
         )


     })


     location.href="CRUD.html"
     return false


}





  








