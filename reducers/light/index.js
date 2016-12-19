// reducer 描述各状态之间流转的规律
/*

    当红灯时，过n1秒会触发 CHANGE_GREEN 事件，灯编程绿色的
    当绿灯时，过n2秒会触发 CHANGE_YELLOW 事件，灯编程黄色的
    当黄灯时，过n3秒会触发 CHANGE_RED 事件，灯编程红色的
    ...周而复始...

*/
import {CHANGE_RED, CHANGE_YELLOW, CHANGE_GREEN} from '../../constants/TrafficLight';

// 定义初始状态，初始状态是红灯
const initState = {
	color: red,
	time: '7'
};

// 定义灯转换的reducer函数
export default function lightReducer(state=initState, action) {
	// green 5, yellow 3
	switch(action.type) {
		case 'CHANGE_GREEN':
			return {
				color: 'green',
				time: 5
			}

		case 'CHANGE_YELLOW': 
			return {
				color: 'yellow',
				time: 3
			}

		case 'CHANGE_RED':
			return Object.assign({}, initState);

		default: 
			return state;
	}
}