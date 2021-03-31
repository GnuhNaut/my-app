import './App.css';
import { 
  Button,
  Input,
  Select,
  Checkbox,
  Radio,
  Tag,
  Switch
} from 'antd';
import React from "react";
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;

function App() {
  const [value, setValue] = React.useState(1);

  const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
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
          Movies
    </Tag>
    <br/> <br/>
    <Switch />
    <Switch defaultChecked/>
    <Switch disabled/>
    <Switch defaultChecked disabled/>
    <br/><br/>
  </div>
    
  );
}

export default App;
