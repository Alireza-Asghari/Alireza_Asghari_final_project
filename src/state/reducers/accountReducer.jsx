import React from 'react'
import axios from 'axios'

export const AccountReducer =(state = 0, action)=>{
    switch (action.type) {
        case "deposit":
           return state + action.payload
        case "withdraw":
            return state - action.payload
        default :
           return state    
    }
}

export const FetchReducer = (info=[],action)=>{
    switch (action.type) {
        case "FETCH_BOOKS_DATA":  
            return action.payload
        default:
          return info;
    }
}

