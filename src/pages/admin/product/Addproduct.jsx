import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';        
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export default function Addproduct()
{   
    return(
        <>
             <div className='main'>
                <div className='heading-panel'>
                   <div className='container-fluid'>
                      <div className="d-flex align-items-center justify-content-between">
                         <h1 className='page-heading'>Manage Product</h1>
                           <Breadcrumb>
                                 <Breadcrumb.Item href="#">Desboard</Breadcrumb.Item>
                                     <Breadcrumb.Item href="#">
                                     Shop
                                 </Breadcrumb.Item>
                           
                            <Breadcrumb.Item active>Manage Product</Breadcrumb.Item>   
                        

                            </Breadcrumb>
                        </div>
                    </div>
                </div>
                <div className="container">
                <Card>
                    <Card.Body>
                        <div className='add-form'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='lablename'>Category </Form.Label>
                                        <select className='form-control'> 
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                </Form.Group>

                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='lablename'>Sub category</Form.Label>
                                        <select className='form-control'>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </Form.Group>
                            
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='lablename'>Title</Form.Label>
                                    <Form.Control className='form-placeholder' type="text" placeholder="title" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='lablename'>Price</Form.Label>
                                    <Form.Control className='form-placeholder' type="text" placeholder="price" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='lablename'>Image</Form.Label>
                                    <Form.Control className='form-placeholder' type="file" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control className='description-input' as="textarea" rows={3}/>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='lablename'>Is active?</Form.Label>
                                        <select className='form-control description-input'>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </Form.Group>
                    
                                <div style={{textAlign:"center"}}>
                                    <Button className="btn btn-sm btn-dark" type="submit">
                                        Submit
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