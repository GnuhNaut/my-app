import './App.css';
import { 
  Button,
  Input,
  Select,
  Checkbox,
  Radio,
  Tag,
  Switch,
  Pagination,
  Tabs,
  Slider,
  Tooltip,
  Steps
} from 'antd';
import React from "react";
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;
const { TabPane } = Tabs;
const { Step } = Steps;

function App() {
  const [value, setValue] = React.useState(1);
  const [current, setCurrent] = React.useState(0)
  const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onChangeStep = current => {
    setCurrent(current)
  };
  return (
    <div>
      
      <Button type="primary">Primary Button</Button> <br/>
      <br/>
      <Button>Default Button</Button> <br/>
      <br/>
      <Button type="ghost">Default</Button> <br />
      <br/>
      <Button disabled>Default(disabled)</Button> <br />
      <br/>
      <Button danger>Danger Default</Button> <br/>
      <br/>
      <Button type="primary" danger>
      Primary
    </Button>
    <br />
    <br />
    <Input placeholder="Basic usage" />
    <br />
    <br />
    <Input placeholder="Basic usage" disabled/>
    <br />
    <br />
    <Input.Password placeholder="input password" />
    <br/>
    <br/>
    <Select defaultValue="lucy" >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <br/><br/>
    <Select defaultValue="lucy" disabled>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <br/><br/>
    <Select
    mode="multiple"
    showArrow
    defaultValue={['gold', 'cyan']}
    options={options}
  />
  <br/><br/>
      <Checkbox >
        Hello
      </Checkbox>
      <br/><br/>
      <Checkbox checked="true" disabled>
        Hello
      </Checkbox>
      <br/><br/>
      <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3} disabled>C</Radio>
    </Radio.Group>
    <Radio value={4} disabled defaultChecked>D</Radio>
    <br/><br/>
    <Tag closable >
          Movies dkfjfllsdk
    </Tag>
    <br/> <br/>
    <Switch />
    <Switch defaultChecked/>
    <Switch disabled/>
    <Switch defaultChecked disabled/>
    <br/><br/>
    <Pagination total={300} />
    <a href="google.com"> heelellele </a>
    <br/><br/>
    <Tabs >
    <TabPane tab="Tab 1dnkjdskfjkdj" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
  <br/><br/>
  <Slider defaultValue={30} tooltipVisible />
  <br/><br/>
  <Tooltip placement="topLeft" arrowPointAtCenter="true" title="hello">
    <Button>hddjkddkkd</Button>
      </Tooltip>
    <br/><br/>
    <Steps direction="vertical" current={current} onChange={onChangeStep}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
  <br/><br/>
  </div>
    
  );
}

export default App;
