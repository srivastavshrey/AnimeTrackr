export const setLocal = (key : string ,value: any)=>{
   window.localStorage.setItem(key,value)
}

export const getLocal = (key:string):any=>{
    return window.localStorage.getItem(key)
}

export const clearLocal = ()=>{
    window.localStorage.clear()
}