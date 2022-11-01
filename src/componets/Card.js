import React from "react";

const card =({ userinfo }) =>{
   const{name,Description}=userinfo
   return <div>
     <p> {name}</p>(${Description})
    </div>
}
export default card;