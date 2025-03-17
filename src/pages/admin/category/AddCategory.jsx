import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddnewCategory } from '../../../action/CategoryAction';


export default function Addcategory()
{


    const [categoryname,setcategoryname] = useState();
    const [file, setFile] = useState(null);


        const handleFileChange = (event) => {
            setFile(event.target.files[0]);
        };
        
    
    const dispatch = useDispatch();


        const add = (e) =>{
               e.preventDefault();  
            
            var formData = new FormData();
            formData.append("catname",categoryname);
            formData.append("catimage",file );
            dispatch(AddnewCategory(formData));
        };                                    



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
                             <Breadcrumb.Item active>Manage Category</Breadcrumb.Item>
                           </Breadcrumb>
                      </div>
                    </div>
                </div>
                <div className="container">
                <Card>          
                    <Card.Body>
                        <div className='add-form'>
                            <Form mathod="post" onSubmit={add}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='lablename'>Category Name</Form.Label>
                                    <Form.Control className='form-placeholder'value={categoryname} onChange={(e)=>setcategoryname(e.target.value)} type="text" placeholder="Enter Category Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='lablename'>Category Image</Form.Label>
                                    <Form.Control className='form-placeholder' onChange={handleFileChange} type="file" placeholder="Password"/>
                                        <img></img>
                                </Form.Group>
                                <div style={{textAlign:"center"}}>
                                    <Button className="btn btn-sm btn-dark" variant="primary" type="submit">
                                        Submit          
                                    </Button>
                                    <Button className="btn btn-sm btn-dark ms-1" variant="primary" type="submit">
                                        cancel  
                                    </Button>
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