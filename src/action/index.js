export const ADD_NUM = 'ADD_NUM'
export const ADD_NUMM = 'ADD_NUMM'
export const MINUS_NUM = 'MINUS_NUM'
export const WOGAIBIAN_DE = 'WOGAIBIAN_DE'
export const LOGIN = 'LOGIN'
export const ERR = 'ERR'


//action creater
export const addNum = (val)=> {
    return {
            type:ADD_NUM,
             val
          }
 }
 
 export const addNum1 = (val)=> {
    return {
            type:ADD_NUMM,
             val
          }
 }

 export const minuxNum = (index)=> {
    return {
        type:MINUS_NUM,
        index
    }
 }

 export const myGname = (name)=> {
    return {
        type: WOGAIBIAN_DE,
        name
    }
 }

 