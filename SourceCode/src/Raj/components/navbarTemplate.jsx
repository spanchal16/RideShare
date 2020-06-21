import React, { Component } from 'react';
import NavbarHeader from './navbarHeader'
import createeventContainer from './createeventContainer'
import FindEventContainer from './findeventContainer'
import home from './home'
import Error from './errorpage'
import './events.css';

import { Route,Switch  } from "react-router-dom";
import { Form, Button, FormGroup, FormControl, ControlLabel, Col, Container,Row} from "react-bootstrap";

class NavbarTemplate extends Component {
    state = {  }
    render() {        
       

        return (
            
            <div>
                <div>
                    <NavbarHeader />
                </div>
                
                <div className="content" style={{ overflow: "auto", height: "100%" }} >
                    <Switch>
                    <Route exact path="/" component={home} />
                    <Route exact path="/createevent" component={createeventContainer}></Route>
                    <Route exact path="/findevent" component={FindEventContainer}></Route>
                    <Route exact path="/home" component={home}></Route>
                    <Route exact path="/*" component={Error} />
                  
                    </Switch>
                    
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default NavbarTemplate;