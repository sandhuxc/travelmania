import React, { Component } from 'react';
import bgImage from '../../assets/bgImagePackage.jpg';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class LineChartGraph extends Component {
    render() {        
        const {graphData, show, setShow} = this.props
        console.log("Graph Monthly data", graphData)
        let months = ['','Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec']
        let data = []
        for (let i = 1; i <= months.length; i++)
        {
            let cash = 0
            graphData?.map((obj)=> {
                let crackMonth = obj.booking_date.split('T')[0].split('-')[1]
                if (crackMonth == i)
                {
                    cash += parseInt(obj.price)
                }      
            })

            data.push({
                name: months[i],
                packagesbooked: cash
            })
            
        }
        return (
            <>
            <hr className={`mt-4 border-gray-800 ${show}`}></hr>
            <ResponsiveContainer className={`w-full mt-8 ${show}`} height={594}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    
                    <CartesianGrid strokeDasharray="3 3"  />
                    <XAxis dataKey="name" stroke='#8E0B0B' />
                    <YAxis stroke='#8E0B0B' />
                    <Tooltip />
                    <Legend  />
                    <Line type="monotone" dataKey="packagesbooked" stroke="#0090FF" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
            </>
        );
    }
}
