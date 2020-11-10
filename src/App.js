
import './App.css';
import Mobile from './Mobile/mobile';

function App() {
  return (
    <div className="App">
      <Mobile mobile="Android" name="GalaxyF41" manufacturer="Samsung" price="15799"ram="16GB"color="Blue"/>
      <Mobile mobile="Mac" name="iphoneXR" manufacturer="Apple" price="38799"ram="256GB"color="Red"/>
      <Mobile mobile="Android" name="RedmiNote8" manufacturer="Foxconn" price="16000"ram=" 64GB"color="Blue"/>
      <Mobile mobile="Android" name="OppoA9" manufacturer="BBQ" price="17090"ram="64GB"color="Blue"/>
    </div>
  );
}

export default App;
