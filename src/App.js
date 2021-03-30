import './App.css';
import { 
  Button,
  Input,
  Select,
  Checkbox
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;

function App() {
  const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
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
  </div>
    
  );
}

export default App;
