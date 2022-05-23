import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';

export default class extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.chart = new OrgChart (this.divRef.current , {
            template: "rony",
            nodes: this.props.nodes,
            

            nodeBinding: {
                field_0: "name",
                field_1: "email",
                field_2: "ramal",
                img_0: "img"

            }
        });
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}