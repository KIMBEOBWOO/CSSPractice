import React from 'react';
import './CSS_3.style.css';

export default function CSS_3(): JSX.Element {

  return(
    <div>
      <div title="static" >
        <span className="static-tag">
          static 1
        </span>
        <span className="static-tag">
          static 2
        </span>
        <span className="static-tag">
          static 3
        </span>
        <div className="static-tag">
          static 4
        </div>
      </div>

      <br />

      <div title="relative" style={{marginTop: '100px'}}>
        <span className="relative-top">
          relative top
        </span>
        <span className="relative-right">
          relative right
        </span>
        <span className="relative-bottom">
          relative bottom
        </span>
        <div className="relative-left">
          relative left
        </div>
      </div>
      
      <br style={{marginTop: '100px'}}/>

      <div title="absolute" style={{marginTop: '100px'}}>
        <div className="absolute-parent">
            absolute parent

            <span className="absolute-child">
              absolute child

              data : {
                id: idasdfasd
              }
            </span>
        </div>
      </div>

      <br style={{marginTop: '100px'}}/>

      <div title="fixed">
        <div className="fixed">
          fixed
        </div>
      </div>

    </div>
  );
}