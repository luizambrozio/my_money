import React, { Component } from 'react';

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/ValueBox'

export default({credit, debit}) => (
    <Grid cols='12'>
        <fieldset >
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' 
                    value={`R$ ${credit}`} text='total de Créditos'/>
                <ValueBox cols='12 4' color='red' icon='credit-card' 
                    value={`R$ ${debit}`} text='total de Debitos'/>
                <ValueBox cols='12 4' color='blue' icon='money' 
                    value={`R$ ${credit - debit}`} text='total Consolidado'/>
            </Row>
        </fieldset>
    </Grid>
)