const inititalstate = {
    allProducts : [],
    singledata : null,
};

const ProductReducer = (state=inititalstate,action) => {
    switch(action.type)
    {
        case "STORE_ALL_PRODUCT":
            return {
                ...state,
                allProducts:action.data.allproducts 
            }     
            case "SINGLE_DATA":
                return {
                    ...state,
                    singledata:action.data.data 
                }           
          default:
            return state;
    }
}
export default ProductReducer;

