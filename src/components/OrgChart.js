import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './OrgChart.css'

function OrgChart(){

    const [data, setData] = useState()

    useEffect(() =>{
        axios.get("https://pedidos.grupostra.com/api/v1/table/users")
            .then((response) => {
              setData(response.data) 
            })
      }, [])

    return(
        <Tree label={<div className='card-organiz'>
            {data?.filter(user => user?.level === "CEO").map((filtered, i) => ( 
                <>
                <div className="card-img">
                    <img src={filtered?.photo_url} alt="" />
                </div>
                <div className="card-text">
                    <h1>{filtered?.level}</h1>
                    <p>{filtered?.name}</p>
                    <p>Email: {filtered?.email}</p>
                    <p>Ramal: {filtered?.extension_number}</p>
                </div>
                </>
            ))}
            </div>}>
            {data?.filter(user => user?.level === "CEO").map((filtered, i) => (
                <TreeNode key={i} label={<div className='card-organiz'>Child 1</div>}>
                    {data?.filter(user => user?.level === "Colaborador").map((filtered, i) => (
                        <TreeNode key={i} label={<div className='card-organiz'>Child 1</div>}>
                            {data?.filter(user => user?.level === "CEO").map((filtered, i) => (
                                <TreeNode key={i} label={<div className='card-organiz'>Child 1</div>}>
                                    {data?.filter(user => user?.level === "CEO").map((filtered, i) => (
                                        <TreeNode key={i} label={<div className='card-organiz'>Child 1</div>}>
                                        </TreeNode>
                                        
                                    ))}
                                </TreeNode>
                            ))}
                        </TreeNode>
                    ))}
                </TreeNode>
            ))}
        </Tree>
    )
}

export default OrgChart