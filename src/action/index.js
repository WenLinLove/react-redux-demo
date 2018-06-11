const ADD_NUM = 'ADD_NUM'
const MINUS_NUM = 'MINUS_NUM'
//action creater
export const addNum = (val)=> {
    return {
            type:ADD_NUM,
             val
          }
 }
 
 export const minuxNum = (index)=> {
    return {
        type:MINUS_NUM,
        index
    }
 }