import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import reportWebVitals from "./reportWebVitals";

const header = ReactDOM.createRoot(document.getElementById("header"));
const main = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
