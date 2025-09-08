let getdata=async()=>{
    let api="http://localhost:3000/MovieTicketBooking"
    let res = await fetch(api, {method:"GET"})
    let data = await res.json()


    let show = document.querySelector("#show")
    data.map((e)=>{
    show.innerHTML +=`
    <tr>
        <td>${e.title}</td>
        <td>${e.date}</td>
        <td>${e.time}</td>
        <td>${e.ticket}</td>
        <td>${e.price}</td>
        <td>${e.email}</td>
        <td>${e.fname}</td>
        <td>${e.lname}</td>
    </tr>
    `
})
}




let PostData=()=>{

   let Title =document.querySelector("#title").value
   let Date =document.querySelector("#date").value
   let Time =document.querySelector("#time").value
   let Ticket =document.querySelector("#ticket").value
   let Price=document.querySelector("#price").value
   let Email =document.querySelector("#email").value
   let Fname =document.querySelector("#fname").value
   let Lname=document.querySelector("#lname").value

    
   let api="http://localhost:3000/movieTicketBooking"

   fetch(api, {  

        method:"POST",
         
        header:{
           "Content-type":"application/json"
        },

        body: JSON.stringify( 
          {
              name:Title,
              Booking_Date:Date,
              time:Time,
              No_of_tickets:Ticket,
              Total_price:Price,
              email:Email,
              first_name:Fname,
              last_name:Lname


          }
         )


     })


     location.href="CRUD.html"
     return false

}




 getdata()