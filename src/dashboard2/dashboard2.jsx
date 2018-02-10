import React, { Component } from 'react'
import Axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/row'
import consts from '../const'

class Dashboard2 extends Component {

    constructor(props) {
        super(props)

        this.state = { credit : 0, debit: 0 }
    }

    componentWillMount() {
        Axios.get(`${consts.API_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }
    
    //state = {  }
    render() {
        const { credit, debit } = this.state

        return (
            <div>
                <ContentHeader title='Dashboard' small='Version 2.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debit}`} text='Total de Debitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit-debit}`} text='Valor Consolidado'/>
                    </Row>                
                </Content>
            </div>
        )
    }
}

export default Dashboard2