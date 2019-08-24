import React, { Component } from "react";
import Swipeable from "react-swipy";
import Card from "./components/Card";
import Button from "./components/Button";

import ShowOverlay from './showOverlay';

import {setCookie, getCookie} from './components/cookies';


const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "640px",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden",
  margin: "0 auto",
  padding: "20px 0px"
};

const wrapperStyles = { position: "relative", width: "380px", height: "380px" };

const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class App extends Component {
  state = {
    cards: ["https://picsum.photos/320", 
            "https://picsum.photos/id/237/320", 
            "https://picsum.photos/id/238/320", 
            "https://picsum.photos/id/239/320", 
            "https://picsum.photos/id/240/320", 
            "https://picsum.photos/id/241/320"],

      showOverlayBox: true      
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length)}));

  like = () => {
 
  }  

  componentDidMount(){
    setTimeout(() => {
          if(!getCookie('test'))
          {
              setCookie('test', true, 365);
          }
    },500)
  }

  render(){
    const { cards } = this.state;
    return (
      <div style={appStyles}>
         {!getCookie('test') && this.state.showOverlayBox ? <div onClick = {()=>{
                this.setState({
                  showOverlayBox: false
                })
         }}><ShowOverlay /></div> : null}
        <div style={wrapperStyles}>
          {cards.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left} name="nope">Nope!</Button>
                    <Button onClick={right} name="like">Like</Button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card><img src={cards[0]} alt="dummy images"/></Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}><img src={cards[1]} alt="dummy images"/></Card>}
            </div>
          )}
          {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
        </div>

            

      </div>
    );
  }
  
}

export default App;
