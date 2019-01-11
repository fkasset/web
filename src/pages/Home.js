import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Button, Menu, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import string from '../string';

const FormItem = Form.Item;


class HomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalMessage: false
    }
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
          <div className="center-background main_1" style={{backgroundImage: `url(${require("../img/main_1.png")})`, height: '957px'}}>
            <div className="main_title">{string.maintitle}</div>
            <div className="main_subtitle">{string.subtitle}</div>
            <div className="mainsec1_1">{string.mainsec1_1}</div>
            <div className="mainsec1_2" dangerouslySetInnerHTML={{__html:string.mainsec1_2}} />
          </div>
          <div className="center-background main_mobile_1" style={{backgroundImage: `url(${require("../img/m_main_1.png")})`, height: '642px'}}>
            <div className="main_title">{string.maintitle}</div>
            <div className="main_subtitle" dangerouslySetInnerHTML={{__html:string.m_subtitle}} />
            <div className="mainsec1_1" style={string.mainsec1_1_css} dangerouslySetInnerHTML={{__html:string.m_mainsec1_1}} />
            <div className="mainsec1_2" dangerouslySetInnerHTML={{__html:string.m_mainsec1_2}} />
          </div>
          <div className="mid-menu-wrapper" style={{ backgroundColor: '#000', padding: '10px'}}>
            <div className="mid-menu" onClick={()=>{global.location.href='#tab1'}}>{string.mainsubmenu1}</div>
            <div className="mid-menu" onClick={()=>{global.location.href='#tab2'}}>{string.mainsubmenu2}</div>
            <div className="mid-menu" onClick={()=>{global.location.href='#tab3'}}>{string.mainsubmenu3}</div>
            <div className="mid-menu" onClick={()=>{global.location.href='#tab4'}}>{string.mainsubmenu4}</div>
          </div>
          <a name="tab1"/>
          <div className="center-background main_2" style={{backgroundImage: `url(${require("../img/main_2.png")})`, height: '1426px'}}>
            <div className="mainsec2_1">{string.mainsec2_1}</div>
            <div className="mainsec2_2" dangerouslySetInnerHTML={{__html:string.mainsec2_2}} />
            <div className="mainsec2_3">{string.mainsec2_3}</div>
            <div className="mainsec2_business_box">
              <div className="mainsec2_4">
                <div className="mainsec2_4_title">{string.mainsec2_4}
                  <div className="mainsec2_4_subtitle">{string.mainsec2_4_1}</div>
                </div>
                <div className="mainsec2_4_img"><img src={require('../img/main_2_1.png')} style={{ alignItems: 'center' }} /></div>
              </div>
              <div className="mainsec2_5">
                <div className="mainsec2_5_img"><img src={require('../img/main_2_2.png')} style={{ alignItems: 'center' }} />
                </div>
                <div className="mainsec2_5_title">{string.mainsec2_5}
                  <div className="mainsec2_5_subtitle">{string.mainsec2_5_1}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-background main_mobile_2" style={{backgroundImage: `url(${require("../img/m_main_2.png")})`, height: '1038px'}}>
            <div className="mainsec2_1" dangerouslySetInnerHTML={{__html:string.m_mainsec2_1}} />
            <div className="mainsec2_2" dangerouslySetInnerHTML={{__html:string.m_mainsec2_2}} />
            <div className="mainsec2_3">{string.mainsec2_3}</div>
            <div className="m_mainsec2_4_img"><img src={require('../img/m_main_2_1.png')} /></div>
            <div className="m_mainsec2_4_title">{string.mainsec2_4}</div>
            <div className="mainsec2_4_subtitle" dangerouslySetInnerHTML={{__html:string.m_mainsec2_4_1}} />
            <div className="m_mainsec2_5_img"><img src={require('../img/m_main_2_2.png')} /></div>
            <div className="m_mainsec2_5_title">{string.mainsec2_5}</div>
            <div className="mainsec2_5_subtitle" dangerouslySetInnerHTML={{__html:string.m_mainsec2_5_1}} />
          </div>
          <a name="tab2"/>
          <div className="center-background main_3" style={{backgroundImage: `url(${require("../img/main_3.png")})`, height: '1278px'}}>
            <div className="mainsec3">{string.mainsubmenu2}</div>
            <div className="mainsec3_title">{string.mainsec3_1}</div>
            <div className="mainsec3_subtitle" dangerouslySetInnerHTML={{__html:string.mainsec3_2}}></div>
            <div className="mainsec3_blockchain">{string.mainsec3_3}</div>
            <div className="mainsec3_con">
              <div className="mainsec3_con_pure">
                <div className="mainsec3_con_pure_img">
                  <img src={require('../img/pure.png')} />
                </div>
                <div className="mainsec3_con_pure_text">
                  {string.mainsec3_4}
                  <div className="mainsec3_pure_text1" dangerouslySetInnerHTML={{__html:string.mainsec3_5}} />
                </div>
              </div>
              <div className="mainsec3_con_speed">
                <div className="mainsec3_con_speed_img">
                  <img src={require('../img/speed.png')} />
                </div>
                <div className="mainsec3_con_speed_text">
                  {string.mainsec3_6}
                  <div className="mainsec3_speed_text1" dangerouslySetInnerHTML={{__html:string.mainsec3_7}}>
                  </div>
                </div>
              </div>
              <div className="mainsec3_con_security">
                <div className="mainsec3_con_security_img">
                  <img src={require('../img/security.png')} />
                </div>
                <div className="mainsec3_con_security_text">
                  {string.mainsec3_8}
                  <div className="mainsec3_security_text1" dangerouslySetInnerHTML={{__html:string.mainsec3_9}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-background main_mobile_3" style={{backgroundImage: `url(${require("../img/m_main_3.png")})`, height: '1496px'}}>
            <div className="mainsec3" style={string.mainsec3_css}>{string.mainsubmenu2}</div>
            <div className="mainsec3_title" dangerouslySetInnerHTML={{__html:string.m_mainsec3_1}} />
            <div className="mainsec3_subtitle" dangerouslySetInnerHTML={{__html:string.m_mainsec3_2}} />
            <div className="mainsec3_blockchain" style={string.mainsec3_blockchain_css} dangerouslySetInnerHTML={{__html:string.m_mainsec3_3}} />
            <div className="m_mainsec3_con_pure_img"><img src={require('../img/m_pure.png')} /></div>
            <div className="m_mainsec3_con_pure_text">{string.mainsec3_4}</div>
            <div className="m_mainsec3_text1" style={string.m_mainsec3_text1_css} dangerouslySetInnerHTML={{__html:string.m_mainsec3_5}
            } />
            <div className="m_mainsec3_con_speed_img"><img src={require('../img/m_speed.png')} /></div>
            <div className="m_mainsec3_con_speed_text">{string.mainsec3_6}</div>
            <div className="m_mainsec3_text1" style={string.m_mainsec3_text1_css} dangerouslySetInnerHTML={{__html:string.m_mainsec3_7}} />
            <div className="m_mainsec3_con_security_img"><img src={require('../img/m_security.png')} /></div>
            <div className="m_mainsec3_con_security_text">{string.mainsec3_8}</div>
            <div className="m_mainsec3_text1" style={string.m_mainsec3_text1_css} dangerouslySetInnerHTML={{__html:string.m_mainsec3_9}} />
          </div>
          <a name="tab3"/>
          

          {/* <div className="center-background main_mobile_1" style={{backgroundImage: `url(${require("../img/m_main_1.png")})`, height: '642px'}}/>
          <div className="center-background main_2" style={{backgroundImage: `url(${require("../img/main_2.png")})`, height: '1426px'}}/>
          <div className="center-background main_mobile_2" style={{backgroundImage: `url(${require("../img/m_main_2.png")})`, height: '1035px'}}/>
          <div className="center-background main_3" style={{backgroundImage: `url(${require("../img/main_3.png")})`, height: '1282px'}}/>
          <div className="center-background main_mobile_3" style={{backgroundImage: `url(${require("../img/m_main_3.png")})`, height: '1493px'}}/> */}
          
          
          <div className="center-background main_4" style={{backgroundImage: `url(${require("../img/main_4.png")})`, height: '1165px'}}>
            <div className="mainsec4_title">
              {string.mainsubmenu3}
            </div>
            <div className="mainsec4_con">
              <div className="mainsec4_box">
                <div className="mainsec4_subcon1" style={{ backgroundImage: `url(${require("../img/global1.png")})` }}>
                  <div className="mainsec4_subcon1_text1" dangerouslySetInnerHTML={{__html:string.mainsec4_1}} />
                  <div className="mainsec4_subcon1_text2"  dangerouslySetInnerHTML={{__html:string.mainsec4_3}} />
                </div>
                <div style={{ flex: '0.2' }} />
                <div className="mainsec4_subcon2" style={{ backgroundImage: `url(${require("../img/global2.png")})` }}>
                  <div className="mainsec4_subcon2_text1" dangerouslySetInnerHTML={{__html:string.mainsec4_2}} />
                  <div className="mainsec4_subcon2_text2"  dangerouslySetInnerHTML={{__html:string.mainsec4_6}} />
                </div>
              </div>
            </div>
            <a name="tab4"/>
            <div className="contact">
              <div>
                <div className="contact_title">
                {string.mainsec5_1}
                </div>
                <div className="contact_subtitle">
                  {string.mainsec5_2}
                </div>
                <div style={{ position: 'relative', top: '100px', cursor: 'pointer' }} onClick={this.contact}>
                  <Button htmlType="submit" style={{ borderheight: '1px', borderColor: '#fff', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#fff', textAlign: 'center', width: '10%', height: '10%' }}>{string.mainsec5_3}</Button>
                </div>
              </div>
          
              <div className="center-background main_mobile_4" style={{ backgroundImage: `url(${require("../img/m_main_4.png")})`, height: '1362px' }}>
                <div style={{ position: 'relative', top: '1250px', cursor: 'pointer' }} onClick={this.contact}>
                  <img src={require('../img/main_button.png')} />
                </div>

              </div>
          </div>
          </div>

          <div className="center-background main_mobile_4" style={{backgroundImage: `url(${require("../img/m_main_4.png")})`, height: '1365px' }}>
            <div className="mainsec4_title">{string.mainsubmenu3}</div>
            <div className="m_mainsec4_subcon1">
            <div className="m_mainsec4_subcon1_text1" dangerouslySetInnerHTML={{__html:string.mainsec4_1}} />
            <div className="m_mainsec4_subcon1_text2"  dangerouslySetInnerHTML={{__html:string.m_mainsec4_3}} />
            </div>
            <div style={{ padding: '5px' }} />
            <div className="m_mainsec4_subcon2" style={{ backgroundImage: `url(${require("../img/m_global2.png")})` }}>
            <div className="m_mainsec4_subcon2_text1" style={string.m_mainsec4_subcon2_text1_css} dangerouslySetInnerHTML={{__html:string.mainsec4_2}} />
            <div className="m_mainsec4_subcon2_text2"  dangerouslySetInnerHTML={{__html:string.m_mainsec4_6}} />
            </div>
                <div className="contact_title" dangerouslySetInnerHTML={{__html:string.m_mainsec5_1}} />
                <div className="contact_subtitle">
                  {string.mainsec5_2}
                </div>
                <div style={{ position: 'relative', top: '60px', cursor: 'pointer' }} onClick={this.contact}>
                  <Button htmlType="submit" style={{ borderheight: '1px', borderColor: '#fff', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#fff', textAlign: 'center', width: '30%', height: '10%' }}>{string.mainsubmenu4}</Button>
                </div>
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
                {string.contact_title}
                </div>
                <div style={{ width: '23px', height: '2px', backgroundColor: '#00aab6', marginTop: '20px', marginBottom: '15px' }}></div>
                <div style={{ fontSize: '14px', letterSpacing: '-1px', color: '#686868', lineHeight: '19px', paddingBottom:'80px' }}>
                {string.contact_subtitle}
                  <FormItem className="contact-content">
                    {getFieldDecorator('content', {
                      rules: [{ required: true, message: string.contact_inquirymsg, whitespace: true }],
                    })(
                      <TextArea rows={8} placeholder={string.contact_contents} />
                    )}
                  </FormItem>
                  <FormItem className="contact-name">
                    {getFieldDecorator('name', {
                      rules: [{ required: true, message: string.contact_namemsg, whitespace: true }],
                    })(
                      <Input placeholder={string.contact_name} />
                    )}
                  </FormItem>
                  <FormItem className="contact-company">
                    {getFieldDecorator('company', {
                      rules: [{ required: true, message: string.contact_companymsg, whitespace: true }],
                    })(
                      <Input placeholder={string.contact_company} />
                    )}
                  </FormItem>
                  <FormItem className="contact-tel">
                    {getFieldDecorator('tel', {
                      rules: [{ required: true, message: string.contact_telmsg, whitespace: true }],
                    })(
                      <Input placeholder={string.contact_tel} />
                    )}
                  </FormItem>
                  <FormItem className="contact-email">
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: string.contact_emailmsg, whitespace: true }],
                    })(
                      <Input placeholder={string.contact_email} />
                    )}
                  </FormItem>

                </div>
              </div>
              <div style={{ height: '1px', backgroundColor: '#dadada', marginTop: '30px' }}></div>

              <div>
                <Button htmlType="submit" style={{ border: '0px', cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#1890ff', textAlign: 'center', float: 'left', width: '50%' }}>{string.contact_submit}</Button>
                <div onClick={() => { this.setState({modal:false}) }} style={{ borderLeft: '1px solid #e0e0e0', cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#000', textAlign: 'center', float: 'left', width: '50%' }}>{string.contact_cancel}</div>
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
                {string.contact_title}
                </div>
                <div style={{ width: '23px', height: '2px', backgroundColor: '#00aab6', marginTop: '20px', marginBottom: '15px' }}></div>
                <div style={{ fontSize: '14px', letterSpacing: '-1px', color: '#686868', lineHeight: '19px', paddingBottom:'30px' }} dangerouslySetInnerHTML={{__html:string.contact_submitmsg}} />
              </div>
              <div style={{ height: '1px', backgroundColor: '#dadada' }}></div>
              <div>
                <div onClick={() => { this.setState({modalMessage:false}) }} style={{ cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#000', textAlign: 'center', float: 'left', width: '100%' }}>{string.contact_close}</div>
              </div>
            </div>
        </Modal>
      </div>
    );
  }
};

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

let Home = Form.create()(HomeForm);
export default Home;