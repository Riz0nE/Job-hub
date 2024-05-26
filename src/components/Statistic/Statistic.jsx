import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const data = [
        { exm: 1, name: 'Rifat', assignment: 60 },
        { exm: 2, name: 'Rifat', assignment: 59 },
        { exm: 3, name: 'Rifat', assignment: 58 },
        { exm: 4, name: 'Rifat', assignment: 25 },
        { exm: 5, name: 'Rifat', assignment: 23 },
        { exm: 6, name: 'Rifat', assignment: 20 },

    ];
    return (
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis dataKey="exm" name="exm" />
                <YAxis dataKey="assignment" name="marks" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="phero" data={data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    );
};

export default Statistic;