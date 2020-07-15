import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-172750896-1')
ReactGA.pageview(window.location.pathname);

class App extends Component {
	state = {
	    characters: [],
	  }

	removeCharacter = (index) => {
	  const {characters} = this.state

	  this.setState({
	    characters: characters.filter((character, i) => {
	      return i !== index
	    }),
	  })
	}
	handleSubmit = (character) => {
	  this.setState({characters: [...this.state.characters, character]})
	}
  render() {
  	const { characters } = this.state
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App