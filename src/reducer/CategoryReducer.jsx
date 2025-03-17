const inititalstate = {
    allcategory:[],
    loading:true,    
    singledata:{}
};
    


const CategoryReducer = (state=inititalstate,action)=>{
    switch(action.type) 
    {
        case "LOADING_STAT":
        return {    
            ...state,               
            loading:true
        };
        case "LOADING_STOP":
            return{
                ...state,
                loading:false
            }
        case "SINGLE_DATA":
             return{
                ...state,
                singledata:action.data.data,
                loading:false
             }                     
        case "STORE_ALL_CATEGORY":
            return{ 
                
                ...state,
                allcategory:action.data.data,
                loading:false
                }
        default:
            return state;
    }
}

export default CategoryReducer;