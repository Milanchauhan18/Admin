import { useDispatch, useSelector } from "react-redux"
import { getsingleproduct } from "../../../action/ProductAction";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';      
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Productdetail() {
    
    const dispatch = useDispatch();

    let {id} = useParams();

    const{singledata} = useSelector((state)=>state.product)

    useEffect(()=>{
        dispatch(getsingleproduct(id));
    },[id])

    if(!singledata)
    {
        return (<>
            <h1>Please wait...</h1>
        </>);
    }

    

    return(
        <>
    

    <div className="container">
    <div class="card mt-5"              >
  <div class="card-body">
  <div className="row">
          <div className="col-6">
              <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="image is not found"></img>

              <div className="row mt-2 ms-2">
                 <div className="col-4">
                 <img className="img-fluid"  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="this is image"></img>
                 </div>
                 <div className="col-4">
                 <img className="img-fluid"  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="this is image"></img>
                 </div> 
                 <div className="col-4">
                 <img className="img-fluid"  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="this is image"></img>
                 </div>
              </div>
          </div>
          <div className="col-6">
              <div className="P_detail">
                <h1 className="Product-detail">Product Detail</h1>
                  <div className="sub-heading">
                      <h2>Product_id:{singledata.product_id}</h2>
                      <h2>subcat_id:{singledata.subcat_id}</h2> 
                      <h2>Title:{singledata.title}</h2>
                      <h2>Price:{singledata.price}</h2>                     
                      <h2>Isavailable:{singledata.isavailable}</h2> 
                  </div>
              </div>
          </div>
        </div>
        <div className="tab mt-4"> 
            <div className="card c-width  customtab">   
              <Tabs
                defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="description" title="description" className="heading">
                    {singledata.description}
                  </Tab>
                  <Tab eventKey="speccifications" title="speccifications">
                    {singledata.speccifications}
                 </Tab>  
 


            </Tabs>   
            </div>
        </div>
  
  </div>
</div>  




        
    </div>
  
     </>
    )
}       