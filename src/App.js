import react from "react";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert"
class App extends react.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Alert />
      </div>
    );
  }
}
export default App;
