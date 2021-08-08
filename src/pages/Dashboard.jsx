import React,{Component} from "react";

import Sidebar from'../component/Sidebar'
import Navbar from'../component/Navbar'
import Title from'../component/Title'
import ButtonDownload from "../component/ButtonDownload";
import EarningCard from "../component/EarningCard";
import Table from "../component/Table";
import ModalLogOut from "../component/ModalLogOut";

class Dashboard extends Component{
    render(){
        return (
        <>   
            <div id="wrapper">

                {/* Sidebar */}
                <Sidebar/>
                {/* End of Sidebar */}

                {/* Content Wrapper */}
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        {/* Topbar */}
                        <Navbar/>        
                        {/* End of Topbar */}

                        {/* Begin Page Content */}
                        <div class="container-fluid">

                            {/* Page Heading */}
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <Title title="Dashboard"/>
                                <ButtonDownload/>
                            </div>

                            {/* Content Row */}
                            <div class="row">

                                {/* Earnings (Monthly) Card Example */}
                                <EarningCard
                                    title="Earnings (Monthly)"
                                    icon="calendar"
                                    color="primary"
                                    value="$40,000"
                                />
                                {/* Earnings (Monthly) Card Example */}
                                <EarningCard
                                    title="Earnings (Monthly)"
                                    icon="calendar"
                                    color="primary"
                                    value="$40,000"
                                />
                                {/* Earnings (Monthly) Card Example */}
                                <EarningCard
                                    title="Earnings (Monthly)"
                                    icon="calendar"
                                    color="primary"
                                    value="$40,000"
                                />
                                {/* Pending Requests Card Example */}
                                <EarningCard
                                    title="Earnings (Monthly)"
                                    icon="calendar"
                                    color="primary"
                                    value="$40,000"
                                />
                            </div>

                            {/* Content Row */}

                            <Table/>

                        </div>
                        {/* /.container-fluid */}

                    </div>
                    {/* End of Main Content */}
                </div>
                {/* End of Content Wrapper */}

            </div>
            <ModalLogOut/>
        </> 
        );
    }
}

export default Dashboard;
