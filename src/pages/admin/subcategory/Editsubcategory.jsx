import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategory } from '../../../action/CategoryAction';    
import { Getsinglesubcategory, uapdatesubcategory } from '../../../action/SubcategoryAction';
import { useNavigate, useParams } from 'react-router-dom';
   
export default function Editsubcategory () {

    const [category,setcategory] = useState();
    const [categoryid,setcategoryid] = useState();
    const [subcategoryname,setsubcategoryname] = useState();

    const navigate = useNavigate();
    
    var dispatch = useDispatch();

    const { allcategory,loading } = useSelector((state) => state.category);

    useEffect(()=>{
        dispatch(getAllCategory()); 
    },[])
        
    let {id} = useParams();

    const {singledata} = useSelector((state)=>state.subcategory);


    useEffect(()=>{
        dispatch(Getsinglesubcategory(id));
    },[id]);    
    
    useEffect(()=>{
        if(singledata)
        {
            setcategoryid(singledata.cat_id);     
            setsubcategoryname(singledata.subcatname); 
            
        }
    },[singledata]);

        const update = (e) =>{ 
            e.preventDefault();
            // dispatch(Getsinglesubcategory()); 
            var formData = new FormData();
            formData.append("catid",categoryid);
            formData.append("subcatname",subcategoryname);
            formData.append("id",id); 

            dispatch(uapdatesubcategory(formData));
            navigate("/Subcatelist");
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
                            <Form onSubmit={update}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='lablename'>Category </Form.Label>
                            
                                <select onChange={(e)=>setcategory(e.target.value)} className='form-control'> 
                                    <option>Please select category</option>
                                    {  
                                    
                                        allcategory && allcategory.map((obj)=>{
                                            return(<>
                                                <option selected={ categoryid == obj.cat_id } value={obj.cat_id}>{obj.catname}</option>
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
                                        update  
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