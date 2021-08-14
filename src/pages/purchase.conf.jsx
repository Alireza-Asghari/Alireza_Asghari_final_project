import React from 'react'
import HeaderLog from './header.log';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import Basket from './basket';

const PurchaseConf= () => {
    const {id} = useParams()
    const history = useHistory()
    return (
        <>
        <HeaderLog id={id}/>           
        <Basket/>
        </>
    )
}

export default PurchaseConf;
