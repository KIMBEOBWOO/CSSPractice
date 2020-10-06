import React from 'react';
import './CSS_1.style.css';

export default function CSS_1(): JSX.Element {

  return(
    <div>
      <div>
        <h2>
          Tag class and id
        </h2>
        <p>
          <span className="class_common">
            common class
            <br/>
            <div id="a">
              id a
            </div>
            <div id="b">
              id b
            </div>
          </span>
        </p>
      </div>

      <div>
        <h3>
          Tag Children
        </h3>
        <span>
          div's children
        </span>
      </div>
      
      <div>
        <h1>
          Property 
        </h1>
        <span title="bold">
          bold title property
        </span>
      </div>
      
    </div>
  );
}