import './App.css';
import { 
  Button,
  Input,
  Menu
} from 'antd';
import { DownOutlined } from '@ant-design/icons';

import React from "react"
function App() {
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
  </div>
    
  );
}

export default App;
