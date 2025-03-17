import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ViewAllProduct } from '../../../action/ProductAction';


export default function ViewProduct ()
{       

        const navigate = useNavigate();

        const calculate = () =>{ 
            navigate(`/Addproduct/`);
        }
 
        const {allProducts} = useSelector(state=>state.product);
        console.log(allProducts);

        const dispatch = useDispatch();

        useEffect(()=>{         
            dispatch(ViewAllProduct());
        },[]);
        
        const title = (id) =>{
            navigate(`/Productdetail/${id}`);
        }




    return(
        <>
              <div className='main'> 
                <div className="heading-panel">
                   <div className='container-fluid'>
                        <div className="d-flex align-items-center justify-content-between">
                            <h2 className='page-heading'>Manage Product</h2>
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Dasboard</Breadcrumb.Item>
                                    <Breadcrumb.Item href="/Shop">
                                        Shop
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>Product</Breadcrumb.Item>
                                </Breadcrumb>
                        </div>
                   </div>
                </div>
            </div>
            <div className="container">
               <Card>
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h2>All Product</h2>
                            <button className='btn btn-sm btn-dark' onClick={calculate}>Add</button>
                        </div>
                               <Table striped bordered hover className='mt-3'>
                                    <thead>
                                        <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Subcategoryname</th>
                                        <th>Price</th>
                                        <th>Is Available</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allProducts.map((obj)=>{
                                                   return(<>
                                                           <tr>
                                                               {/* <img> */}
                                                                  <td> <img src={obj.img1} style={{height:"10d%", width:"10%"}}></img></td>
                                                                {/* </img> */}
                                                                <td onClick={(e)=>title(obj.product_id)}>{obj.title}</td>
                                                                <td>{obj.subcatname}</td>
                                                                <td>{obj.price}</td>    
                                                                <td>{obj.isavailable}</td>
                                                            </tr>
                                                        </>)
                                            })
                                        }
                                    </tbody>
                                </Table>
                    </Card.Body>
               </Card>  
            </div> 
        </>
    );
}   