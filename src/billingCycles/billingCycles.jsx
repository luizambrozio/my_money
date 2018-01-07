import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/Content'
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import Tabs from '../common/tab/Tabs';

class BillingCycles extends Component {
    //state = {  }
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

                            </TabsContent>
                        </Tabs>                        
                    </Content>
            </div>
        );
    }
}

export default (BillingCycles);
