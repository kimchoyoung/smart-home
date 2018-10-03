import React from 'react'
import '../css/component.css'
import request from 'superagent'

export default class PlanBtn extends React.Component{
    state={ // 초기화는 현재 상태로예여함.
        data:[]
    }


    shouldComponentUpdate(nextProps, nextState){
        return nextState.data !== this.state.data;
    }

    componentDidMount(){ // mobius.js에서 현재 상태를 바로 받아와야하구, data set해줘야하구
        request
            .get(global.url+'/remotecontrol/soon')
            .end((err,res)=>{
                if(err) console.log(err);
                console.log(res.body);
                this.setState({
                    data:res.body,
                })
            })
    }

/*
    cancelScheduling=()=>{
        let exam={plug:'plug1', predicted:true, after:100} //100초
        let min=exam/60;
        this.setState({
            data: data.map(
                value => min === value.time ?
                    { ...value, ...exam.plug, ...exam.predicted}
                    : value
            )
        })
    }
*/
    removePlan=(e)=>{
        console.log(e.target)
        /*request
            .get(url+'/cancel')
            .query({value:'plug3'}) // 친구 OFF 요청
            .end((err,res)=>{
                if(err) console.log(err);
                this.setState({
                    data: res.body,
                })
            })
        */
    }

    render(){
        const list = this.state.data.map(
            btn => (<button onClick={this.removePlan} className={`${btn.predicted?'button-reveal':'button-hidden'}`}>{btn.plugName}</button>)
        )
        return (
            <div id='plan-contain'>
                <div className='plan'>
                    {list}
                </div>
            </div>
        )
    }
}
