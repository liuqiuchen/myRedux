// 定义Actions对象
import * as lights from '../../constants/TrafficLight';

export function changeGreen() {
	return {type: lights.CHANGE_GREEN};
}

export function changeRed() {
	return {type: lights.CHANGE_RED};
}

export function changeYellow() {
	return {type: lights.CHANGE_YELLOW};
}
/*
说明
这里的 {type:lights.CHANGE_GREEN} 等就是Redux的 action对象（就是这么简单....），
而对应的 changeGreen方法则称为 action创建函数 ；
*/