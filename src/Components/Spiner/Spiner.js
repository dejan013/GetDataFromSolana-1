import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

function App() {
  return (
    <div className="sweet-loading">
      <PulseLoader css={override} size={30} />
    </div>
  );
}

export default App;
