// 付诸行动的载体
// createStore
import { createStore } from 'redux';
import lightReducer from '../../reducers/light/';

export default function lightStore(initState) {
	return createStore(lightStore, initState); // 初始化创建（初始化状态是红灯）
}
