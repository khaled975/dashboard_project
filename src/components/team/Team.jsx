import './team.css'
import { Button, Col, Row, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/slices/jobSlice";
import { Link } from 'react-router-dom';
const { Column } = Table;
const Team = () => {
  const jobs = useSelector((state) => {
    return state.jobs
  });
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchJobs());
      console.log(jobs); 
  }, []); 
  return ( 
    <>
    {
       jobs.map((job)=>{
            return(
                <p>{job.name}</p>
            )
        })
    }


    
      {/* <section className="team-sec">
      <div className="container p-3">
            <Link to='add' className="btn btn-success">Add Product</Link>
           <table className=" table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job)=>{
                            return(
                                    <tr key={job.id}>
                                    <th scope="row">{job.id}</th>
                                    <td>{job.name}</td>
                                    <td className="td-desc">{job.department_name}</td>
                                    <td>{job.department_id}</td>
                                    <td>
                                        <button className="btn btn-danger" >Delete</button>
                                        <Link to={`${job.id}`} className="btn btn-info">View</Link>
                                        <Link  className="btn btn-warning">Update</Link>
                                    </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
           </div> */}

           {/* ==================== */}

        {/* <Row justify={'center'}>
          <Col className='box'>
            <Table dataSource={jobs}>
              <Column title="First Name" dataIndex="name" key="id" />
              <Column title="Last Name" dataIndex="department_name" key="id" />
              <Column title="Age" dataIndex="id" key="id" />
              <Column title="Actions" key="action"
                render={(_, record) => (
                    <Space size="middle">
                      <Button type="primary" className='view'><Link to={`:${}`}>view</Link></Button>
                      <Button className='update'>Update</Button>
                      <Button className='delete' danger>Delete</Button>
                    </Space>
                  )}
              
              />
            </Table>
          </Col>
        </Row> */}
      {/* </section> */}
    </>
  );
};

export default Team;
