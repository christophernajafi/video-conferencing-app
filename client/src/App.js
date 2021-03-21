import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import TwilioVideos from "./components/TwilioVideos";

function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="App">
      {!token ? (
        <SignIn
          setToken={setToken}
          setName={setName}
          name={name}
          setRoom={setRoom}
          room={room}
        />
      ) : (
        <TwilioVideos token={token} room={room} />
      )}
    </div>
  );
}

export default App;
