import React from "react";
import Panel from "../../components/Panel";

const NoMatch = () => (
  <Panel>
    <h1 className="center-align red-text">404 Page Not Found
      <span role="img" aria-label="Face With Rolling Eyes Emoji">
        🙄
      </span>
    </h1>
    <a href="/"><button className="homeBtn waves-effect">← Home</button></a>
  </Panel>
);

export default NoMatch;
