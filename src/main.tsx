import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import Invoice from "./routes/Invoice";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices/>}>
            <Route path=":invoiceId" element={<Invoice/>}/>
          </Route>
          <Route path="expenses" element={<Expenses/>}/>

          {/*no routes*/}
          <Route path="*" element={
            <main>
              <div>Nothing Here !!!</div>
            </main>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
