
import React from 'react';
import { render} from 'react-dom';
import Tabs from '../../src/components/Tabs';
import Tab from '../../src/components/Tab';

const App = () => (
	<div className="App">
		<Tabs defaultActiveTabIndex={0}>
      <Tab tabTitle="title-1">
        <div className="tab-1">1</div>
      </Tab>
      <Tab tabTitle="title-2">
        <div className="tab-2">2</div>
      </Tab>
      <Tab tabTitle="title-3">
        <div className="tab-3">3</div>
      </Tab>
      <Tab tabTitle="title-4">
        <div className="tab-4">4</div>
      </Tab>
    </Tabs>
	</div>
);
render(<App />, document.getElementById("root"));