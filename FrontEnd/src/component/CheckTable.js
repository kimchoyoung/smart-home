import React from 'react';
import { Table } from 'reactstrap';

export default class CheckTable extends React.Component {
    render() {
        let num=1;
        const items=this.props.data.map(value=>(
            <tr>
                <td>{num++}</td>
                <td>PLUG{value.x}</td>
                <td>{value.y}</td>
            </tr>

        ))
        return (
            <Table hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>PLUG</th>
                    <th>kW</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </Table>
        );
    }
}
