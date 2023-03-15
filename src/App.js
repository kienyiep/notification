import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import OneSignal from "react-onesignal";
function App() {
  useEffect(() => {
    OneSignal.init({ appId: "848af0c2-4cf7-4958-b39e-104cda313261" });
  });
  const onHandleTag = (tag) => {
    console.log("tagging");
    OneSignal.sendTag("tech", tag).then(() => {
      console.log("Tagged");
    });
  };
  return (
    <div className="tags">
      <button className="btn btn-react" onClick={() => onHandleTag("react")}>
        react
      </button>
      <button className="btn btn-angular" onClick={() => onHandleTag("react")}>
        angular
      </button>
      <button className="btn btn-vue" onClick={() => onHandleTag("react")}>
        vue
      </button>
    </div>
  );
}

export default App;
