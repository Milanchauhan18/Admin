import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategory } from '../../../action/CategoryAction';
import { Addallsubcategory } from '../../../action/SubcategoryAction';
   
export default function Addsubcategory () {

    const [category,setcategory] = useState();
    const [subcategoryname,setsubcategoryname] = useState();

    var dispatch = useDispatch();

    const { allcategory,loading } = useSelector((state) => state.category);

    useEffect(()=>{
        dispatch(getAllCategory()); 
    },[])

        const add = (e) =>{
            e.preventDefault();
           
            var formData = new FormData();
            formData.append("catid",category)
            formData.append("subcatname",subcategoryname)
            dispatch(Addallsubcategory(formData));
        }
    return(
           <>
              <div className='main'>
                <div className='heading-panel'>
                   <div className='container-fluid'>
                      <div className="d-flex align-items-center justify-content-between">
                         <h1 className='page-heading'>Manage Category</h1>
                           <Breadcrumb>
                                 <Breadcrumb.Item href="#">Desboard</Breadcrumb.Item>
                                     <Breadcrumb.Item href="#">
                                     Shop
                                 </Breadcrumb.Item>     
                                 <Breadcrumb.Item active>Manage Sub Category</Breadcrumb.Item>   
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
                <div className="container">
                <Card>
                    <Card.Body>
                        <div className='add-form'>
                            <Form onSubmit={add}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='lablename'>Category </Form.Label>
                            
                                <select onChange={(e)=>setcategory(e.target.value)} className='form-control'> 
                                    <option>Please select category</option>
                                    {
                                        allcategory && allcategory.map((obj)=>{
                                            return(<>
                                                <option value={obj.cat_id}>{obj.catname}</option>
                                            </>)
                                        })
                                    }
                                   
                              </select>
                                </Form.Group>

                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='lablename'>Sub Category name</Form.Label>
                                    <Form.Control  value={subcategoryname} onChange={(e)=>setsubcategoryname(e.target.value)} className='form-placeholder' type="text" placeholder="Enter Sub category name " />

                                </Form.Group>

                                <div style={{textAlign:"center"}}>
                                    <button className="btn btn-sm btn-dark" variant="primary" type="submit">
                                        Submit
                                    </button>
                                    <button className="btn btn-sm btn-dark ms-1 " variant="primary" type="submit">
                                        cancel  
                                    </button>
                                </div>
                               
                            </Form>
                        </div>
                    </Card.Body>    
                </Card>
                </div>
           </div>
           </>
    );
}