import React from 'react'
import '../css/App.css'
import '../css/component.css'
import Line from '../component/chart/Line'
import Donut from '../component/chart/Donut'
import HalfDonut from '../component/chart/HalfDonut'

class Dashboard extends React.Component{

    render(){
        return(
            <main>
                <div id='dashboard-wrapper'>
                    <div id='home-button-group'>
                        <button className='btn'>Today <HalfDonut angle={120} width={700}/></button>
                        <button className='btn'>LastMonth <HalfDonut angle={70} width={700}/></button>
                        <button className='btn'>Consumption <HalfDonut angle={-30} width={700}/></button>
                        <button className='btn'>Goals <HalfDonut angle={45} width={700}/></button>
                    </div>
                    <div id='Line'>
                       <Line/>
                    </div>
                    <div id='donut-wrapper'>
                        <div className='donut'>
                            <Donut month={9}>
                            </Donut>
                        </div>

                        <div className='donut'>
                            <Donut month={8}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Dashboard;
