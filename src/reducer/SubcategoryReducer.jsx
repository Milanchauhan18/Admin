const inititalstate = { 
    allSubcategory:[],
    loading:true,
    singledata:null,
    status:false
};


const SubcategoryReducer = (state=inititalstate,action)=>{
    switch(action.type)
    {
        case "STORE_ALL_SUBCATEGORY":
            return{
                ...state,
                    allSubcategory: action.data.allSubcategory
            };
        case "SINGLE_DATA":
            return{
                ...state,
                singledata: action.data.data
            };
        
        default:
            return state;

    }
}
export default SubcategoryReducer;  