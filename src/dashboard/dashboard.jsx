import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/row'



class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }
    
    //state = {  }
    render() {
        const { credit, debit } = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' small='1.0' />
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

const mapStateToProps = state => ({summary : state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch )

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)