const setItem=(key:string, value:any)=>{
    localStorage.setItem(key,JSON.stringify(value));
}
export default setItem;
