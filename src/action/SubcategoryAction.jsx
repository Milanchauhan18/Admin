import axios from "axios"   
import { useNavigate } from "react-router-dom";

import thunk from "redux-thunk"

export const viewAllsubcategory = () =>{
    return async (dispatch)=>{
        // axios.get("https://studiogo.tech/student/shoppingapi/subcategory.php").then(())
        var response = await axios.get("https://studiogo.tech/student/shoppingapi/subcategory.php");
        if(response.status=200)
        {
            var json = response.data; 
            var allSubcategory = response.data
            dispatch({"type":"STORE_ALL_SUBCATEGORY","data":{"allSubcategory":allSubcategory}});
                            

        }
    }   
}

export const Addallsubcategory = (formData) =>{
    return async (dispatch)=>{
         var response = await axios.post("https://studiogo.tech/student/shoppingapi/add_subcategory.php",formData);
        if(response.status=200)
        {
            var json = response.data; 
           if(json["status"]="yes" )
           {
            var message = json["message"];
            alert(message)
            }
           else
           {
             var message = json["message"];
           }
                            

        }
    }   
}

export const Deletesubcategory = (subcat_id) =>{
    return async (dispatch)=>{
        var formData = new FormData
        formData.append("id",subcat_id); 
        var response = await axios.post("https://studiogo.tech/student/shoppingapi/delete_subcategory.php",formData);
       if(response.status=200)
       {
           var json = response.data; 
          if(json["status"]="yes" )
          {
           var message = json["message"];
           alert(message)
           dispatch(viewAllsubcategory());
           }
          else
          {
            var message = json["message"];
          }
                           

       }
   }  
}

export const Getsinglesubcategory = (id) =>{
    return async (dispatch)=>{
        var formData = new FormData
        formData.append("id",id); 
        var response = await axios.post(" https://studiogo.tech/student/shoppingapi/single_subcategory.php",formData);
       if(response.status=200)
       {
           var json = response.data; 
            dispatch({"type":"SINGLE_DATA","data":{"data":json["data"]}});               

       }
   }    
}

export const uapdatesubcategory = (formData) =>{
    
    return async (dispatch)=>{
        var response = await axios.post("https://studiogo.tech/student/shoppingapi/update_subcategory.php",formData);
       if(response.status=200)
       {
           var json = response.data; 
          if(json["status"]="yes" )
          {
           var message = json["message"];
           }
          else
          {
            var message = json["message"];
          }
                           

       }
   }   
}