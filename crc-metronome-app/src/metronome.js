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

    playClick = () =>
    {
        const{count, beatsPerMinuteMeasure} = this.state;

        if(count % beatsPerMinuteMeasure === 0)
        {
            this.click2.play();
        }
        else
        {
            this.click1.play();
        }

        this.setState(state => (
            {
                count: (state.count +1) % state.beatsPerMinuteMeasure
            }
            ));
    };

    startStop = () =>
    {
        if(this.state.playing)
        {
            clearInterval(this.timer);
            this.setState({ playing: false});
        }
        else
        {
            this.timer = setInterval(
                this.playClick,
                (60 / this.state.bpm) * 1000
            );
            this.setState(
                {
                    count: 0,
                    playing: true
                },
            );
        }
    };

    handleBpmChange = event => //arrow function needed!  Regular function use of 'this' binding would be lost when it gets passed to 'onChange' handler.
    {
        const bpm = event.target.value;
        //this.setState({bpm});

        if(this.state.playing)
        {
            clearInterval(this.timer);

            this.timer = setInterval(
                this.playClick,
                (60 / bpm) * 1000
                );

            this.setState(
                {
                    count: 0,
                    bpm
                });
        }
        else
        {
            this.setState({bpm});
        }
    };

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
                <p> &nbsp; </p>
                <p>A Metronome built by Carlos R. Castillo built using JavaScript React and deployed on Heroku</p>
            </div>
            
        );
    }
}

export default Metronome;
