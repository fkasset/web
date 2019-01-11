import React, { Component } from 'react';
import string from '../string';

class Offering extends Component {

  render() {
    return (
      <div className="global-wrapper">
        <div className="global-container">
          <div className="center-background offer_1" style={{ backgroundImage: `url(${require("../img/offer_1.png")})`, height: '360px' }}>
            <div className="offer_title">{string.offer_title}</div>
            <div className="offer_subtitle">{string.offer_subtitle}</div>
          </div>
          <div className="center-background mobile_offer_1" style={{ backgroundImage: `url(${require("../img/m_offer_1.png")})`, height: '360px' }}>
            <div className="offer_title" dangerouslySetInnerHTML={{ __html: string.m_offer_title }} />
            <div className="offer_subtitle" dangerouslySetInnerHTML={{ __html: string.m_offer_subtitle }} />
          </div>
          <div className="center-background offer_2" style={{ backgroundImage: `url(${require("../img/offer_2.png")})`, height: '622px' }}>
            <div className="offer_title_1">{string.offer_title_1}</div>
            <div className="offer_subtitle_1" dangerouslySetInnerHTML={{ __html: string.offer_subtitle_1 }} />
          </div>
          <div className="center-background mobile_offer_2" style={{ backgroundImage: `url(${require("../img/m_offer_2.png")})`, height: '2162px' }}>
            <div className="offer_hotel_title" style={string.offer_hotel_title_css} dangerouslySetInnerHTML={{ __html: string.offer_hotel_title }} />
            <div className="offer_hotel_subtitle" dangerouslySetInnerHTML={{ __html: string.offer_hotel_subtitle }} />
            <div className="offer_hotle_img"><img src={require('../img/m_operation.png')} /></div>
            <div className="offer_hotel_text_1">
              {string.offer_hotel_operation}</div>
            <div className="offer_hotel_text_2" style={string.offer_hotel_text_2_css} dangerouslySetInnerHTML={{ __html: string.m_offer_hotel_operation_1 }} />
            <div className="offer_hotle_img"><img src={require('../img/m_sales.png')} /></div>
            <div className="offer_hotel_text_1">
              {string.offer_hotel_sales}</div>
            <div className="offer_hotel_text_2" style={string.offer_hotel_text_2_css} dangerouslySetInnerHTML={{ __html: string.m_offer_hotel_sales_1 }} />
            <div className="offer_hotle_img"><img src={require('../img/m_marketing.png')} /></div>
            <div className="offer_hotel_text_1">
              {string.offer_hotel_marketing}</div>
            <div className="offer_hotel_text_2" style={string.offer_hotel_text_2_css} dangerouslySetInnerHTML={{ __html: string.m_offer_hotel_marketing_1 }} />
            <div className="offer_hotle_img"><img src={require('../img/m_edu.png')} /></div>
            <div className="offer_hotel_text_1">
              {string.offer_hotel_edu}</div>
            <div className="offer_hotel_text_2" style={string.offer_hotel_text_2_css} dangerouslySetInnerHTML={{ __html: string.m_offer_hotel_edu_1 }} />
            <div className="offer_hotle_img"><img src={require('../img/m_coin.png')} /></div>
            <div className="offer_hotel_text_1">
              {string.offer_hotel_coin}</div>
            <div className="offer_hotel_text_2" style={string.offer_hotel_text_2_css} dangerouslySetInnerHTML={{ __html: string.m_offer_hotel_coin_1 }} />
          </div>
          <div className="center-background offer_3" style={{ backgroundImage: `url(${require("../img/offer_3.png")})`, height: '1872px' }}>
            <div className="offer_hotel_title">{string.offer_hotel_title}</div>
            <div className="offer_hotel_subtitle">{string.offer_hotel_subtitle}</div>
            <div className="offer_hotel_box">
              <div className="offer_hotel_con">
                <div className="offer_hotel_operation_text">
                  <div className="offer_hotel_text_1">
                    {string.offer_hotel_operation}
                    <div className="offer_hotel_text_2" dangerouslySetInnerHTML={{ __html: string.offer_hotel_operation_1 }} />
                  </div>
                </div>
                <div className="offer_hotel_operation_img">
                  <div className="offer_hotel_operation_img_1">
                    <img src={require('../img/operation.png')} />
                  </div>
                </div>
              </div>
              <div className="offer_hotel_con">
                <div className="offer_hotel_sales_img">
                  <div className="offer_hotel_sales_img_1">
                    <img src={require('../img/sales.png')} />
                  </div>
                </div>
                <div className="offer_hotel_sales_text">
                  <div className="offer_hotel_text_1">
                    {string.offer_hotel_sales}
                    <div className="offer_hotel_text_2" dangerouslySetInnerHTML={{ __html: string.offer_hotel_sales_1 }} />
                  </div>
                </div>
              </div>
              <div className="offer_hotel_con">
                <div className="offer_hotel_marketing_text">
                  <div className="offer_hotel_text_1">
                    {string.offer_hotel_marketing}
                    <div className="offer_hotel_text_2" dangerouslySetInnerHTML={{ __html: string.offer_hotel_marketing_1 }} />
                  </div>
                </div>
                <div className="offer_hotel_marketing_img">
                  <div className="offer_hotel_marketing_img_1">
                    <img src={require('../img/marketing.png')} />
                  </div>
                </div>
              </div>
              <div className="offer_hotel_con">
                <div className="offer_hotel_edu_img">
                  <div className="offer_hotel_edu_img_1">
                    <img src={require('../img/edu.png')} />
                  </div>
                </div>
                <div className="offer_hotel_edu_text">
                  <div className="offer_hotel_text_1">
                    {string.offer_hotel_edu}
                    <div className="offer_hotel_text_2" dangerouslySetInnerHTML={{ __html: string.offer_hotel_edu_1 }} />
                  </div>
                </div>
              </div>
              <div className="offer_hotel_con">
                <div className="offer_hotel_coin_text">
                  <div className="offer_hotel_text_1">
                    {string.offer_hotel_coin}
                    <div className="offer_hotel_text_2" dangerouslySetInnerHTML={{ __html: string.offer_hotel_coin_1 }} />
                  </div>
                </div>
                <div className="offer_hotel_coin_img">
                  <div className="offer_hotel_coin_img_1">
                    <img src={require('../img/coin.png')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-background mobile_offer_3" style={{ backgroundImage: `url(${require("../img/m_offer_3.png")})`, height: '1551px' }}>
            <div className="offer_medi_title">{string.offer_medi_title}</div>
            <div className="m_offer_medi_1">{string.offer_medi_1}</div>
            <div className="m_offer_medi_con_1" dangerouslySetInnerHTML={{ __html: string.m_offer_medi_con_1 }} />
            <div className="m_offer_medi_2">{string.offer_medi_2}</div>
            <div className="m_offer_medi_con_2" dangerouslySetInnerHTML={{ __html: string.m_offer_medi_con_2 }} />
            <div className="m_offer_medi_3">{string.offer_medi_3}</div>
            <div className="m_offer_medi_con_3" dangerouslySetInnerHTML={{ __html: string.m_offer_medi_con_3 }} />
            <div className="m_offer_medi_4">{string.offer_medi_4}</div>
            <div className="m_offer_medi_con_4" dangerouslySetInnerHTML={{ __html: string.m_offer_medi_con_4 }} />
            <div className="m_offer_medi_5">{string.offer_medi_5}</div>
            <div className="m_offer_medi_con_5" dangerouslySetInnerHTML={{ __html: string.m_offer_medi_con_5 }} />
          </div>
          <div className="center-background offer_4" style={{ backgroundImage: `url(${require("../img/offer_4.png")})`, height: '1379px' }}>
            <div className="offer_medi_box">
              <div className="offer_medi" style={{ width: '1200px' }}>
                <div className="offer_medi_title">{string.offer_medi_title}</div>
                <div className="offer_medi_1">{string.offer_medi_1}</div>
                <div className="offer_medi_con_1" dangerouslySetInnerHTML={{ __html: string.offer_medi_con_1 }} />
                <div className="offer_medi_2">{string.offer_medi_2}</div>
                <div className="offer_medi_con_2" dangerouslySetInnerHTML={{ __html: string.offer_medi_con_2 }} />
                <div className="offer_medi_3">{string.offer_medi_3}</div>
                <div className="offer_medi_con_3" dangerouslySetInnerHTML={{ __html: string.offer_medi_con_3 }} />
                <div className="offer_medi_4">{string.offer_medi_4}</div>
                <div className="offer_medi_con_4" dangerouslySetInnerHTML={{ __html: string.offer_medi_con_4 }} />
                <div className="offer_medi_5">{string.offer_medi_5}</div>
                <div className="offer_medi_con_5" dangerouslySetInnerHTML={{ __html: string.offer_medi_con_5 }} />
              </div>
            </div>
          </div>
          <div className="center-background mobile_offer_4" style={{ backgroundImage: `url(${require("../img/m_offer_4.png")})`, height: '833px' }}>
            <div className="offer_ecom_title">{string.offer_ecom_title}</div>
            <div className="offer_ecom_subtitle">{string.offer_ecom_subtitle}</div>
            <div className="offer_ecom_subtitle_1" dangerouslySetInnerHTML={{ __html: string.m_offer_ecom_subtitle_1 }} />
            <div className="relation_img" style={{backgroundImage: string.offering_relation, height: '339px'}} />
            <div className="offer_offer_partner" dangerouslySetInnerHTML={{ __html: string.m_offer_partner }} />
            {/* <div className="offer_ecom_box">
              <div className="offer_ecom_relation" style={{ width: '380px' }}>
                <div className="offer_ecom_ecom">{string.offer_ecom_ecom}</div>
                <div className="offer_ecom_sidedes" style={{ display: 'flex' }}>
                  <div className="offer_ecom_sidedes_left_1" style={{ flex: '1' }} dangerouslySetInnerHTML={{ __html: string.m_offer_ecom_con_1 }} />
                  <div className="offer_ecom_sidedes_right_1" style={{ flex: '1' }} dangerouslySetInnerHTML={{ __html: string.m_offer_ecom_con_2 }} />
                </div>
                
                  <div className="offer_ecom_sidedes_left_2" dangerouslySetInnerHTML={{ __html: string.offer_ecom_medi }} />
                  <div className="offer_ecom_sidedes_right_2" dangerouslySetInnerHTML={{ __html: string.m_offer_ecom_hotel }} />
                <div className="offer_ecom_des" dangerouslySetInnerHTML={{ __html: string.m_offer_ecom_con_3 }} />
                <div className="offer_offer_partner" dangerouslySetInnerHTML={{ __html: string.m_offer_partner }} />
              </div>
            </div> */}
          </div>
          <div className="center-background offer_5" style={{ backgroundImage: `url(${require("../img/offer_5.png")})`, height: '1459px' }}>
            <div className="offer_ecom_title">{string.offer_ecom_title}</div>
            <div className="offer_ecom_subtitle">{string.offer_ecom_subtitle}</div>
            <div className="offer_ecom_subtitle_1" dangerouslySetInnerHTML={{ __html: string.offer_ecom_subtitle_1 }} />
            <div className="offer_ecom_box">
              <div className="offer_ecom_relation" style={{ width: '1200px' }}>
                <div className="offer_ecom_ecom">{string.offer_ecom_ecom}</div>
                <div className="offer_ecom_sidedes" style={{ display: 'flex' }}>
                  <div className="offer_ecom_sidedes_left_1" style={{ flex: '1' }} dangerouslySetInnerHTML={{ __html: string.offer_ecom_con_1 }} />
                  <div className="offer_ecom_sidedes_right_1" style={{ flex: '1' }} dangerouslySetInnerHTML={{ __html: string.offer_ecom_con_2 }} />
                </div>
                <div className="offer_ecom_sidedes_1" style={{ display: 'flex' }}>
                  <div className="offer_ecom_sidedes_left_2" style={{ flex: '1' }} dangerouslySetInnerHTML={{ __html: string.offer_ecom_medi }} />
                  <div className="offer_ecom_sidedes_right_2" style={{ flex: '1' }} dangerouslySetInnerHTML={{ __html: string.offer_ecom_hotel }} />
                </div>
                <div className="offer_ecom_des" dangerouslySetInnerHTML={{ __html: string.offer_ecom_con_3 }} />
                <div className="offer_offer_partner">{string.offer_partner}</div>
              </div>
            </div>
          </div>
          {/* <div className="center-background mobile_offer_5" style={{backgroundImage: `url(${require("../img/m_common_1.png")})`, height: '268px'}}/> */}

        </div>
      </div>
    );
  }
};

export default Offering;