const initialState=1;
const changeState=(state=initialState,acttion)=>{
switch(acttion.type){
    case "NEXT": return state+1;
    case "PREV":return state-1;
    default: return state;
}
}
export default changeState;