import React from 'react'
import '../css/App.css'
import '../css/component.css'
import PlanBtn from '../component/PlanBtn'
import StatusTable from '../component/StatusTable'
import Socket from '../modules/socket'

export default class RemoteControl extends React.Component{
    state={
        plugs_status:{},
        onPlugs:[],
        offPlugs:[],
    }

    componentDidMount(){
        Socket.onSwitch(this.dataUpdate)
    }

    dataUpdate=(data)=>{
            if(JSON.stringify(this.state.plugs_status) !== JSON.stringify(data)){

                let keys=Object.keys(data)
                let on=[]
                let off=[]
                keys.forEach(value=>{
                    if(data[value]===true)
                        on.push({plug:value, status:true})
                    else
                        off.push({plug:value, status:false})

                })
                this.setState({
                    plugs_status: data,
                    onPlugs:on,
                    offPlugs:off,
                })
            }
    }


    shouldComponentUpdate(nextProps, nextState){
        return nextState.plugs_status !== this.state.plugs_status;
    }

    render(){
        return (
            <main>
                <div id='plan-btn'>
                    <PlanBtn data={this.state.plugs}/>
                </div>
                <div className='box2-wrapper'>
                    <div className='box2-50' >
                        <StatusTable id='StatusTable' data={this.state.onPlugs} status={'on'} />
                    </div>
                    <div className='box2-50'>
                        <StatusTable data={this.state.offPlugs} status={'off'}/>
                    </div>
                </div>
            </main>
        )
    }
}

