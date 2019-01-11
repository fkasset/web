import React from 'react';
import Modal from 'react-modal';
import string from '../string';
import { Link } from 'react-router-dom';
import WhitePaper from '../doc/whitepaper_fkcoin.pdf';

class Fkcoin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }
  render() {
    return (
      <div className="global-wrapper">
        <div className="global-container">
          <div className="center-background coin_1" style={{ backgroundImage: `url(${require("../img/coin_1.png")})`, height: '360px' }}>
            <div className="coin_title">{string.coin_title}</div>
            <div className="coin_subtitle" dangerouslySetInnerHTML={{ __html: string.coin_subtitle }} />
          </div>
          <div className="center-background mobile_coin_1" style={{ backgroundImage: `url(${require("../img/m_coin_1.png")})`, height: '361px' }}>
            <div className="coin_title">{string.coin_title}</div>
            <div className="coin_subtitle" dangerouslySetInnerHTML={{ __html: string.m_coin_subtitle }} />
          </div>
          <div className="center-background coin_2" style={{ backgroundImage: `url(${require("../img/coin_2.png")})`, height: '580px' }}>
            <div className="coin_about">{string.coin_about}</div>
            <div className="coin_about_box">
              <div className="coin_about_img">
                <img src={require('../img/coin_about.png')} />
              </div>
              <div className="coin_about_text" dangerouslySetInnerHTML={{ __html: string.coin_about_1 }} />
            </div>
          </div>
          <div className="center-background mobile_coin_2" style={{ backgroundImage: `url(${require("../img/m_coin_2.png")})`, height: '735px' }}>
            <div className="m_coin_about">{string.coin_about}</div>
            <div className="m_coin_about_img"><img src={require('../img/m_coin_about.png')} /></div>
            <div className="m_coin_about_text" dangerouslySetInnerHTML={{ __html: string.m_coin_about_1 }} />
          </div>
          <div className="center-background coin_3" style={{ backgroundImage: `url(${require("../img/coin_3.png")})`, height: '1082px' }}>
            <div className="coin_roadmap">{string.coin_roadmap}</div>
            <div className="coin_roadmap_con">
              <div className="coin_roadmap_box">
                <div className="coin_roadmap_up_1">
                  <div className="coin_roadmap_up_1_1" dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_1 }} />
                  <div className="coin_roadmap_up_1_2">{string.coin_roadmap_date_1}</div>
                </div>
                <div className="coin_roadmap_up_2">
                  <div className="coin_roadmap_up_2_1" style={string.coin_roadmap_up_2_1} dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_3 }} />
                  <div className="coin_roadmap_up_2_2">{string.coin_roadmap_date_3}</div>
                </div>
                <div className="coin_roadmap_up_3">
                  <div className="coin_roadmap_up_3_1" style={string.coin_roadmap_up_3_1} dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_5 }} />
                  <div className="coin_roadmap_up_3_2" >{string.coin_roadmap_date_5}</div>
                </div>
              </div>
            </div>
            <div className="coin_roadmap_con">
              <div className="coin_roadmap_box">
                <div className="coin_roadmap_down_1">
                  <div className="coin_roadmap_down_1_1">{string.coin_roadmap_date_2}</div>
                  <div className="coin_roadmap_down_1_2" dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_2 }} />

                </div>
                <div className="coin_roadmap_down_2">
                  <div className="coin_roadmap_down_2_1">{string.coin_roadmap_date_4}</div>
                  <div className="coin_roadmap_down_2_2" dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_4 }} />

                </div>
              </div>
            </div>
          </div>
          <div className="center-background mobile_coin_3" style={{ backgroundImage: `url(${require("../img/m_coin_3.png")})`, height: '1437px' }}>
            <div className="coin_roadmap">{string.coin_roadmap}</div>
            <div className="m_coin_roadmap_con">
            <div className="m_coin_roadmap_box">
              <div className="coin_roadmap_left">
                <div className="coin_roadmap_left_date_1">{string.coin_roadmap_date_2}</div>
                <div className="coin_roadmap_left_con_1" dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_2 }} />
                <div className="coin_roadmap_left_date_2" style={string.coin_roadmap_left_date_2_css}>{string.coin_roadmap_date_3}</div>
                <div className="coin_roadmap_left_con_2" dangerouslySetInnerHTML={{ __html: string.m_coin_roadmap_con_3 }} />
                <div className="coin_roadmap_left_date_3">{string.coin_roadmap_date_5}</div>
                <div className="coin_roadmap_left_con_3" dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_5 }} />
              </div>
              <div className="coin_roadmap_right">
                <div className="coin_roadmap_right_date_1">{string.coin_roadmap_date_1}</div>
                <div className="coin_roadmap_right_con_1" dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_1 }} />
                <div className="coin_roadmap_right_date_2">{string.coin_roadmap_date_4}</div>
                <div className="coin_roadmap_right_con_2" dangerouslySetInnerHTML={{ __html: string.coin_roadmap_con_4 }} />
              </div>
            </div>
            </div>
          </div>
          <div className="center-background coin_4" style={{ backgroundImage: `url(${require("../img/coin_4.png")})`, height: '1104px' }}>
            <div className="coin_whitepaper">{string.coin_whitepaper}</div>
            <div style={{ position: 'relative', top: '550px', cursor: 'pointer' }}>
            <a href="http://116.125.120.21/whitepaper_fkcoin.pdf" target="_blank"><img src={require('../img/coin_button.png')} /></a>
            </div>
            <div className="coin_partner">{string.coin_partner}</div>
          </div>
          <div className="center-background mobile_coin_4" style={{ backgroundImage: `url(${require("../img/m_coin_4.png")})`, height: '794px' }}>
            <div className="coin_whitepaper">{string.coin_whitepaper}</div>
            <div style={{ position: 'relative', top: '380px', cursor: 'pointer' }}>
            <a href="http://116.125.120.21/whitepaper_fkcoin.pdf" target="_blank"><img src={require('../img/coin_button1.png')} /></a>
            </div>
            <div className="m_coin_partner" dangerouslySetInnerHTML={{ __html: string.m_coin_partner }} />
          </div>
          {/* <div className="center-background coin_5" style={{ backgroundImage: `url(${require("../img/common_contact.png")})`, height: '330px' }} />
          <div className="center-background mobile_coin_5" style={{ backgroundImage: `url(${require("../img/m_common_1.png")})`, height: '268px' }} /> */}
        </div>
        <Modal
          isOpen={this.state.modal}
          style={modalStyles}
          onRequestClose={() => this.setState({ modal: false })}
        >
          <div className="modal-wrapper">
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '18px', letterSpacing: '-1px', color: '#000' }}>
                FK Coin White Paper
                </div>
              <div style={{ width: '23px', height: '2px', backgroundColor: '#00aab6', marginTop: '20px', marginBottom: '15px' }}></div>
              <div style={{ fontSize: '14px', letterSpacing: '-1px', color: '#686868', lineHeight: '19px', paddingBottom: '30px' }}>
                FK Coin의 백서는 변경된 비즈니스 내용 반영을 위해<br />
                18년 12월 초까지 수정작업을 진행하고 있습니다. <br />
                관련 정보는 향후 공지사항을 통해 안내드릴 예정입니다.
                </div>
            </div>
            <div style={{ height: '1px', backgroundColor: '#dadada' }}></div>
            <div>
              <div onClick={() => { this.setState({ modal: false }) }} style={{ cursor: 'pointer', fontSize: '17px', padding: '10px', color: '#000', textAlign: 'center', float: 'left', width: '100%' }}>닫기</div>
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

export default Fkcoin;