import React from 'react'
import ReactTabscss from '../background/ReactTabs.css'
import {Tab} from 'react-bootstrap'
import Producttypes from '../background/Producttypes';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Nav, } from "react-bootstrap"
// import {BrowserRouter as  Router,Switch,Route} from "react-router-dom"
import Lightings from '../components/Lightings';
import Recentarrivalproducts from  '../componentecommerce/Recentarrivalproducts.js'
import DecorationProducts from '../components/DecorationProducts';
import FurnituresProducts from '../components/furnitures_products';
function ReactTabs(){
    return(<div className="container">

<div className="Listofproducts">

<h1>List</h1>
<h6>shop</h6>
</div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        
         
            <Nav  className="flex-clumn ">

            <Nav.Item>
                <Nav.Link to="/allproducts" eventKey="first">All Products</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link  to="/#furniture" eventKey="second">Funiture</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link to="/#Lighting" eventKey="three">Lighting</Nav.Link>
              </Nav.Item>

              <Nav.Item>
              <Nav.Link to="/#Decoration" eventKey="four">Decoration</Nav.Link>
              </Nav.Item>

              <Nav.Item>
             <Nav.Link to="/#Toys" eventKey="five">Toys</Nav.Link>  
              </Nav.Item>


            </Nav>
         
       
            <Tab.Content className="typeof">

              <Tab.Pane  className="typeof" eventKey="first">
              <Recentarrivalproducts/> 
              </Tab.Pane>

              <Tab.Pane  className="typeof" eventKey="second">

              <FurnituresProducts/>
              </Tab.Pane>

              <Tab.Pane  className="typeof" eventKey="three">
             <Lightings/>
              </Tab.Pane>

              <Tab.Pane  className="typeof" eventKey="four">
             <DecorationProducts/>
              </Tab.Pane>

              <Tab.Pane  className="typeof" eventKey="five">
              <h2 className="toys">No Toys in this section</h2>
              </Tab.Pane>

            </Tab.Content>
         
        
      </Tab.Container>
      </div>);
}
export default ReactTabs;