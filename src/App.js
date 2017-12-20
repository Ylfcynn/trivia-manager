import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const INITIAL_STATE = {
  disabled: true
}

class App extends Component {
  constructor (props) { // This is like __init__ for a class in Python
    super(props) // Gives us access to the component framework

    this.state = INITIAL_STATE
  }

  render () {
    return (
      <main>
        <header className='header'>
          <div className='brand'>Cèilidh v0.1 by&nbsp;<a href='https://wench.io'>Wench.io</a></div>
          <div className='log-out'><button>Log out</button></div>
        </header>

        <section className='control-panel'>
          <div className='h1'>
            <h1>TRIVIA WIDGET</h1>
          </div>
          <div className='headings'>
            <div className='team-name-heading'>Team Name</div>
            <div className='score-heading'>Score</div>
            <div className='del-heading'>Del</div>
          </div>
          <div className='team'>
            <div className='team-name'><input type='text' placeholder='Enter team name here' /></div>
            <div><button className='enter'>Enter</button></div>
            <div className='score-keeper'>
              <div className='scorebox'><input type='text' placeholder='0' /></div>
              <div className='plus_and_minus'><button className='minus'>–</button></div>
              <div className='plus_and_minus'><button className='plus'>+</button></div>
            </div>
            <div className='checkbox'><input type='checkbox' /></div>
          </div>
          <div className='team'>
            <div className='team-name'><input type='text' placeholder='Enter team name here' /></div>
            <div><button className='enter'>Enter</button></div>
            <div className='score-keeper'>
              <div className='scorebox'><input type='text' placeholder='0' /></div>
              <div className='plus_and_minus'><button className='minus'>–</button></div>
              <div className='plus_and_minus'><button className='plus'>+</button></div>
            </div>
            <div className='checkbox'><input type='checkbox' /></div>
          </div>
          <div className='team'>
            <div className='team-name'><input type='text' placeholder='Enter team name here' /></div>
            <div><button className='enter'>Enter</button></div>
            <div className='score-keeper'>
              <div className='scorebox'><input type='text' placeholder='0' /></div>
              <div className='plus_and_minus'><button className='minus'>–</button></div>
              <div className='plus_and_minus'><button className='plus'>+</button></div>
            </div>
            <div className='checkbox'><input type='checkbox' /></div>
          </div>
          <div className='team'>
            <div className='team-name'><input type='text' placeholder='Enter team name here' /></div>
            <div><button className='enter'>Enter</button></div>
            <div className='score-keeper'>
              <div className='scorebox'><input type='text' placeholder='0' /></div>
              <div className='plus_and_minus'><button className='minus'>–</button></div>
              <div className='plus_and_minus'><button className='plus'>+</button></div>
            </div>
            <div className='checkbox'><input type='checkbox' /></div>
          </div>
          <div className='team'>
            <div className='team-name'><input type='text' placeholder='Enter team name here' /></div>
            <div><button className='enter'>Enter</button></div>
            <div className='score-keeper'>
              <div className='scorebox'><input type='text' placeholder='0' /></div>
              <div className='plus_and_minus'><button className='minus'>–</button></div>
              <div className='plus_and_minus'><button className='plus'>+</button></div>
            </div>
            <div className='checkbox'><input type='checkbox' /></div>
          </div>
          <div><button className='start-game' disabled={this.state.disabled}>Start Game</button></div>
        </section>

        <section className='timer'>
          <h3>Timer</h3>
          <div className='timer-display'>
            <input className='timer-input' type='text' placeholder='60' />
            <label for='timer-input'>Sec</label>
          </div>
          <div className='timer-buttons'>
            <div><button>Start</button></div>
            <div><button>Stop</button></div>
            <div><button>Reset</button></div>
          </div>
        </section>
      </main>
    )
  }
}

export default App
