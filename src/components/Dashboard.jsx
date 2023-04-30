import React, { useState } from 'react'
import axios from 'axios'; // import axios library
import '../dashboard.css'
import CustomSlider from './CustomSlider'
import { Button } from '@material-ui/core'

const Dashboard = () => {
    const [quietModeValue, setQuietModeValue] = useState(20);
    const [ambientModeValue, setAmbientModeValue] = useState(20);
    const [turboModeValue, setTurboModeValue] = useState(20);

    const handleDownloadClick = () => {
        console.log("Quiet Mode Value:", quietModeValue);
        console.log("Ambient Mode Value:", ambientModeValue);
        console.log("Turbo Mode Value:", turboModeValue);

        axios.get(`http://localhost:3001/file/?low=${quietModeValue}&medium=${ambientModeValue}&high=${turboModeValue}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='body'>
            <div className='main'>
                <div className='title'>
                    Smart Laptop Cooling Pad
                </div>
                <div className='sliders'>
                    <div className='slider'>
                        <div className='slider-label'><h2>Quiet Mode</h2></div>
                        <CustomSlider value={quietModeValue} setValue={setQuietModeValue} />
                    </div>
                    <div className='slider'>
                        <div className='slider-label'><h2>Ambient Mode</h2></div>
                        <CustomSlider value={ambientModeValue} setValue={setAmbientModeValue} />
                    </div>
                    <div className='slider'>
                        <div className='slider-label'><h2>Turbo Mode</h2></div>
                        <CustomSlider value={turboModeValue} setValue={setTurboModeValue} />
                    </div>
                    <Button className='button' style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', marginTop: '50px' }} onClick={handleDownloadClick}>
                        Download
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
