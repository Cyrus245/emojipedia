import React from "react";
import ReactDom from "react-dom";
import Entry from "./entry";
import emojipedia from "../emojipedia";

// function emojidata(x) {
//   return <Entry key={x.id} emoji={x.emoji} name={x.name} meaning={x.meaning} />;
// }

// const emojidata = (x) => {
//   return <Entry key={x.id} emoji={x.emoji} name={x.name} meaning={x.meaning} />;

// };

const m = emojipedia.map((x) => {
  return x.meaning.substring(0, 100);
});

console.log(m);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((x) => (
          <Entry key={x.id} emoji={x.emoji} name={x.name} meaning={x.meaning} />
        ))}
      </dl>
    </div>
  );
}

export default App;
