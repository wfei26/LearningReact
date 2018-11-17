import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        // THIS IS THE ONLY TIME we do direct assignment
        this.state = { lat:null, errorMessage: '' };
    }

    componentDidMount() {
        // since render() will be called again and again, we do not want to React 
        // accidentally fetches geolocation multiple times, so put it in constructor
        window.navigator.geolocation.getCurrentPosition(
            //first callback: success
            (position) => {
                // MUST USE setSTATE!!!
                this.setState({ lat: position.coords.latitude });
            }, 

            //second callback: error
            (err) => {
                this.setState({ errorMessage: err.message });
            } 
        );
    }

    componentDidUpdate() {
        console.log("My component just updated to the screen!");
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat }/>
        }

        return <Spinner message="Please accept location request"/>
    }

    // React says we have to define render!!
    render() {
        return (
            <div className="border red">
                { this.renderContent() };
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)