import React from 'react';
import { Table } from 'reactstrap';
import Switch from '../modules/switch';

export default class StatusTable extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.data !== this.props.data;
    }

    onclick=(e)=>{
        let plug='';
        var toState = false;

        this.props.data.forEach(value=>{
            if(value.plug===e.target.name) {
                toState = !value.status;
                plug=e.target.name
            }
        })
        console.log(toState,plug)

        Switch(plug, toState,()=>{
           console.log('ok');
        })

    }

    render() {
        console.log("state"+JSON.stringify(this.props.data));
        console.dir(this.props.data);
          let i=1;
          const items=this.props.data.map(value=>(
              <tr>
                  <th scope="row">{i++}</th>
                  <td>{value.plug}</td>
                  <td> {value.status} </td>
                  <td><button onClick={this.onclick} name={value.plug}  className={'onoff-btn'}> {this.props.status} </button></td>
              </tr>
          ))
        return (
            <Table hover id='StatusTable'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>PLUG</th>
                        <th>START</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>
        );
    }
}
