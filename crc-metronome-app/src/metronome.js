import React, {Component} from 'react';
import './Metronome.css';

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
    }

    render()
    {
        const{ playing, bpm} = this.state;

        return(
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} Beats Per Minute</div>
                    <input type="range" min="30" max="240" value={bpm} />
                </div>
                <button>{playing ? 'Stop' : 'Start'}</button>
            </div>
        );
    }
}

export default Metronome;
/*
import React, {Component} from 'react';
import './Metronome.js';

class Metronome extends Component
{
    render()
    {
        
        let bpm = 100;
        let playing = false;
        return
        (
            <div className = "metronome">
                <div className = "bpm-slider">
                    <div>
                        {bpm} BPM (Beats Per Minute)
                    </div>
                    <input type="range" min="30" max="240" value={bpm} />
                </div>
                <button> {playing ? 'Stop' : 'Start'} </button>
            </div>
        );
        return <div className = "metronome">Lets hear the beats</div>;
        <input type="range" min="30" max="240" value={bpm}></input>
    }
}

export default Metronome;*/
