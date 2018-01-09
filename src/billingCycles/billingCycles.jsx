import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/Content'
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import Tabs from '../common/tab/Tabs';
import TabContent from '../common/tab/TabContent'
import { selectTab, showTabs } from "../common/tab/TabActions";

class BillingCycles extends Component {
    componentWillMount() {
      this.props.selectTab('tabList')
      this.props.showTabs('tabList', 'tabCreate')
    }
    
    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamento' small='Cadastro' />
                    <Content>
                        <Tabs>
                            <TabsHeader>
                                <TabHeader label='Listar' icon='bars' target='tabList'/>
                                <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                                <TabHeader label='alterar' icon='pencil' target='tabUpdate'/>
                                <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                            </TabsHeader>

                            <TabsContent>
                                <TabContent id='tabList'><h1>Lista</h1></TabContent>
                                <TabContent id='tabCreate'><h1>Inserir</h1></TabContent>
                                <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                                <TabContent id='tabDelete'><h1>Remover</h1></TabContent>
                            </TabsContent>
                        </Tabs>                        
                    </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycles)