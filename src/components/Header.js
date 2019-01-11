import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Button, Menu, Form, Input, Icon } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import LanguageDropdown from './languageDropdown';
import string from '../string';

const FormItem = Form.Item;
class HeaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalMessage: false,
      collapsed: true
    }
  }
  componentDidMount () {
    global.document.body.addEventListener('click', this.myHandler);
  }
  componentWillUnmount () {
    global.document.body.removeEventListener('click', this.myHandler);
  }
  myHandler = () => {
    if (!this.state.collapsed) this.setState({collapsed: true})
  }
  contact = () => {
    this.setState({modal:true});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) 
      {
        this.setState({modal:false, modalMessage:true});
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="global-wrapper">
        <div className="global-container">
          <div className="header-wrapper">
            <div style={{float:'left', paddingTop: '15px', paddingRight: '50px'}}>
            <img src={require('../img/common/logo.png')}/>
            </div>
            <div className="full-menu" style={{float:'left', width: '700px'}}>
            <Menu
              theme="white"
              mode="horizontal"
              // mode="inline"
              selectedKeys={[this.props.selectedItem]}
              style={{ lineHeight: '84px' }}>
              <Menu.Item key="/">
                <Link exact to="/">
                  <span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '20px', marginRight: '20px'}}>{string.home}</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/offering">
                <Link exact to="/offering">
                  <span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '20px', marginRight: '20px'}} >{string.offering}</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/fkcoin">
                <Link exact to="/fkcoin">
                  <span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '20px', marginRight: '20px'}} >{string.coin}</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/company">
                <Link exact to="/company">
                  <span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '20px', marginRight: '20px'}} >{string.company}</span>
                </Link>
              </Menu.Item>
            </Menu>
            </div>
            {/* <div className="menu-contact" style={{}} onClick={this.contact} >
              <span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold'}} >문의하기</span>
            </div> */}
            <div className="burger-menu-button" style={{float:'right', paddingTop: '32px', marginRight: '-20px'}}>
              <Button onClick={()=>{this.setState({collapsed:!this.state.collapsed})}} style={{ backgroundColor: "transparent", borderWidth: "0px" }}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{ color: "black", fontSize: '24px' }} />
              </Button>
            </div>
            <div className="menu-language" style={{ padding: '30px 0px'}}>
              <LanguageDropdown/>
            </div>
          {this.state.collapsed ? null :
            <div className="burger-menu">
              <Menu
              theme="white"
                mode="inline"
                style={{ lineHeight: '84px', textAlign:'left' }}
              >
                <Menu.Item key="/">
                  <Link exact to="/">
                    <Icon type="home"/><span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '20px', marginRight: '20px'}}>홈</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/offering">
                  <Link exact to="/offering">
                    <Icon type="deployment-unit"/><span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '20px', marginRight: '20px'}} >오퍼링</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/fkcoin">
                  <Link exact to="/fkcoin">
                    <Icon type="dollar"/><span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '20px', marginRight: '20px'}} >FK COIN</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/company">
                  <Link exact to="/company">
                    <Icon type="team"/><span className="nav-text" style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '20px', marginRight: '20px'}} >회사정보</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>}
          </div>
        </div>
        <Modal
          isOpen={this.state.modal}
          style={modalStyles}
          onRequestClose={()=>this.setState({modal:false})}
        >
          <Form onSubmit={this.handleSubmit}>
            <div className="modal-wrapper">
              <div style={{ padding: '15px' }}>
                <div style={{ fontSize: '18px', letterSpacing: '-1px', color: '#000' }}>
                제휴문의
                </div>
                <div style={{ width: '23px', height: '2px', backgroundColor: '#00aab6', marginTop: '20px', marginBottom: '15px' }}></div>
                <div style={{ fontSize: '14px', letterSpacing: '-1px', color: '#686868', lineHeight: '19px', paddingBottom:'80px' }}>
                문의 내용을 작성해주시면 내용을 검토한 후 기재된 연락처로 답변을 드립니다.
                  <FormItem className="contact-content">
                    {getFieldDecorator('content', {
                      rules: [{ required: true, message: "문의내용을 입력해주세요", whitespace: true }],
                    })(
                      <TextArea rows={8} placeholder="문의내용" />
                    )}
                  </FormItem>
                  <FormItem className="contact-name">
                    {getFieldDecorator('name', {
                      rules: [{ required: true, message: "담당자명을 입력해주세요", whitespace: true }],
                    })(
                      <Input placeholder="담당자명" />
                    )}
                  </FormItem>
                  <FormItem className="contact-company">
                    {getFieldDecorator('company', {
                      rules: [{ required: true, message: "회사명을 입력해주세요", whitespace: true }],
                    })(
                      <Input placeholder="회사명" />
                    )}
                  </FormItem>
                  <FormItem className="contact-tel">
                    {getFieldDecorator('tel', {
                      rules: [{ required: true, message: "연락처를 입력해주세요", whitespace: true }],
                    })(
                      <Input placeholder="연락처" />
                    )}
                  </FormItem>
                  <FormItem className="contact-email">
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: "이메일을 입력해주세요", whitespace: true }],
                    })(
                      <Input placeholder="이메일" />
                    )}
                  </FormItem>

                </div>
              </div>
              <div style={{ height: '1px', backgroundColor: '#dadada', marginTop: '30px' }}></div>

              <div>
                <Button htmlType="submit" style={{ border: '0px', cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#1890ff', textAlign: 'center', float: 'left', width: '50%' }}>확인</Button>
                <div onClick={() => { this.setState({modal:false}) }} style={{ borderLeft: '1px solid #e0e0e0', cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#000', textAlign: 'center', float: 'left', width: '50%' }}>취소</div>
              </div>
            </div>
          </Form>
        </Modal>
        <Modal
          isOpen={this.state.modalMessage}
          style={modalStyles}
          onRequestClose={()=>this.setState({modal:false})}
        >
            <div className="modal-wrapper">
              <div style={{ padding: '15px' }}>
                <div style={{ fontSize: '18px', letterSpacing: '-1px', color: '#000' }}>
                제휴문의
                </div>
                <div style={{ width: '23px', height: '2px', backgroundColor: '#00aab6', marginTop: '20px', marginBottom: '15px' }}></div>
                <div style={{ fontSize: '14px', letterSpacing: '-1px', color: '#686868', lineHeight: '19px', paddingBottom:'30px' }}>
                문의하신 내용이 정상적으로 접수되었습니다.<br/>
                제안해 주신 좋은 의견은 담당자가 검토한 후 <br/>
                작성해 주신 연락처로 답변을 드릴 예정입니다.
                </div>
              </div>
              <div style={{ height: '1px', backgroundColor: '#dadada' }}></div>
              <div>
                <div onClick={() => { this.setState({modalMessage:false}) }} style={{ cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#000', textAlign: 'center', float: 'left', width: '100%' }}>닫기</div>
              </div>
            </div>
        </Modal>
      </div>
    );
  }
}
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    borderColor: '#dadada',
    borderRadius: '5px',
    padding: 0
  }
};

let Header = Form.create()(HeaderForm);
export default Header;