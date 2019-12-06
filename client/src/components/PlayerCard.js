import React from 'react';
import axios from 'axios';

class PlayerCard extends React.Component {
    _isMounted = false;
    constructor(){
      super()
      this.state = {
     players: [],
      };
    }

    componentDidMount() {
        this._isMounted = true;
        console.log("first render(mounting)");
        axios
        .get("http://localhost:5000/api/players")
        .then(res => {
            if (this._isMounted) {
              this.setState({
                players: res.data
              });
            }
          });
        // .catch(err => console.log("error"));
     }
    

     componentWillUnmount() {
        this._isMounted = false;
      }

      render() {

        return (
      
          <div className="cardholder">
      
        {this.state.players.map(player => 
          
        <div className="card">
                <h2>Name: {player.name}</h2>
                <h2>Country: {player.country}</h2>
                <h2>Times Searched: {player.searches}</h2> 
        </div>
          
          )}
      
          </div>   
       
        )
      
      }
      }
            
        export default PlayerCard;