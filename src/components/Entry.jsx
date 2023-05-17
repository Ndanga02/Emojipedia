import React from "react";
import emojipedia from "/src/emojipedia.js";


function Maentry() {
  return (
    
        <dl className="dictionary" >
      {emojipedia.map((emo) => (
          <div className="term" key={emo.id}>
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                {emo.emoji}
              </span>
              <span>{emo.name}</span>
            </dt>
            <dd>{emo.meaning}</dd>
          </div>
      ))}
        </dl>
  
  );
}

export default Maentry;
