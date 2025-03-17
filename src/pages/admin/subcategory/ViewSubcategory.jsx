import Table from 'react-bootstrap/Table'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Deletesubcategory, viewAllsubcategory } from '../../../action/SubcategoryAction';

export default function ViewSubcategory () 
{

        const navigate = useNavigate();



    const calculate = () =>{
        navigate(`/Addsubcategory/`);   
    }
    
    const {allSubcategory} = useSelector(state=>state.subcategory); 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(viewAllsubcategory());
    },[])


    return(
        <>
            
            <div className='main'>  
                <div className="heading-panel">
                   <div className='container-fluid'>
                        <div className="d-flex align-items-center justify-content-between">
                                <h2 className='page-heading'>Manage Sub Category</h2>
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Dasboard</Breadcrumb.Item>
                                    <Breadcrumb.Item href="/Shop">
                                        Shop
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>Sub Category</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                   </div>
                </div>
            </div>    
            <div className="container">
               <Card>
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between   '>
                            <h2>All Sub Category</h2>
                            <button className='btn btn-sm btn-dark' onClick={calculate}>Add</button>
                        </div>
                            <Table striped bordered hover className='mt-3'>
                                    <thead>
                                        <tr>
                                        <th>ID</th>
                                        <th>Category name</th>
                                        <th>Sub category name</th>
                                        <th>Action</th>   
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allSubcategory.map((obj)=>{
                                                return(
                                                    <tr>
                                                    <td>{obj.subcat_id}</td>
                                                    <td>{obj.catname}</td>
                                                    <td>{obj.subcatname }</td>
                                                    <td className='actions button'>
                                                    <button className="btn btn-sm btn-dark" onClick={(e)=>navigate(`/EditSubcategory/${obj.subcat_id}`)}>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-sm btn-dark ms-1" onClick={(e)=>dispatch(Deletesubcategory(obj.subcat_id))}>
                                                        Delete
                                                    </button>
                                                    </td>
                                                    </tr>
                                                )
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

