import React, { Component } from 'react'
import './App.css'

/*

*/

class App extends Component {
  render () {
    return (
      <main>
        <header className='header'>
          autoWench by <span id='brand'><a href='https://ceilidh.io'>Cèilidh.io</a></span>
        </header>

        <section className='CRUDL_Menu'>
          <div>Blog</div>
          <div>Events</div>
          <div>Menu</div>
          <div>Tap List</div>
          <div>Trivia</div>
        </section>
      </main>
    )
  }
}

export default App
