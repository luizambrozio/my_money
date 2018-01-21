import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import labelAnInput from '../common/form/labelAnInput'
import { init } from "./billingCycleActions";
import ItemList from './itemList'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits, debits } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAnInput} readOnly={readOnly}
                        label= 'Nome' cols='12 4' placeholder='Informe o seu Nome'/>
                    <Field name='month' component={labelAnInput} type='number' readOnly={readOnly}
                        label= 'Mes' cols='12 4' placeholder='Informe o Mes'/>
                    <Field name='year' component={labelAnInput} type='number' readOnly={readOnly}
                        label= 'Ano' cols='12 4' placeholder='Informe o Ano'/>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} type='number'
                        field='credits' legend='Crédito' />
                    <ItemList cols='12 6' list={debits} readOnly={readOnly} type='number'
                        field='debits' legend='Debitos' showStatus='true' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-defaut'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        );
    }
}


BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debits : selector(state, 'debits')})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)