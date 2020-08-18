import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        text: 'sample',
        key: Date.now()
      }],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    }

    )
  }
  addItem(e) {
    e.preventDefault();
    const newIteam = this.state.currentItem;
    // console.log(newIteam);
    const newIteams = this.state.items
    newIteams.push(newIteam)
    this.setState({
      items: newIteams,
      currentItem: {
        text: '',
        key: ''
      }
    })
  }


  handleDone(key, e) {
    const done = e.target.checked;

    const list = this.state.items.map((item) => {
      if (item.key == key) {
        item.done = done;
      }
      return item;
    })

    this.setState({
      items: list
    })

  }

  render() {
    return (
      <div className="container">

        <div className="card">
          <div>
            <ul className="list">

              {
                this.state.items.map((item, index) => {
                  return (
                    <li key={index} className={`list-item ${item.done ? 'done' : ''}`}>
                      <input onChange={this.handleDone.bind(this, item.key)} className="list-check" type="checkbox"></input>
                      <span>
                        {
                          item.text
                        }

                      </span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="form-panel">
            <form className="form" onSubmit={this.addItem.bind(this)}>
              <input className="form-input" type="text" placeholder="Enter text"
                value={this.state.currentItem.text}
                onChange={this.handleInput.bind(this)} />
              <button className="form-button" type="submit">Add</button>

            </form>
          </div >

        </div>
      </div>
    )
  }
}

export default App;
