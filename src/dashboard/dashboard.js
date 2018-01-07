import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/Content';


class Dashboard extends Component {
    //state = {  }
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        );
    }
}

export default Dashboard;