
import './App.css';
import Mobile from './Mobile/mobile';

function App() {
  return (
    <div className="App">
      <Mobile MobileName="Android" name="GalaxyF41" manufacturer="Samsung" price="15799"ram="16GB"color="Blue"/>
      <Mobile MobileName="Mac" name="iphoneXR" manufacturer="Apple" price="38799"ram="256GB"color="Red"/>
      <Mobile MobileName="Android" name="RedmiNote8" manufacturer="Foxconn" price="16000"ram=" 64GB"color="Blue"/>
      <Mobile MobileName="Android" name="OppoA9" manufacturer="BBQ" price="17090"ram="64GB"color="Blue"/>
    </div>
  );
}

export default App;
