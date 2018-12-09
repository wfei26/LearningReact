import React from 'react';
import ReactDOM from 'react-dom';
import './input.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg_hour_rate: '',
      bill_hour: '',
      client_fee: '',
      margin_profit: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, name) {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Average Hour Rate:
            <input type="text"  onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Bill Hour:
            <input type="text" value={this.state.avg_hour_rate} onChange={(e)=>{console.log(this);this.handleChange(e, "avg_hour_rate")}} />
          </label>
          <br/>
          <label>
            Client Fee:
            <input type="text" value={this.state.client_fee} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Margin Profit:
            <input type="text" value={this.state.margin_profit} onChange={this.handleChange} />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));