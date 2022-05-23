import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './OrgChartHome.css'
import OrgChart from './mytree'

function OrgChartHome(){

  const [data, setData] = useState()
  const [rendered, setRendered] = useState()

  var data2 = [
    { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 2, pid: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 3, pid: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 4, pid: 2, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 5, pid: 2, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 6, pid: 2, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 7, pid: 3, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 8, pid: 4, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
  ]

  useEffect(() =>{
    axios.get("https://pedidos.grupostra.com/api/v1/table/users")
    .then((response) => {
      setData(response.data) 
    })
  }, [])

  useEffect(() => {
    data?.map((user, i) => 
      data2.push(
        {
          id: user?.id, pid: 1, name: user?.name, title: user?.email, ramal: user?.extensio_number, img: user?.photo_url
        }
      )
    )
    setRendered(<OrgChart nodes={data2} />)
    console.log(rendered)
  }, [data])

  /* useEffect(() => {
    
  }, []) */

  return(
    <div style={{height: '100%'}}>
      {rendered}
    </div>
  )
}

export default OrgChartHome