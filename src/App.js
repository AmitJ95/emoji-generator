import "./styles.css";
import { React, useState } from "react";
function App() {
  const emojiDictionary = {
    "😊": "Smiling",
    "😠": "Angry",
    "😫": "Tired",
    "🤓": "Nerd"
  };

  const emojis = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    console.log("clicked");
    var meaning = emoji;

    setMeaning(emojiDictionary[meaning]);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    console.log("smiley", meaning);
    if (meaning === undefined) {
      meaning = "We dont' have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji generator app</h1>
      <input onChange={emojiInputHandler}></input>
      <h3>Emojis will be shown here</h3>
      <h3>{meaning}</h3>

      {emojis.map(function showEmoji(emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
