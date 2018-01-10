import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from "redux-form";
import { showTabs, selectTab } from "../common/tab/TabActions";

const BASE_URL = 'http://localhost:3003/api'

export const BILLING_CYCLES_FETCHED = 'BILLING_CYCLES_FETCHED';

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: BILLING_CYCLES_FETCHED,
        payload : request
    }
}


export function create(values) {

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada.')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
    
}
