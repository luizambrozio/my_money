import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox'



class Dashboard extends Component {
    //state = {  }
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='1.0' />
                <Content>
                    <ValueBox cols='12 4' color='green' icon='bank'
                        value='R$ 10' text='Total de Créditos'/>
                    <ValueBox cols='12 4' color='red' icon='credt-card'
                        value='R$ 10' text='Total de Debitos'/>
                    <ValueBox cols='12 4' color='blue' icon='money'
                        value='R$ 0' text='Valor Consolidado'/>
                </Content>
            </div>
        );
    }
}

export default Dashboard;