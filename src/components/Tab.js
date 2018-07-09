import React from 'react';
import PropTypes from 'prop-types';
export default class Tab extends React.Component {
	static propTypes = {
		tabTitle: PropTypes.string.isRequired,
		//these props are private, only the Tabs component is using them to activate the Tab
		// isActive: PropTypes.bool,
		// tabIndex: PropTypes.number,
		// onClick: PropTypes.func,
	};

	render() {
		return (
			<li
				ref="wrapperElement"
				className={`tab ${this.props.isActive ? 'active' : ''}`}
				onClick={event => {
					this.props.onClick(this.props.tabIndex, this.refs.wrapperElement);
				}}
			>
				<div className="tab-link">{this.props.tabTitle}</div>
			</li>
		);
	}
}
