
import React from 'react';
import { render} from 'react-dom';
import Tabs from '../../src/components/Tabs';
import Tab from '../../src/components/Tab';

const App = () => (
	<div className="App">
		<Tabs defaultActiveTabIndex={0}>
			<Tab tabTitle="1">
				<div className="tab-1">1</div>
			</Tab>
			<Tab tabTitle="2">
				<div className="tab-2">2</div>
			</Tab>
		</Tabs>
	</div>
);
render(<App />, document.getElementById("root"));