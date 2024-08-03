import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store"
import App from "./App"

import "./styles/index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)