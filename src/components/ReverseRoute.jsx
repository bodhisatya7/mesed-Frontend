import React from 'react'
import { Route, Redirect } from 'react-router'

export const ReverseRoute = ({ component: Component, ...rest }) => (
        <Route 
            {...rest}
            render={props =>
            localStorage.getItem('user_id') ? (
                <Redirect to={{
                    pathname: "/artist",
                    state: {from: props.location}
                }}
                /> 
            ) : (
                <Component {...props} />
            )
         }
    />
);