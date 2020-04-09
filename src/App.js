import React from 'react';
import './App.css';
import Result from './Result';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inputNumber: '',
      message: '',
      showResults: false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.showResults &&
          <div>
            <div>
              <Result message={this.state.message} />
              <button onClick={this.backtoForm}>Go Back!</button>
            </div>
          </div>
        }
        {
          !this.state.showResults &&
          <form >
            <span className="formtext">Input a Number</span>
            <input
              type="text"
              value={this.state.inputNumber}
              onChange={event => this.setState({ inputNumber: event.target.value })}
              placeholder="Enter a Number"
              required
            />
            &nbsp;<button onClick={this.checkNumber}>Go!</button>
          </form>
        }

      </div>
      // </div>
    );
  }

  backtoForm = () => {
    this.setState({
      showResults: !this.state.showResults
    })
  }
  
  checkNumber = () => {

    const x = this.state.inputNumber;
    this.setState({ showResults: false });

    switch (true) {
      // case (isNaN(x)):
      //   alert("Not a Number, please enter only numbers");
      //   break;
      case (x % 5 === 0 && x % 15 === 0):
        this.setState({ showResults: true });
        this.setState({ message: "FizzBuzz" });
        break;
      case (x % 5 === 0):
        this.setState({ showResults: true });
        this.setState({ message: "Fizz" });
        break;
      case (x % 3 === 0):
        this.setState({ showResults: true });
        this.setState({ message: "Buzz" });
        break;
      default:
        this.setState({ showResults: true });
        this.setState({ message: "No Match" });
        break;
    }
  }
}



export default App;
