import React from 'react'
import {Route} from 'react-router'

import NotifierComponent from './NotifierComponent';

export const routes = (
    <div>
        <Route path='/' component={NotifierComponent}>
        </Route>
    </div>
);
