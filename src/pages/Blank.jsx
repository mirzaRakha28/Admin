import React,{Component} from "react";

import Sidebar from'../component/Sidebar'
import Navbar from'../component/Navbar'
import Title from'../component/Title'
import ModalLogOut from "../component/ModalLogOut";
class Blank extends Component{
  render(){
    return (
      <>
        <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
              <Navbar/>
              <div class="container-fluid">

                <Title title="This is blank"/>
              </div>
            </div>
          </div>
        </div>
        
        <ModalLogOut/>
      </>
    );
  }
}
export default Blank;
