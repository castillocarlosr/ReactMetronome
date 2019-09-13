import React, {Component} from 'react';
import './Metronome.css';
import click1 from './click1.wav';
import click2 from './click2.wav';

class Metronome extends Component
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

        //audio file added here
        //time to record some clicks with my iphone
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
                <button>{playing ? 'Stop' : 'Start'}</button>
            </div>
        );
    }
}

export default Metronome;
