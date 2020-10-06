import React from 'react';
import './CSS_2.style.css';

export default function CSS_2(): JSX.Element {

  return(
    <div>
      <span className="content-basic">
        content box
      </span>
      <span className="content-padding">
        content box with padding
      </span>
      <span className="content-margin">
        content box with margin
      </span>
      <span className="content-border">
        content box with border
      </span>
    </div>
  );
}