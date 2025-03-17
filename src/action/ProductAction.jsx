import axios from "axios";

export const ViewAllProduct = () => {
     return async(dispatch)=>{
          var response = await axios.get("https://studiogo.tech/student/shoppingapi/products.php"); 
          if(response.status==200)
          {
               var json = response.data;
               dispatch({"type":"STORE_ALL_PRODUCT","data":{"allproducts":json}});
            
                
          }     
     }  
}; 

export const getsingleproduct = (id) => {
     return async (dispatch)=>{
          var formData = new FormData
          formData.append("id",id); 
          var response = await axios.post("https://studiogo.tech/student/shoppingapi/single_product.php",formData);
         if(response.status=200)
         {
             var json = response.data;  
             dispatch({"type":"SINGLE_DATA","data":json})            
  
         }
     }  
}