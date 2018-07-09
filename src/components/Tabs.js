//based on https://medium.com/@diegocasmo/a-simple-react-tabs-component-47cac2cfbb5
// import PropTypes from 'prop-types';
import React from 'react';
import './Tabs.css';
export default class Tabs extends React.Component {
  // static propTypes = {
  //   defaultActiveTabIndex: PropTypes.number,
  //   activeTabIndex: PropTypes.number,
  //   onActiveTabChange: PropTypes.func,
  // };

  static defaultProps = {
    defaultActiveTabIndex: 0,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: this.props.activeTabIndex || this.props.defaultActiveTabIndex,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.updateMarker = this.updateMarker.bind(this);
  }

  handleTabClick(tabIndex, node) {
    this.props.onActiveTabChange && this.props.onActiveTabChange(tabIndex);
    this.setState({
      activeTabIndex: tabIndex,
    });
  }

  renderTabTitles() {
    return React.Children.map(this.props.children, (child, index) => {
      const isActive = index === this.state.activeTabIndex;
      const ref = isActive ? 'activeTab' : undefined;
      return (
        <div ref={ref}>
          {React.cloneElement(child, {
            onClick: this.handleTabClick,
            tabIndex: index,
            isActive,
          })}
        </div>
      );
    });
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const activeTabIndex = this.props.activeTabIndex
      ? this.props.activeTabIndex
      : this.state.activeTabIndex;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  componentWillReceiveProps(props) {
    props.activeTabIndex && this.setState({ activeTabIndex: props.activeTabIndex });
  }

	componentDidUpdate() {
		this.updateMarker();
	}

	componentDidMount() {
		this.updateMarker();
	}

	updateMarker() {
		if (this.refs.marker && this.refs.activeTab) {
			const selectedTabClientRect = this.refs.activeTab.getBoundingClientRect();
			this.refs.marker.style.bottom = '1px';
			this.refs.marker.style.width = selectedTabClientRect.width + 'px';
			this.refs.marker.style.left =
				selectedTabClientRect.left - this.refs.tabHeader.getBoundingClientRect().left + 'px';
		}
	}

  render() {
    return (
      <div className="tabs-container">
        <div className="tabs-headers-container" ref="tabHeader">
          <ul className="tabs-headers">{this.renderTabTitles()}</ul>
          <div ref="marker" className="active-tab-marker" />
        </div>
        <div className="tabs-active-content">{this.renderActiveTabContent()}</div>
      </div>
    );
  }
}
