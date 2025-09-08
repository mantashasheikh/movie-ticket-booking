
let PostData=()=>{

   let Title =document.querySelector("#title").value
   let Date =document.querySelector("#date").value
   let Time =document.querySelector("#time").value
   let Ticket =document.querySelector("#ticket").value
   let Tickets =document.querySelector("#tickets").value
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
              name:Fname,
              BookingDate:Date,
              time:Time,
              adult:Ticket,
              children:Tickets,
              email:Email,
              firstnameFname,
              lastname:Lname

          }
         )


     })


     location.href="CRUD.html"
     return false

}




 getdata()