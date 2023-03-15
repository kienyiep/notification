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
    OneSignal.sendTag("language", tag);
  };
  return (
    <div className="tags">
      <button className="btn btn-java" onClick={() => onHandleTag("Java")}>
        react
      </button>
      <button className="btn btn-ruby" onClick={() => onHandleTag("Ruby")}>
        angular
      </button>
      <button className="btn btn-python" onClick={() => onHandleTag("Python")}>
        vue
      </button>
    </div>
  );
}

export default App;
