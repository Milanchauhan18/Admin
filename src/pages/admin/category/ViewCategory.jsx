import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {Deletecategory, getAllCategory} from "../../../action/CategoryAction";
  
export default function ViewCategory() {  
  const navigate = useNavigate();

  const Add = () => {
    navigate(`/Addcategory/`);
  };

  const { allcategory,loading } = useSelector((state) => state.category);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(getAllCategory());
  }, []);
  if (loading) {
    return (
      <>
        <div className="h-100 w-100 d-flex align-item-center justify-content-center">
          <h2>Plaease Wait...</h2>
        </div>  
      </>
    ); 
  }

  return (
    <>
      <div className="main">
        <div className="heading-panel">
          <Container fluid>
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="page-heading">Manage Category</h2>
              <div>
                <Breadcrumb>
                  <Breadcrumb.Item href="/">Dasboard</Breadcrumb.Item>
                  <Breadcrumb.Item href="/Shop">Shop</Breadcrumb.Item>
                  <Breadcrumb.Item active>Manage Category</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Container>
        </div>

        <Container> 
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <h2>All Category</h2>
                <div className="text-end">
                  <button className="btn btn-sm btn-dark" onClick={Add}>
                    Add
                  </button>
                </div>
              </div>
              <Table striped bordered hover style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Categor Name </th>
                    <th>Action</th>
                  </tr>       
                </thead>
                <tbody>
                  {
                  allcategory.map((obj) => {
                    return (
                      <>
                        <tr>
                          <td>{obj.cat_id}</td> 
                          <td>{obj.catname}</td>
                          <td>
                            <img src={obj.catimage} width={50}></img>
                          </td>
                          <td className="actions button">
                            <button className="btn btn-sm btn-dark"onClick={(e)=>navigate(`/EditCategory/${obj.cat_id}`)}>
                              Edit
                            </button>
                            <button className="btn btn-sm btn-dark ms-1" onClick={(e)=>disptach(Deletecategory(obj.cat_id))}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}


