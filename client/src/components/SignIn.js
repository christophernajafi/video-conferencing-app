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
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="room">
        Room
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Join the chat</button>
    </form>
  );
}

export default SignIn;
