import React from 'react'
import HeaderLog from './header.log';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

const PurchaseConf= () => {
    const {id} = useParams()
    const history = useHistory()
    return (
        <>
        <HeaderLog id={id}/>
           
            <div>
               
            </div>
        </>
    )
}

export default PurchaseConf;
