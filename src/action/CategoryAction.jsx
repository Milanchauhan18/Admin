import axios from "axios";

export const getAllCategory = () => {
    return async (dispatch)=>{

            dispatch({"type":"LOADING_STAT"});      
            var response = await axios.get("https://studiogo.tech/student/shoppingapi/category.php")
            if(response.status==200)
            {
                var json = response.data;
                dispatch({"type":"STORE_ALL_CATEGORY","data":{"data":json}});
            }
    }

}

export const AddnewCategory = (formData) => {   
    return async (dispatch)=>{

        dispatch({"type":"LOADING_STAT"});      
        var response = await axios.post("https://studiogo.tech/student/shoppingapi/add_category.php",formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        });
        if(response.status==200)
        {
            var json = response.data;   
            if(json["status"]=="yes")
            {
                var message = json["message"];
                alert(message);
            }
            else    
            {
                var message = json["message"];  
                alert(message);
                dispatch({"type":"LOADING_STOP"});
            }
        }
}
}

export const Deletecategory = (cat_id) => {
    return async (dispatch)=>{


        var formData = new FormData();
        formData.append("id",cat_id);
        dispatch({"type":"LOADING_STAT"});       
        var response = await axios.post("https://studiogo.tech/student/shoppingapi/delete_category.php",formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        });
        if(response.status==200)
        {
            var json = response.data;   
            if(json["status"]=="yes")
            {
                var message = json["message"];
                dispatch(getAllCategory());
                alert(message);
            }                                                       
            else    
            {
                var message = json["message"];  
                alert(message);
                dispatch({"type":"LOADING_STOP"});
            }
        }
}
};

export const getsinglecategory = (cat_id)=>{
    return async (dispatch)=>{
        var formData = new FormData();
        formData.append("id",cat_id);
        dispatch({"type":"LOADING_STAT"});       
        var response = await axios.post("https://studiogo.tech/student/shoppingapi/single_category.php",formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        });
        if(response.status==200)
        {
            
            var json = response.data;   
            console.log(json);
            dispatch({"type":"SINGLE_DATA","data":{"data":json["data"]}});
     
    
        }
    }
}; 

export const Updatecategory = (formData) =>{
    return async (dispatch)=>{

        dispatch({"type":"LOADING_STAT"});      
        var response = await axios.post("https://studiogo.tech/student/shoppingapi/update_category.php",formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        });
        if(response.status==200)
        {
            var json = response.data;   
            if(json["status"]=="yes")
            {
                var message = json["message"];
            } 
            else    
            {
                var message = json["message"];  
                alert(message);
                dispatch({"type":"LOADING_STOP"});
            }
        }
}    
}