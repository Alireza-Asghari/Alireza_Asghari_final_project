import React from 'react'
import Header from '../components/HomePage.header/header';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

const PurchaseConf= () => {
    const {id} = useParams()
    const history = useHistory()
    return (
        <>
        <Header/>
            <div>
                this confirm
            </div>
            <div>
                <button onClick={()=> history.push('/')}> 
                    خروج از حساب کاربری
                    <br/>
                    {id}
                </button>
            </div>
        </>
    )
}

export default PurchaseConf;
