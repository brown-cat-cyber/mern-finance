import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { configureStore } from "@reduxjs/toolkit"
import { api } from "./states/api"
import { setupListeners } from "@reduxjs/toolkit/query"
import { Provider } from "react-redux"

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
