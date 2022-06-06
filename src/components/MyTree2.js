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
        axios.get("http://api-dash.grupostra.com/api/v1/user/show-all", configB)
        .then((response) => {
          setData(response.data) 
        })
      }, [])

    useEffect(() => {
        OrgChart.SEARCH_PLACEHOLDER = "Buscar";
        chart = new OrgChart(document.getElementById("tree"), {
            showXScroll: OrgChart.scroll.none,
            showYScroll: OrgChart.scroll.none,
            mouseScrool: OrgChart.action.zoom,
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
      data.map((user, i) => {
        chart
          .add({ id: user?.id, pid: user?.manager_id, name: user?.name, email: user?.email, ramal: user?.extension_number ? "Ramal: " + user?.extension_number : "Sem ramal", img: user?.photo_url })        
        chart.draw(OrgChart.action.init);
      })
    }, [data])

    return (
        <div id="tree" ref={divRef}></div>
    );
}

export default MyTree2