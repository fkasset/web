import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { reactLocalStorage } from 'reactjs-localstorage';
import { getMessage } from '../locale/locale.js';
import string from '../string';

const LanguageDropdown = () => {
    const changeLanguage = (language)=>{
        reactLocalStorage.set('locale', language);
        window.location.reload();
    };
    const menu =(
        <Menu theme="dark">
            <Menu.Item className="language-item">
                <a onClick={() => changeLanguage('en')}>
                <img src={require('../img/flag/US.png')} /> English
                </a>
            </Menu.Item>
            <Menu.Item className="language-item">
                <a onClick={() => changeLanguage('ko')}>
                <img src={require('../img/flag/KR.png')} /> 한국어
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
      <div>
        <Dropdown overlay={menu} placement='topRight'>
            <a className='headerTopText' href="#">
              {string.localeName}   <Icon type="down" />
            </a>
        </Dropdown>
      </div>
    );
};

export default LanguageDropdown;