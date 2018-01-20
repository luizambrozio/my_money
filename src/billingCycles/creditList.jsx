import React, { Component } from 'react';
import Grid from '../common/layout/grid'
import { Field } from 'redux-form';

export default class CreditList extends Component {

    renderRowns() {
        return(
            <tr>
                <td><Field name='credits[0].name' component='input'/></td>
                <td><Field name='credits[0].value' component='input'/></td>
                <td></td>
            </tr>
        )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset disabled="disabled">
                    <legend>Credito</legend>
                </fieldset>
                <table className='table'>
                    <thead>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {this.renderRowns()}
                    </tbody>
                </table>
            </Grid>
        );
    }
}