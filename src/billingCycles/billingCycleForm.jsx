import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import labelAnInput from '../common/form/labelAnInput'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAnInput} 
                        label= 'Nome' cols='12 4' placeholder='Informe o seu Nome'/>
                    <Field name='month' component={labelAnInput} type='number'
                        label= 'Mes' cols='12 4' placeholder='Informe o Mes'/>
                    <Field name='year' component={labelAnInput} type='number'
                        label= 'Ano' cols='12 4' placeholder='Informe o Ano'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        );
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)