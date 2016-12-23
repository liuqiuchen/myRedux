import React, {PropTypes, Component} from 'react';
import {render} from 'react-dom';
import classnames from 'classnames';
import './index.less';

// es6方式编写一个react组件
class Light extends Component {
	render () {
		let color = this.props.light.color;
		return (
			<div className="traffic-light">
				<span className={classnames('light', color)}/>
			</div>
			)
	}
}

Light.propTypes = {
	light: PropTypes.object.isRequired
};

// 没什么意义
Light.defaultProps = {
	light: {color: 'red', time: '4'}
};

export default Light;