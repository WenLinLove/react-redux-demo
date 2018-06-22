import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

class Login extends Component {
     
  
	render() {
		return (
         <div>
              <Tabs
                defaultTab="one"
                onChange={(tabId) => { console.log(tabId) }}
               >
                <TabList>
                  <Tab tabFor="one">Tab 1</Tab>
                  <Tab tabFor="two">Tab 2</Tab>
                  <Tab tabFor="three">Tab 3</Tab>
                </TabList>
                <TabPanel tabId="one">
                  <p>Tab 1 content</p>
                </TabPanel>
                <TabPanel tabId="two">
                  <p>Tab 2 content</p>
                </TabPanel>
                <TabPanel tabId="three">
                  <p>Tab 3 content</p>
                </TabPanel>
              </Tabs>

        </div>
		 )
	 }
}

export default Login;