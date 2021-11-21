import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./scss/index.scss";
import { ThemeProvider, AuthProvider, LangProvider } from "./context/";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
