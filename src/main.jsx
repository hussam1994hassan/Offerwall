import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "../src/App";
import store from "../src/redux/store";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
