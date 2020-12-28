import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import {routes} from "./routes";
import {Layout} from "./Layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        {renderRoutes(routes)}
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
