import React, {Component} from 'react';
import './Metronome.css';
import click1 from './click1.wav';
import click2 from './click2.wav';

class Metronome extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            playing: false,
            count: 0,
            bpm: 120,
            beatsPerMinuteMeasure: 4
        };

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
        //audio file added here
        //time to record some clicks.
    }

    startStop = () =>
    {
        this.click2.play();
    }

    handleBpmChange = event => //arrow function needed!  Regular function use of 'this' binding would be lost when it gets passed to 'onChange' handler.
    {
        const bpm = event.target.value;
        this.setState({bpm});
    }

    render()
    {
        const{ playing, bpm} = this.state;

        return(
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} Beats Per Minute</div>
                    <input type="range" min="30" max="240" value={bpm} onChange={this.handleBpmChange} />
                </div>
                <button onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
            </div>
        );
    }
}

export default Metronome;
