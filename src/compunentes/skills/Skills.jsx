import React from 'react'
import {
    CheckCircleFilled,
    IdcardTwoTone,
    PhoneTwoTone,
    MailTwoTone,
    FacebookOutlined,
    HomeTwoTone,
    UserOutlined,
    CheckOutlined ,
  } from "@ant-design/icons";
  import { Space } from 'antd';
  import {
    SyncOutlined, CheckCircleTwoTone
  } from '@ant-design/icons';
import { Progress  } from "antd";


const Skills = () => {
  return (
    <div className="skills">
    <h3>Skills</h3>
    <div className="skills__menu">
      <p className="skills__menu-html skills__menu-text"> <CheckCircleTwoTone twoToneColor="#52c41a" className='skills__menu-icon' />  HTML
        <p><Progress percent={100} size="small" /></p>
      </p>
      <p className="skills__menu-css skills__menu-text"> <CheckCircleTwoTone twoToneColor="#52c41a" className='skills__menu-icon' /> CSS
        <p><Progress percent={100} size="small" /></p>
      </p>
      <p className="skills__menu-js skills__menu-text"> <SyncOutlined spin className='skills__menu-icon' />  JS
        <p><Progress percent={95} size="small" /></p>
      </p>
      <p className="skills__menu-react skills__menu-text"> <SyncOutlined spin className='skills__menu-icon' />  REACT
        <p><Progress percent={90} size="small" /></p>
      </p>
    </div>
  </div>
  )
}

export default Skills