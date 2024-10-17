import React, { Suspense  } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
  } from "react-router-dom";
import Route from './route';
import i18n  from './i18n';

ReactDOM.render(
    <Suspense fallback="Loading">
        <BrowserRouter basename="/fll">
            <Route/>
        </BrowserRouter>
    </Suspense>
,
  document.getElementById('root')
);

