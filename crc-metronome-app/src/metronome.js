import React, {Component} from 'react';
import './Metronome.css';

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
        //return <div className = "metronome">Lets hear the beats</div>;
        //<input type="range" min="30" max="240" value={bpm}></input>
    }
}

export default Metronome;