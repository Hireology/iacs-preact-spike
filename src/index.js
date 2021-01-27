import "./style";
import "preact/debug";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

const AppWithRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
export default AppWithRouter;
