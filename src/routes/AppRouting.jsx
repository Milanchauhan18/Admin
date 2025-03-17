import React from 'react';
import Categorylist from '../pages/admin/category/ViewCategory';
import Addcategory from '../pages/admin/category/AddCategory';
import Addproduct from '../pages/admin/product/Addproduct';
import Addsubcategory from '../pages/admin/subcategory/Addsubcategory'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashbord from '../pages/admin/Dasboard';
import Menu from '../component/admin/Menu'; 
import mystore from '../store/Mystore';
import { Provider } from 'react-redux';
import EditCategory from '../pages/admin/category/EditCategory';
import ViewSubcategory from '../pages/admin/subcategory/ViewSubcategory';
import Editsubcategory from '../pages/admin/subcategory/Editsubcategory';
import ViewProduct from '../pages/admin/product/ViewProduct';
import Productdetail from '../pages/admin/product/ProductDetail';
    



const AppRouting = () => {
    return(
        <>    
            <Provider store={mystore}>
                    <BrowserRouter>
                        <Menu/>
                    <Routes>
                        <Route path='/' element={<Dashbord/>}></Route>
                        <Route path='/category' element={<Categorylist/>}></Route>
                        <Route path='/Addcategory' element={<Addcategory/>}></Route>
                        <Route path='/Subcatelist' element={<ViewSubcategory/>}></Route>
                        <Route path='/Addsubcategory' element={<Addsubcategory/>}></Route>
                        <Route path='/Productlist' element={<ViewProduct/>}></Route>
                        <Route path='/Addproduct' element={<Addproduct/>}></Route>
                        <Route path='/Editcategory/:cat_id' element={<EditCategory/>}></Route>
                        <Route path='/EditSubcategory/:id'element={<Editsubcategory/>}></Route>
                        <Route path='/Productdetail/:id'element={<Productdetail/>}></Route>    
                    </Routes>  
                    </BrowserRouter>    
            </Provider> 
        </>
    );
};
export default AppRouting;
