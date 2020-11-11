import React from 'react';
import './App.css';
import Mobile from './Mobile/mobile';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      mobiles:[
        {MobileName:"Android", name:"GalaxyF41", manufacturer:"Samsung" ,price:"15799",ram:"16GB",color:"Blue"},
        {MobileName:"Mac", name:"iphoneXR", manufacturer:"Apple", price:"38799",ram:"256GB",color:"Red"},
        {MobileName:"Android", name:"RedmiNote8" ,manufacturer:"Foxconn" ,price:"16000",ram:" 64GB",color:"Blue"},
        {MobileName:"Android", name:"OppoA9", manufacturer:"BBQ", price:"17090",ram:"64GB",color:"Blue"}
      ]
    };
  }
  render(){
    return(
      <div className="App container-fluid">
        <h1>List Of Mobile Models:</h1>
        <Mobile MobileName={this.state.mobiles[0].MobileName} name={this.state.mobiles[0].name} manufacturer={this.state.mobiles[0].manufacturer} price={this.state.mobiles[0].price} ram={this.state.mobiles[0].ram} color={this.state.mobiles[0].color}/>
        <Mobile MobileName={this.state.mobiles[1].MobileName} name={this.state.mobiles[1].name} manufacturer={this.state.mobiles[1].manufacturer} price={this.state.mobiles[1].price} ram={this.state.mobiles[1].ram} color={this.state.mobiles[1].color}/>
        <Mobile MobileName={this.state.mobiles[2].MobileName} name={this.state.mobiles[2].name} manufacturer={this.state.mobiles[2].manufacturer} price={this.state.mobiles[2].price} ram={this.state.mobiles[2].ram} color={this.state.mobiles[2].color}/>
        <Mobile MobileName={this.state.mobiles[3].MobileName} name={this.state.mobiles[3].name} manufacturer={this.state.mobiles[3].manufacturer} price={this.state.mobiles[3].price} ram={this.state.mobiles[3].ram} color={this.state.mobiles[3].color}/>
      </div>
    );
  };
    

  
  
}

export default App;
