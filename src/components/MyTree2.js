import React, { Component, useEffect, useRef, useState } from 'react';
import OrgChart from '@balkangraph/orgchart.js';
import { AuthContext } from '../Auth' 
import { useContext } from 'react'; 
import axios from 'axios';

function MyTree2() {

    const divRef = useRef(null);
    const { token } = useContext(AuthContext);
    const [data, setData] = useState([]);
    var chart;
  
    const configB = {
        headers: { Authorization: `Bearer ${token}` }
    }

    useEffect(() =>{
        axios.get("https://pedidos.grupostra.com/api/v1/user/show-all", configB)
        .then((response) => {
          setData(response.data) 
        })
      }, [])

      function getPid(level){
        console.log(level)
        let pid;

        if(level === "CEO"){
          pid = 1
        }

        if(level === "Gerente"){
          pid = 2
        }

        if(level === "Supervisor"){
          pid = 3
        }

        if(level === "Colaborador"){
          pid = 4
        }

        if(level === "Estagiario"){
          pid = 5
        }
        console.log(pid)

        return pid
      }

    useEffect(() => {
        chart = new OrgChart(document.getElementById("tree"), {
            mouseScrool: OrgChart.action.none,
            template: "rony",
            //scaleInitial:OrgChart.match.width,
            nodeBinding: {
                field_0: "name",
                field_1: "email",
                field_2: "ramal",
                img_0: "img"
            },  
          });
    }, [data])

    useEffect(() => {
      data.slice(1).map((user, i) => {
        chart
          .add({ id: user?.id, pid: user?.manager_id, name: user?.name, email: user?.email, ramal: "Ramal: " + user?.extension_number, img: user?.photo_url })        
        chart.draw(OrgChart.action.init);
      })
    }, [data])

    return (
        <div id="tree" ref={divRef}></div>
    );
}

export default MyTree2