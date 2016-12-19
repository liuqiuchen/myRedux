import lightStore from '../../stores/light/'
import {changeGreen, changeYellow, changeRed } from '../../actions/light/'

let store = lightStore();

// store.subscribe() 注册监听器
let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(changeGreen());
store.dispatch(changeYellow());
store.dispatch(changeRed());


