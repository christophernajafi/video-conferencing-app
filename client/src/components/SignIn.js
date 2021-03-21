import React from "react";
import axios from "axios";

function SignIn({ setToken, setName, setRoom, name, room }) {
  const videoTokenUrl = process.env.REACT_APP_VIDEO_TOKEN_URL;

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const result = await axios.post(videoTokenUrl, {
        identity: name,
        room: room,
      });
      setToken(result.data);
      console.log("Got the token with value: ", result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Welcome to Chris's Video Conferencing App!</h3>

      <div className="form-group">
        <label htmlFor="name">
          {/* Your Name */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="room">
          {/* Room Name */}
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Room Name"
          />
        </label>
      </div>
      <br />
      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={!name && !room}
      >
        JOIN
      </button>
    </form>
  );
}

export default SignIn;
