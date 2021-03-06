import React, { Component } from 'react';
// import Flag from 'react-native-flags';
// import * as Flag from 'react-native-flags/flags';

const string = {
  localeName: (<img src={require('../img/flag/KR.png')} />),
  /*********이미지**********/
  companyChart: `url(${require("../img/company_chart.png")})`,
  companyChartMobile: `url(${require("../img/m_teamchart.png")})`,
  offering_relation: `url(${require("../img/relation.png")})`,
 /*********로드맵한글정렬**********/
  coin_roadmap_up_2_1: {fontSize: '17px', color: '#fff', paddingTop: '190px', paddingLeft: '55px'},
  coin_roadmap_up_3_1: {fontSize: '17px', color: '#fff', paddingTop: '210px', paddingLeft: '55px'},
  /*********메뉴**********/
  home:'홈',
  offering:'오퍼링',
  coin:'FK COIN',
  company:'회사정보',
  /*********메인**********/
  maintitle:'FK ASSET',
  subtitle:'BLOCK CHAIN Technology',
  m_subtitle:'BLOCK CHAIN<br/>Technology',
  mainsec1_1:'현실적 자산으로의 가치실현',
  m_mainsec1_1:'현실적 자산으로의 가치실현',
  mainsec1_2:'FK ASSET은 4차 산업혁명의 핵심기술로 부각되는 블록체인 기술을 실생활에서<br/>스마트하게 다각적으로 사용 할 수 있을 뿐만 아니라 현실적 결제, 교환 수단으로써의 가치를 실현합니다.',
  m_mainsec1_2:'FK ASSET은 4차 산업혁명의 핵심기술로 부각되는<br/>블록체인 기술을 실생활에서 스마트하게 다각적으로<br/>사용 할 수 있을 뿐만 아니라<br/>현실적 결제, 교환 수단으로써의 가치를 실현합니다.',
  mainsubmenu1:'사업배경',
  mainsubmenu2:'블록체인이란?',
  mainsubmenu3:'글로벌 비즈니스',
  mainsubmenu4:'문의하기',
  mainsec2_1:'FK ASSET은 블록체인 기술을 혁신합니다',
  m_mainsec2_1:'FK ASSET은<br/>블록체인 기술을 혁신합니다',
  mainsec2_2:'FK ASSET은 블록체인 기술을 호텔, 리조트, 의료, 쇼핑몰 등 타 산업 영역에도 범용적으로 사용할 수 있도록<br/>FK Coin을 통하여 서비스 합니다.',
  m_mainsec2_2:'FK ASSET은 블록체인 기술을 호텔, 리조트, 의료, 쇼핑몰<br/>타 산업 영역에도 범용적으로 사용할 수 있도록<br/>FK Coin을 통하여 서비스 합니다.',
  mainsec2_3:'주요 특징',
  mainsec2_4:'안전한 자산 관리',
  mainsec2_4_1:'블록체인 기술 기반의 서비스 플랫폼을 제공합니다. 모든 거래 참여자들이 서로 정보를 공유하고 데이터 위조나 변조를 할 수 없는 높은 보안성을 제공합니다.',
  m_mainsec2_4_1:'블록체인 기술 기반의 서비스 플랫폼을 제공합니다.<br/>모든 거래 참여자들이 서로 정보를 공유하고 데이터<br/>위조나 변조를 할 수 없는 높은</br>보안성을 제공합니다.',
  mainsec2_5:'활용의 다양성',
  mainsec2_5_1:'전용지갑으로 제공되는 FK Wallet으로 간편하게 FK Coin을 보내거나 받을 수 있고, FK 직영점 또는 이미 제휴되어 있는 리조트, 호텔, 의료서비스, 쇼핑몰 등의 영역에 활용 가능합니다.',
  m_mainsec2_5_1:'전용지갑으로 제공되는 FK Wallet으로 간편하게 FK Coin<br/>을 보내거나 받을 수 있고, FK 직영점 또는 이미<br/>제휴되어 있는 리조트, 호텔, 의료서비스, 쇼핑몰 등의<br/>영역에 활용 가능합니다.',
  mainsec3_1:'4차 산업혁명의 핵심기술 블록체인',
  mainsec3_2:'블록체인(Block Chain)은 ‘블록(Block)’을 잇따라 ‘연결(Chain)’한 모음을 의미합니다.<br/>블록에는 일정 시간 동안 거래내역이 담겨있고, 이를 체인으로 묶은 것처럼 연결해 인터넷에 접속된 수 많은 컴퓨터에<br/>동시에 저장하여 거래의 위변조를 막고 신뢰성을 보장할 수 있습니다.',
  m_mainsec3_2:'블록체인(Block Chain)은 ‘블록(Block)’을 잇따라<br/>‘연결(Chain)’한 모음을 의미합니다. 블록에는 일정 시간 동안<br/>거래내역이 담겨있고, 이를 체인으로 묶은 것처럼 연결해<br/>인터넷에 접속된 수 많은 컴퓨터에 동시에 저장하여 거래의<br/>위변조를 막고 신뢰성을 보장할 수 있습니다.',
  mainsec3_3:'블록체인 기술의 장점',
  m_mainsec3_3:'블록체인<br/>기술의 장점',
  mainsec3_4:'투명성',
  mainsec3_5:'블록체인을 통해 생성된 모든 데이터는 변경 및 삭제가 불가능하며 누적 관리됩니다. 저장된 거래 이력은 허가된 참여자라면 누구나 쉽게 조회할 수 있어 투명한 데이터 관리환경이 마련됩니다.',
  m_mainsec3_5:'블록체인을 통해 생성된 모든 데이터는 변경 및<br/>삭제가 불가능하며 누적 관리됩니다. 저장된 거래 이력은<br/>허가된 참여자라면 누구나 쉽게 조회할 수 있어<br/>투명한 데이터 관리환경이 마련됩니다.',
  mainsec3_6:'빠른 속도',
  mainsec3_7:'블록체인으로 관리되는 데이터는 거래 참여자들 간의 합의와 높은 수준의 암호화 알고리즘으로\n신뢰성이 보장됩니다. 블록체인을 통해 별도의 중앙 데이터 관리 주체가 필요하였던\n기존 시스템 대비 블록체인은 신속한 데이터 연계 및 관리가 가능합니다.',
  m_mainsec3_7:'블록체인으로 관리되는 데이터는 거래 참여자들 간의<br/>합의와 높은 수준의 암호화 알고리즘으로 신뢰성이 보장됩<br/>니다. 블록체인을 통해 별도의 중앙 데이터 관리 주체가<br/>필요하였던 기존 시스템 대비 블록체인은 신속한 데이터<br/>연계 및 관리가 가능합니다.',
  mainsec3_8:'보안',
  mainsec3_9:'블록체인에 새로 생성된 데이터 블록에는 직전에 생성된 데이터 블록 정보가 포함되어 있습니다.\n시간 순으로 연결된 데이터 블록들은 모든 거래 참여자에게 즉각 공유되어 과거의 특정 거래 기록에\n대한 위변조는 사실상 불가능합니다.',
  m_mainsec3_9:'블록체인에 새로 생성된 데이터 블록에는 직전에 생성된<br/>데이터 블록 정보가 포함되어 있습니다. 시간 순으로<br/>연결된 데이터 블록들은 모든 거래 참여자에게 즉각 공유되어<br/>과거의 특정 거래 기록에 대한 위변조는 사실상 불가능합니다.',
  mainsec4_1:'동남아 거점',
  mainsec4_2:'해외 투자자분 유치',
  mainsec4_3:'+2019년 동남아 시장에 진출하기 위한 거점 확보<br/>+블록체인 비즈니스 활성화를 위해 싱가폴 스타트업 기업들과 협업 추진<br/>+고급화 되고있는 동남아 호텔을 중심으로 투자 협력 및 FK 서비스 제휴 추진',
  m_mainsec4_3:'+2019년 동남아 시장에 진출하기 위한 거점 확보<br/>+블록체인 비즈니스 활성화를 위해 싱가폴 스타트업<br/>&nbsp;&nbsp;기업들과 협업 추진<br/>+고급화 되고있는 동남아 호텔을 중심으로 투자 협력<br/>&nbsp;&nbsp;및 FK 서비스 제휴 추진',
  mainsec4_6:'+외국인 투자를 위한 중장기 비전 및 체계 구축<br/>+지자체와 협력하여 산업정책, 지역균형 발전 정책 등과 연계한 개발산업 추진',
  m_mainsec4_6:'+외국인 투자를 위한 중장기 비전 및 체계 구축<br/>+지자체와 협력하여 산업정책, 지역균형 발전 정책 등과<br/>&nbsp;&nbsp;연계한 개발산업 추진',
  mainsec5_1:'당신의 든든한 파트너가 되어 드리겠습니다',
  m_mainsec5_1:'당신의 든든한 파트너가<br/>되어 드리겠습니다',
  mainsec5_2:'FK ASSET의 비즈니스에 대한 궁금한 사항을 남겨주세요',
  mainsec5_3:'문의하기',
  /*********************** 오퍼링 *******************************/
  offer_title:'Innovatory Business Model with FK ASSET',
  m_offer_title:'Innovatory Business</br>Model with FK ASSET',
  offer_subtitle:'FK ASSET은 새로운 가치를 창출하고, 전달하고, 획득할 수 있는 비즈니스 모델을 만들어 갑니다.',
  m_offer_subtitle:'FK ASSET은 새로운 가치를 창출하고,<br/>전달하고, 획득할 수 있는 비즈니스 모델을<br/>만들어 갑니다.',
  offer_title_1:'FK ASSET은 블록체인 기술을 혁신합니다',
  offer_subtitle_1:'FK ASSET은 블록체인 기술을 호텔, 리조트, 의료, 쇼핑몰 등 타 산업 영역에도 범용적으로 사용할 수 있도록<br/>STO 방식의 FK Coin을 통하여 서비스 합니다.',
  offer_hotel_title:'호텔 & 리조트',
  offer_hotel_subtitle:'FK ASSET 제휴 호텔 지원 서비스',
  offer_hotel_operation:'경영',
  offer_hotel_operation_1:'+호텔 서비스 온라인 예약 및 쇼핑<br/>+제휴 우수 호텔 지정 표창 및 포상<br/>+호텔 등급 심사 컨설팅 및 제휴<br/>+사업 타당성 분석, 전략수립 등 호텔 경영 컨설팅 지원<br/>+브랜드 시설 및 운영 매뉴얼 제공<br/>+인력채용 컨설팅',
  m_offer_hotel_operation_1:'+호텔 서비스 온라인 예약 및 쇼핑<br/>+제휴 우수 호텔 지정 표창 및 포상<br/>+호텔 등급 심사 컨설팅 및 제휴<br/>+사업 타당성 분석, 전략수립 등 호텔 경영 컨설팅 지원<br/>+브랜드 시설 및 운영 매뉴얼 제공<br/>+인력채용 컨설팅',
  offer_hotel_sales:'영업',
  offer_hotel_sales_1:'+온라인 예약 시스템 및 메신져 시스템 운영<br/>+온라인 선결제 시스템 지원<br/>+호텔 PMS와 FK 중앙 예약시스템 연동<br/>+국내 및 해외 여행 관련 사이트 연계<br/>+통합 고객 관리 시스템 운영<br/>+제휴 마케팅을 위한 객실예약 지원(여행사, 기관 등)',
  m_offer_hotel_sales_1:'+온라인 예약 시스템 및 메신져 시스템 운영<br/>+온라인 선결제 시스템 지원<br/>+호텔 PMS와 FK 중앙 예약시스템 연동<br/>+국내 및 해외 여행 관련 사이트 연계<br/>+통합 고객 관리 시스템 운영<br/>+제휴 마케팅을 위한 객실예약 지원(여행사, 기관 등)',
  offer_hotel_marketing:'마케팅',
  offer_hotel_marketing_1:'+FK 체인호텔 온,오프라인 광고 실시<br/>+사이트 내 체인호텔 상세소개<br/>+FK브랜드 광고 실시<br/>+한국관광공사 해외지사를 통한 마케팅',
  m_offer_hotel_marketing_1:'+FK 체인호텔 온,오프라인 광고 실시<br/>+사이트 내 체인호텔 상세소개<br/>+FK브랜드 광고 실시<br/>+한국관광공사 해외지사를 통한 마케팅',
  offer_hotel_edu:'직원교육',
  offer_hotel_edu_1:'+전문인의 호텔 교육, 서비스 평가 내용에 따른 맞춤 교육<br/>+호텔 운영 전반에 관한 교육 동영상 제공<br/>+FK 예약시스템 운영 교육',
  m_offer_hotel_edu_1:'+전문인의 호텔 교육, 서비스 평가 내용에 따른 맞춤 교육<br/>+호텔 운영 전반에 관한 교육 동영상 제공<br/>+FK 예약시스템 운영 교육',
  offer_hotel_coin:'FK 코인 사용',
  offer_hotel_coin_1:'+FK 자체 쇼핑몰과 제휴로 수수료 절감<br/>+호텔 용품이나 레스토랑 식자재를 저렴하게 구입<br/>+유통 과정 없이 수수료 절감으로 서비스 품질 향상',
  m_offer_hotel_coin_1:'+FK 자체 쇼핑몰과 제휴로 수수료 절감<br/>+호텔 용품이나 레스토랑 식자재를 저렴하게 구입<br/>+유통 과정 없이 수수료 절감으로 서비스 품질 향상',
  offer_medi_title:'의료 관련 서비스',
  offer_medi_1:'01',
  offer_medi_2:'02',
  offer_medi_3:'03',
  offer_medi_4:'04',
  offer_medi_5:'05',
  offer_medi_con_1:'FK ASSET의 의료 서비스와 블록체인 기술을 결합해 새로운 의료 관광의 생태계를 리빌딩<br/>개인 의료정보를 플랫폼화 하여 개인 맞춤 의학, 의료정보를 관리하는 탈중앙화 의료정보 시스템으로서 환자, 의료공급자, 연구원<br/>모두가 더 많은 혜택을 누릴 수 있는 FK ASSET 서비스',
  m_offer_medi_con_1:'- FK ASSET의 의료 서비스와 블록체인 기술을 결합해<br/>새로운 의료 관광의 생태계를 리빌딩<br/>- 개인 의료정보를 플랫폼화 하여 개인 맞춤 의학<br/> 의료정보를 관리하는 탈중앙화<br/>의료정보 시스템으로서 환자,<br/> 의료공급자, 연구원 모두가 더 많은 혜택을<br/>누릴 수 있는 FK ASSET 서비스',
  offer_medi_con_2:'FK ASSET의 블록체인 기술의 빅데이터 분석을 통한 개인별 특성을 철저하게 분석하고 이를 기반한 최적의 치료법 개발을 통해<br/>환자마다 다르게 반응할 수 있는 환자 특이적 약물을 선별<br/>완벽한 개인 맞춤 치료를 제공하여 치료가능성은 높이고 난치, 불치의 가능성은 낮추기 위한 FK ASSET 서비스',
  m_offer_medi_con_2:'- FK ASSET의 블록체인 기술의 빅데이터 분석을<br/>통한 개인별 특성을 철저하게 분석하고 이를<br/>기반한 최적의 치료법 개발을 통해<br/>환자마다 다르게 반응할 수 있는<br/>환자 특이적 약물을 선별<br/>- 완벽한 개인 맞춤 치료를 제공하여<br/>치료가능성은 높이고 난치, 불치의<br/>가능성은 낮추기 위한 FK ASSET 서비스',
  offer_medi_con_3:'FK ASSET의 ICT기술을 활용해 병원을 직접 방문해 창구나 무인 수납기에서 발급받아야 하는 의료 관련 증명서류를 모바일로<br/>편리하게 발급받는 서비스 구축<br/>블록체인 기반 PKI인증서를 활용해 본인 인증부터 문서 발급, 이후 유통과정까지 블록체인을 기반으로 검증하고 전국 의료기관의<br/>의료정보 통합시스템을 구축',
  m_offer_medi_con_3:'- FK ASSET의 ICT기술을 활용해 병원을 직접 방문해<br/>창구나 무인 수납기에서 발급받아야 하는<br/>의료 관련 증명서류를 모바일로<br/>편리하게 발급받는 서비스 구축<br/>- 블록체인 기반 PKI인증서를 활용해 본인 인증부터<br/>문서 발급, 이후 유통과정까지 블록체인을<br/>기반으로 검증하고 전국 의료기관의<br/>의료정보 통합시스템을 구축',
  offer_medi_con_4:'FK ASSET의 블록체인 의료관광 생태계를 조성하여 가격의 투명성으로 인한 별도의 커미션 없이 국, 내외 모든 환자는<br/>스마트한 계약으로 신뢰를 구축<br/>각각 의료기관의 능력과 비용의 투명성을 유지하고 환자가 다른 나라에서 치료를 받고싶어하는 의료기관을<br/>고를 수 있는 권리를 제공<br/>환자중심 통합 의료관광 진료가 가능',
  m_offer_medi_con_4:'- FK ASSET의 블록체인 의료관광 생태계를 조성하여<br/>가격의 투명성으로 인한 별도의 커미션 없이<br/>국, 내외 모든 환자는 스마트한 계약으로 신뢰를 구축<br/>- 각각 의료기관의 능력과 비용의 투명성을 유지하고<br/>환자가 다른 나라에서 치료를 받고싶어하는<br/>의료기관을 고를 수 있는 권리를 제공<br/>- 환자중심 통합 의료관광 진료가 가능',
  offer_medi_con_5:'FK COIN은 연계된 교통비, 숙박비, 의료비, 약제비, 보혐료 등 여러가지 비용을 여러나라에서 FK ASSET 플랫폼내 제휴된 수많은<br/>업체들과 연계하여 지불 수단으로 사용<br/>FK COIN은 이러한 플랫폼에서 참여에 대한 보상으로 생태계 참여자들의 활발한 활동을 유도하기 위한 보상과 모든형태의<br/>지급수단으로 활용',
  m_offer_medi_con_5:'- FK COIN은 연계된 교통비, 숙박비, 의료비, 약제비,<br/>보혐료 등 여러가지 비용을 여러나라에서<br/>FK ASSET 플랫폼내 제휴된 수많은<br/>업체들과 연계하여 지불 수단으로 사용<br/>- FK COIN은 이러한 플랫폼에서 참여에 대한 보상으로<br/>생태계 참여자들의 활발한 활동을 유도하기 위한<br/>보상과 모든형태의 지급수단으로 활용',
  offer_ecom_title:'E-커머스',
  offer_ecom_subtitle:'전자상거래 플랫폼',
  offer_ecom_subtitle_1:'FK COIN을 실생활에 활용할 수 있도록 전자상거래가 가능한 플랫폼을 구축<br/>(예시 : 아래참고)',
  m_offer_ecom_subtitle_1:'FK COIN을 실생활에 활용할 수 있도록 전자상거래가</br> 가능한 플랫폼을 구축 (예시 : 아래참고)',
  offer_ecom_ecom:'E-커머스',
  offer_ecom_medi:'의료관광',
  offer_ecom_hotel:'호텔/리조트',
  m_offer_ecom_hotel:'호텔/</br>리조트',
  offer_ecom_con_1:'의료 관광 패키지 상품을<br/>전자상거래 플랫폼을 통한 예약',
  m_offer_ecom_con_1:'의료 관광 패키지<br/>상품을 전자상거래<br/>플랫폼을 통한 예약',
  offer_ecom_con_2:'FK COIN을 사용할 수 있는<br/>전자상거래 플랫폼을 통한 예약',
  m_offer_ecom_con_2:'FK COIN을 사용할<br/>수 있는 전자상거래<br/>플랫폼을 통한 예약',
  offer_ecom_con_3:'의료 관광시에 연계된<br/>호텔/리조트 이용 시 할인',
  m_offer_ecom_con_3:'의료 관광시에 연계된<br/>호텔/리조트 이용 시 할인',
  offer_partner:'당신의 든든한 파트너가 되어 드리겠습니다',
  m_offer_partner:'당신의 든든한 파트너가<br/>되어 드리겠습니다',
/*********************** 코인 *******************************/
coin_title:'실물 기반 Coin',
coin_subtitle:'FK ASSET은 4차 산업혁명의 핵심기술로 부각되는 블록체인 기술을 실생활에서 스마트하게<br/>다각적으로 사용할수 있을뿐만 아니라 현실적 자산으로써의 가치를 실현합니다.',
m_coin_subtitle:'산업혁명의 핵심기술로 부각되는<br/>블록체인 기술을 실생활에서 스마트하게<br/>다각적으로 사용할수 있을뿐만 아니라<br/>현실적 자산으로써의 가치를 실현합니다.',
coin_about:'FK Coin이란?',
coin_about_1:'FK Coin은 블록체인 분산형 데이터 저장 기술을 이용해서 금융, 호텔,<br/>의료, 관광 등 다양한 비즈니스 영역에서 고객들이 혁신적이고 가장<br/>편리하게 사용할 수 있게 FK ASSET을 통하여 서비스 합니다.<br/><br/>FK Coin은 최고의 블록체인 기술로 거래에 참여하는 모든 사용자들에게<br/>거래 내역을 보내 주며 모든 거래 참여자들이 서로 정보를 공유하고 이를<br/>대조해 데이터 위조나 변조를 할수 없도록 설계 되어 있습니다.<br/><br/>FK Coin은 이와 같은 블록체인의 고급 기술로 최고의 보안성과 최상의<br/>서비스를 제공합니다.',
m_coin_about_1:'FK Coin은 블록체인 분산형 데이터 저장 기술을<br/>이용해서 금융, 호텔, 의료, 관광 등 다양한 비즈니스<br/>영역에서 고객들이 혁신적이고 가장 편리하게 사용할<br/>수 있게 FK ASSET을 통하여 서비스 합니다.<br/><br/>FK Coin은 최고의 블록체인 기술로 거래에 참여하는<br/>모든 사용자들에게 거래 내역을 보내 주며<br/>모든 거래 참여자들이 서로 정보를 공유하고 이를<br/>대조해 데이터 위조나 변조를 할수 없도록<br/>설계 되어 있습니다.<br/><br/>FK Coin은 이와 같은 블록체인의 고급 기술로<br/>최고의 보안성과 최상의 서비스를 제공합니다.',
coin_roadmap:'로드맵',
coin_roadmap_date_1:'2017.12',
coin_roadmap_date_2:'2018.06',
coin_roadmap_date_3:'2018.12',
coin_roadmap_date_4:'Q1',
coin_roadmap_date_5:'Q2',
coin_roadmap_date_6:'future expansion',
coin_roadmap_con_1:'회사설립<br/>조직구성',
coin_roadmap_con_2:'블록체인 기반 기술 및 인력확보<br/>블록체인 상용 제품 개발',
coin_roadmap_con_3:'(주) 에프케이에셋 출범<br/>블록체인 기술 상용화<br/>FK Coin 제작 및 국내 코인 거래소 상장',
m_coin_roadmap_con_3:'(주) 에프케이에셋 출범<br/>블록체인 기술 상용화<br/>FK Coin 제작<br/>국내 코인 거래소 상장',
coin_roadmap_con_4:'해외 거래소 상장<br/>해외 주용지역 거점 구축',
coin_roadmap_con_5:'해외 직영호텔 구축 및 확대<br/>호텔, 의료 관련 해외기업 제휴',
coin_whitepaper:'FK Coin 백서',
coin_whitepaper_down:'FK Coin White Paper [KR]',
coin_partner:'당신의 든든한 파트너가 되어 드리겠습니다',
m_coin_partner:'당신의 든든한 파트너가<br/>되어 드리겠습니다',
/*********************** 회사소개 *******************************/
company_title:'새로운 가치의 창출을 꿈꾼다 FK ASSET',
m_company_title:'새로운 가치의 창출을 꿈꾼다<br/>FK ASSET',
company_subtitle:'FK ASSET은 4차 산업혁명의 핵심기술로 떠오르고 있는 블록체인 기술을 바탕으로<br/>여러 사업 분야에 걸쳐 새로운 가치 창출을 위해 오늘도 달립니다.',
m_company_subtitle:'FK ASSET은 4차 산업혁명의 핵심기술로<br/>떠오르고 있는 블록체인 기술을 바탕으로<br/>여러 사업 분야에 걸쳐 새로운<br/>가치 창출을 위해 오늘도 달립니다.',
company_intro:'회사소개',
company_intro_con:'FK ASSET은 2017년, 대한민국의 ICT를 담당하는 회사로 설립되었습니다. 다양한 업종 영역에서 고객사의 Digital Transformation 혁신을 시작으로 지금은 전 세계에서 서비스를 제공하는 ICT<br/>Solution Provider로 성장하는 회사로 발전하고 있습니다. FK ASSET은 생산성을 혁신하는 엔터프라이즈 솔루션 및 4차 산업 혁명을 견인하는 블록체인 IT 기술력을 기반으로<br/>금융, 호텔, 의료, 관광 등 다양한 비즈니스 영역에서 고객사가 가장 혁신적으로 도약할 수 있는 통찰력을 제공하여 드립니다.<br/><br/>4차 산업혁명을 미리 준비하는 글로벌 FK ASSET을 향한 비전<br/>Block Chain Driven digital transformation leader<br/>블록체인을 가장 잘 이해하고 가장 잘 다룰 수 있는 기업, FK ASSET<br/>FK ASSET은 블록체인 기술과 분석 역량을 바탕으로 금융, 호텔, 의료, 관광 등 다양한 비즈니스 영역을 Digitalization을 통해 차별적 가치를 선도하는 기업입니다.',
m_company_intro_con:'FK ASSET은 2017년, 대한민국의 ICT를 담당하는 회사로<br/>설립되었습니다. 다양한 업종 영역에서 고객사의 Digital<br/>Transformation 혁신을 시작으로 지금은 전 세계에서 서비스를<br/>제공하는 ICT Solution Provider로 성장하는 회사로<br/>발전하고 있습니다.<br/>FK ASSET은 생산성을 혁신하는 엔터프라이즈 솔루션<br/>및 4차 산업 혁명을 견인하는 블록체인 IT 기술력을 기반으로<br/>금융, 호텔, 의료, 관광 등 다양한 비즈니스 영역에서 고객사가<br/>가장 혁신적으로 도약할 수 있는 통찰력을 제공하여 드립니다.<br/><br/>4차 산업혁명을 미리 준비하는 글로벌 FK ASSET을 향한 비전<br/>Block Chain Driven digital transformation leader<br/>블록체인을 가장 잘 이해하고 가장 잘 다룰 수 있는 기업<br/>FK ASSET<br/>FK ASSET은 블록체인 기술과 분석 역량을 바탕으로<br/>금융, 호텔, 의료, 관광 등 다양한 비즈니스 영역을<br/>Digitalization을 통해<br/>차별적 가치를 선도하는 기업입니다.',
company_intro_con_1:'고객에게는 디지털 혁신을 통해 비즈니스 성장을 견인하는 회사<br/>임직원에게는 역량 강화를 통해 전문가로 성장할 기회를 제공하는 회사<br/>파트너에게는 시너지 창출을 통해 생태계를 함께 성장시켜 나가는 회사',
m_company_intro_con_1:'고객에게는 디지털 혁신을 통해<br/>비즈니스 성장을 견인하는 회사<br/><br/>임직원에게는 역량 강화를 통해<br/>전문가로 성장할 기회를 제공하는 회사<br/><br/>파트너에게는 시너지 창출을 통해<br/>생태계를 함께 성장시켜 나가는 회사',
company_intro_con_2:'고객/임직원/파트너 모두의 꿈과 목표를 함께 실현해 나가자는 FK ASSET의 약속이자 의지입니다.',
m_company_intro_con_2:'고객/임직원/파트너 모두의 꿈과 목표를 함께<br/>실현해 나가자는 FK ASSET의 약속이자 의지입니다.',
company_ceo:'CEO',
company_ceo_intro:'대표이사 김세연',
company_ceo_intro_con:'안녕하세요?<br/>FK ASSET 대표이사 김세연 입니다.<br/><br/>FK ASSET은 4차 산업혁명등 글로벌 메가 트렌드에 대응하기 위하여 생산성을 혁신하는 엔터프라이즈 솔루션 및 3차 산업 혁명을 견인하는 블록체인 IT<br/>기술력을 바탕으로 금융, 호텔, 의료, 관광, 쇼핑몰등 다양한 비즈니스 영역에서 고객사가 가장 혁신적으로 도약할 수 있는 통찰력을 제공하여 드립니다.<br/><br/>FK ASSET은 블록체인의 최대 장점인 조작되지 않고 탈 중앙화된 정보공유, 완벽한 보안체계, 안정적인 서비스가 가능하도록 자체 개발한 서비스 중계<br/>플랫폼을 활용하여 smart한 생활과 삶의 가치를 더하기 위해 노력하고 있습니다. 또한 회사 slogan이 고객, 임직원, 파트너사등 모두의 꿈과 목표를 함께<br/>실현해 나가자는게 FKASSET의 약속이자 의지입니다.<br/><br/>과거 기업들은 경쟁력 강화와 수익 창출만을 사명으로 인식하였으나, 최근 기업들은 사회의 근본 문제 해결에 보다 적극적으로 기여할 것을 요구받고<br/>있습니다. 이와 같이 FK ASSET은 시대의 흐름에 발 맞춰 윤리 경영과 투명 경영을 실천함은 물론 창사 이래 꾸준히 전개해온 사회 공헌 활동을 더욱<br/>강화하여 국가와 사회에 대한 기업의 책임도 성실히 수행해 갈 것입니다.<br/><br/>FK ASSET의 앞날에 여러분의 따뜻한 격려와 성원을 부탁드립니다.<br/>감사합니다.',
m_company_ceo_intro_con:'안녕하세요?<br/>FK ASSET 대표이사 김세연 입니다.<br/><br/>FK ASSET은 4차 산업혁명등 글로벌 메가 트렌드에<br/>대응하기 위하여 생산성을 혁신하는 엔터프라이즈 솔루션<br/>및 3차 산업 혁명을 견인하는 블록체인 IT<br/>기술력을 바탕으로 금융, 호텔, 의료, 관광, 쇼핑몰등<br/>다양한 비즈니스 영역에서 고객사가 가장 혁신적으로<br/>도약할 수 있는 통찰력을 제공하여 드립니다.<br/><br/>FK ASSET은 블록체인의 최대 장점인 조작되지 않고<br/>탈 중앙화된 정보공유, 완벽한 보안체계,<br/>안정적인 서비스가 가능하도록 자체 개발한 서비스<br/>중계 플랫폼을 활용하여 smart한 생활과 삶의<br/>가치를 더하기 위해 노력하고 있습니다.<br/>또한 회사 slogan이 고객, 임직원, 파트너사등<br/>모두의 꿈과 목표를 함께 실현해 나가자는게<br/>FKASSET의 약속이자 의지입니다.<br/><br/>과거 기업들은 경쟁 강화와 수익 창출만을<br/>사명으로 인식하였으나, 최근 기업들은 사회의<br/>근본 문제 해결에 보다 적극적으로 기여할 것을<br/>요구받고 있습니다.<br/>이와 같이 FK ASSET은 시대의 흐름에<br/>발 맞춰 윤리 경영과 투명 경영을 실천함은 물론<br/>창사 이래 꾸준히 전개해온 사회 공헌 활동을 더욱<br/>강화하여 국가와 사회에 대한 기업의 책임도<br/>성실히 수행해 갈 것입니다.<br/><br/>FK ASSET의 앞날에 여러분의 따뜻한 격려와<br/>성원을 부탁드립니다.<br/>감사합니다.',
company_ceo_career:'경력사항',
company_ceo_activity:'주요활동',
company_ceo_career_con:'2013.07~현재&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;민주평화통일자문회의자문위원<br/>2014.04~2018~05&nbsp;&nbsp; 전) 플러스 친구들 공동대표<br/>2017~현재&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(사)한국선진교통문화연합회 대표<br/>2018.11~현재&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(주)에프케이에셋 대표<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;공학박사',
m_company_ceo_career_con:'2013.07~현재&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;민주평화통일자문회의<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자문위원<br/>2014.04~2018~05&nbsp;&nbsp; 전) 플러스 친구들 공동대표<br/>2017~현재&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(사)한국선진교통문화<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연합회 대표<br/>2018.11~현재&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(주)에프케이에셋 대표<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;공학박사',
company_ceo_activity_con:'2013.11 (수상) 국토 교통부장관 표창장<br/>2016.12 (연구) 에너지 사용량 인지후의 소비자 에너지 사용패턴 분석<br/>2017.06 (수상) 경기도지사 민주평화통일기반조성유공표창<br/>2017.08 (연구) 경기도민의 대중교통과 자가용 이용의 만족도 비교<br/>2017.12 (수상) 대통령 표창',
m_company_ceo_activity_con:'2013.11 (수상) 국토 교통부장관 표창장<br/>2016.12 (연구) 에너지 사용량 인지후의<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소비자 에너지 사용패턴 분석<br/>2017.06 (수상) 경기도지사 민주평화통일<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기반조성유공표창<br/>2017.08 (연구) 경기도민의 대중교통과 자가용<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용의 만족도 비교<br/>2017.12 (수상) 대통령 표창',
company_team_1:'LEAD MEMBER',
company_team_2:'BLOCKCHAIN ALLIANCE TEAM',
m_company_team_2:'BLOCKCHAIN<br/>ALLIANCE TEAM',
company_team_3:'ADVISOR',
company_team_member_1:'김경곤 이사',
m_company_team_member_1:'김경곤 이사',
company_team_member_1_1:'+ 베스트 치과 기공소 대표이사<br/>+ 큰나무 의료 협동조합법인 소문난 치과 이사장<br/>+ 재단법인 엔젤병원 이사<br/>+ 한국자유총연맹 성구지회 부지회장<br/>+ (사) 대한병원 관리자협회 부회장<br/>+ 서울시장 표창장, 법무부장관 감사패',
company_team_member_2:'황순룡 감사',
m_company_team_member_2:'황순룡 감사',
company_team_member_2_1:'+ 도산기념사업회 사무국장<br/>+ 미래사회문화연구원 기획운영위원<br/>+ 재단법인 유엔젤보이스 자문위원<br/>+ 한국방송공사 1988년 ~ 2015년 퇴직',
company_team_member_3:'김민우 연구소장',
m_company_team_member_3:'김민우 연구소장',
company_team_member_3_1:'+ (현) 블랍스 대표이사<br/>+ 삼성 SDS 연구원<br/>+ 삼성 광교, 송도 신도시 Smart City 구축<br/>+ 하이브리드 콜드월렛 개발<br/>+ Ethereum Dapp 서비스 개발',
company_allianceteam_member_1:'김민우 연구소장',
company_allianceteam_member_2:'최우혁 개발팀장',
company_advisorteam_member_1:'김민준 마케팅팀장',
company_advisorteam_member_2:'김학우 관리팀장',
m_company_allianceteam_member_1:'김민우<br/>연구소장',
m_company_allianceteam_member_2:'최우혁<br/>개발팀장',
m_company_advisorteam_member_1:'김민준<br/>마케팅팀장',
m_company_advisorteam_member_2:'김학우<br/>관리팀장',
company_allianceteam_member_1_1:'+ (현) 블랍스 대표이사<br/>+ 삼성 SDS 연구원<br/>+ 삼성 광교, 송도 신도시 Smart City 구축<br/>+ 하이브리드 콜드월렛 개발<br/>+ Ethereum Dapp 서비스 개발',
company_allianceteam_member_2_1:'+ 이더리움 Dapp 개발<br/>+ 블록체인 기반 컨텐츠 플랫폼 구축<br/>+ 블록체인 기반 지갑 및 결제 서비스 구축<br/>+ Computer Science Algorithm 강의',
company_advisorteam_member_1_1:'+ (주)이츠아이티 대표이사<br/>+ 마케팅 전략 컨설팅<br/>+ 주닥 전략기획 고문',
company_advisorteam_member_2_1:'+ 사랑컴퍼니 대표이사<br/>+ DB사랑 대표이사<br/>+ 블록체인 마케팅 수석 컨설턴트',
company_team_chart:'FK ASSET 조직도',
m_company_team_chart:'FK ASSET<br/>조직도',
company_team_chart_1:'FK ASSET',
company_team_chart_2:'연구소',
company_team_chart_3:'(주)블랍스',
company_team_chart_4:'파트너',
company_team_chart_5:'한국 교회 투자 재단',
company_team_chart_6:'관리팀',
company_team_chart_7:'홍보팀',
company_team_chart_8:'기술팀',
company_team_chart_9:'국내사업부',
company_team_chart_10:'해외사업부',
company_team_chart_11:'서울사업소',
company_team_chart_12:'인천사업소',
company_team_chart_13:'부산사업소',
company_team_chart_14:'러시아 거점',
company_team_chart_15:'인도 거점',
company_team_chart_16:'베트남 거점',
company_notice:'공지사항',
company_notice_no:'번호',
company_notice_title:'제목',
company_notice_date:'등록일',
company_partner:'협력기업',
company_fkasset:'FK ASSET',
/*********************** 공지사항 *******************************/
notice1_title:'FK ASSET 홈페이지 오픈',
notice2_title:'(주)블랍스와 기술연구 제휴',
notice3_title:'Dapp 및 암호화폐 개발 기술 확보에 성공',
notice4_title:'FK ASSET 코인 개발,전용지갑 제작,사이트 결제 연동 서비스',
notice5_title:'블록체인 기반 안드로이드 콜드월렛 app 출시',
notice6_title:'iOS 스마트폰 콜드월렛 app 출시',
notice7_title:'국내 최초로 국제 표준화 기구(ISO)로부터 품질경영시스템 인증',
notice8_title:'에프케이에셋의 FK coin이 개발 완료',
notice9_title:'FK ASSET 연구소 블랍스 \'한국 블록체인 협회의 정회원으로 등록',
notice10_title:'FK ASSET 홈페이지 리뉴얼',
notice11_title:'주식회사 에프케이에셋 글로벌 서비스 출범',
notice12_title:'에프케이에셋의 FK코인 서울엑스 거래소에 상장',
notice13_title:'[경제뉴스] (주)에프케이에셋 FK ASSET 글로벌 서비스 출범',
notice1_con:'안녕하세요.<br/><br/>2017년 8월에 설립한 FK ASSET 홈페이지가 오픈 했습니다.<br/><br/>FK ASSET은 4차 산업혁명등 글로벌 메가 트렌드에 대응하기 위하여<br/><br/>생산성을 혁신하는 엔터프라이즈 솔루션 및 4차 산업 혁명을 견인하는 블록체인 IT 기술력을 바탕으로<br/><br/>금융,호텔,의료,관광,쇼핑몰등 다양한 비즈니스 영역에서 고객사가 가장 혁신적으로 도약할 수 있는 통찰력을 제공하여 드립니다.<br/><br/>FK ASSET은 블록체인의 최대 장점인 조작되지 않고 탈 중앙화된 정보공유,완벽한 보안체계,안정적인 서비스가 가능하도록 <br/><br/>자체 개발한 서비스 중계 플랫폼을 활용하여 smart한 생활과 삶의 가치를 더하기 위해 노력하고 있습니다.',
notice2_con:'FK ASSET이 블록체인 회사 (주)블랍스와 기술연구 제휴를 맺었습니다.<br/><br/>이로써 FK ASSET은 블록체인을 가장 잘 이해하고 가장 잘 다룰 수 있는 (주)블랍스와 제휴함으로써<br/><br/>4차 산업혁명을 미리 준비하는 Global FK ASSET을 향해 달려 나갈것을 약속합니다.<br/><br/>감사합니다.',
notice3_con:'FK ASSET이 수개월간 블랍스와 공동 연구를 진행한 결과 블록체인 최고 기술이라 할수있는<br/><br/>Dapp 및 암호화폐 개발 기술 확보에 성공 했습니다.<br/><br/>앞으로도 FK ASSET은 끊임없는 연구와 개발로 고객님들과 파트너사들에게 최고로 보답 하겠습니다.<br/><br/>감사합니다.',
notice4_con:'FK ASSET이 블록체인 스타트업 회사들을 대상으로 합리적인 비용으로 암호화폐 개발 및 전용지갑 제작부터<br/><br/>사이트 결제 연동 서비스까지 실시하고 있는 가운데 아이디어 하나만으로 누구나 도전할 수 있는<br/><br/>블록체인 프로젝트를 도전할 수 있도록 하고 있다고 밝혔다. <br/><br/>앞으로 FK ASSET은 콜드월렛 서비스를 시작으로 암호화폐를 실생활에 접목시킬 수 있도록 P2P거래와 온라인 및 오프라인 결제등<br/><br/>다양한 서비스들을 활성화시킬 예정으로 콜드월렛 서비스와 더불어 코인 개발, 전용지갑 제작, 사이트 결제 연동 서비스 등을<br/><br/>일본과 중국 등 아시아 시장을 필두로 미국과 유럽 시장까지 확대할 계획이다.',
notice5_con:'블록체인 기반 안드로이드 스마트폰에서 콜드월렛을 사용할 수 있는 앱이 출시 하였습니다.<br/><br/>블랍스는 기존 핫 월렛의 해킹 위험성과 콜드 월렛의 불편함을 보완한 3세대 하이브리드 카드형 지갑입니다.<br/><br/>암호화된 Private Key를 카드에 저장하여 완벽한 보안성을 제공하고,서버에 데이터를 저장하지 않기에<br/><br/>해킹으로부터 안전하므로 많은 이용 부탁 드립니다.',
notice6_con:'안녕하세요 FK ASSET입니다.<br/><br/>iOS 스마트폰에서 블랍스 지갑을 사용할 수 있는 앱이 출시가 완료되었습니다.<br/><br/>앱은 홈페이지의 앱 다운로드 링크를 통해 앱스토어에서 다운로드 하실 수 있습니다.<br/><br/>향후 추가되는 코인은 앱 업데이트로 이용가능합니다.',
notice7_con:'안녕하세요 FK ASSET입니다.<br/><br/>FK ASSET 연구소인 블랍스가 콜드월렛으로는 국내 최초로 국제 표준화 기구(ISO)로부터<br/><br/>2018년 10월 19일 품질 경영 시스템 인증(ISO 9001)을 받았습니다.<br/><br/>ISO 9001은 국제표준화기구(ISO)에서 제정,시행하고 있는 품질 경영 시스템에 관한 국제규격으로써<br/><br/>제품 및 서비스에 이르는 전 생산 과정에 걸친 품질보증 체계를 의미합니다.<br/><br/>3자 인증기관의 객관적ㆍ독립적인 평가를 통해 인증받음으로써 고객님들과 파트너사들에게<br/><br/>최고의 보안성과 안정성으로 더욱 노력하는 FK ASSET이 되겠습니다.<br/><br/>감사합니다.',
notice8_con:'에프케이에셋의 회사 토큰인 FK coin이 개발 완료 되었습니다.<br/><br/>FK coin은 에프케이에셋의 사업영역내 모든 서비스를 연계하고 통합하기 위하여<br/><br/>개발되었고 전 세계 모든 사용자들은 통합된 FK coin을 사용하여 쇼핑몰,의료,호텔등의<br/><br/>다양한 서비스를 제공 받으실수 있습니다.',
notice9_con:'안녕하세요 FK ASSET입니다.<br/><br/>FK ASSET 기술과 연구를 맡고 있는 블랍스가 콜드월렛으로는 국내 최초로 한국 블록체인협회<br/><br/>( http://www.kblockchain.org )로부터 2018년 11월 19일 이사회의 승인 심사를 거쳐<br/><br/>한국 블록체인 협회의 정회원으로 등록 되었습니다.<br/><br/>FK ASSET은 한국 블록체인협회와 함께 건강한 블록체인산업 생태계의 조성과 발전을 위해 노력하고<br/><br/>회원님들께 최고의 보안성과 안정성으로 보답하는 FK ASSET이 되겠습니다.<br/><br/>감사합니다.',
notice10_con:'FK ASSET 홈페이지가 새롭게 리뉴얼 되었습니다.<br/><br/>홈페이지 도메인은 fkasset.co.kr 입니다.<br/><br/>FK ASSET은 기술 혁신과 신뢰를 기반으로 시장을 선도하는 글로벌 No.1 ICT 기업으로<br/><br/>한발 앞서 나갈것을 약속 드립니다.<br/><br/>감사합니다.',
notice11_con:'2017년 8월에 설립하여 1년여간 블록체인 분야의 기술 기업들과 협업 하여 수많은 연구와 기술을 분석하고<br/><br/>확보한 결과 2018년 12월 주식회사 에프케이에셋이라는 이름으로 출범했습니다.<br/><br/>FK ASSET은 다양한 업종 영역에서 기업들과 협업하여 Digital Transformation 혁신을 주도하고 나아가<br/><br/>글로벌 시장에서 기술 기반 차별화된 서비스를 제공하는 ICT Solution Provider로 성장하는 로드맵을<br/><br/>가지고 있습니다.<br/><br/>현재 FK ASSET은 블록체인 시장을 1순위 성장 동력으로 보고 모든 역량을 집중하고 있습니다.<br/><br/>4차 산업혁명을 견인하기 위해 블록체인 IT 기술력 확보 및 인력양성에 주력하고 있고 나아가<br/><br/>금융,호텔,리조트,의료,관광등 다양한 비즈니스 영역에서 블록체인 기술을 적용한 세계 최고의<br/><br/>글로벌 서비스 제공을 추진하고 있습니다.소중한 고객님들과 파트너사들의 많은 관심 부탁 드립니다.',
notice12_con:'에프케이에셋의 FK코인 서울엑스 거래소(<a href="https://seoulx.io/" target="_blank">https://seoulx.io/</a>) 에 상장되었습니다.<br/><br/>FK Coin은 블록체인 분산형 데이터 저장 기술을 이용해서 금융, 호텔,<br/><br/>의료, 관광 등 다양한 비즈니스 영역에서 고객들이 혁신적이고 가장<br/><br/>편리하게 사용할 수 있게 FK ASSET을 통하여 서비스 합니다.<br/><br/>FK Coin은 최고의 블록체인 기술로 거래에 참여하는 모든 사용자들에게<br/><br/>거래 내역을 보내 주며 모든 거래 참여자들이 서로 정보를 공유하고 이를<br/><br/>대조해 데이터 위조나 변조를 할수 없도록 설계 되어 있습니다.<br/><br/>FK Coin은 이와 같은 블록체인의 고급 기술로 최고의 보안성과 최상의<br/><br/>서비스를 제공합니다.<br/><br/>고객에게는 디지털 혁신을 통해 비즈니스 성장을 견인하는 회사!<br/><br/>임직원에게는 역량 강화를 통해 전문가로 성장할 기회를 제공하는 회사!<br/><br/>파트너에게는 시너지 창출을 통해 생태계를 함께 성장시켜 나가는 회사!<br/><br/>앞으로 에프케이에셋의 많은 관심과 참여 부탁 드립니다.',
notice13_con:'[뉴스원본] <a href="http://www.hemophilia.co.kr/news/articleView.html?idxno=7537" target="_blank">http://www.hemophilia.co.kr/news/articleView.html?idxno=7537</a><br/><br/>2017년 8월에 설립하여 1년여간 블록체인 분야의 기술 기업들과 협업 하여 수많은 연구와 기술을<br/><br/>분석하고 확보한 결과 2018년 12월 주식회사 에프케이에셋이라는 이름으로 새롭게 출범했다.<br/><br/>FK ASSET은 다양한 업종 영역에서 기업들과 협업하여 Digital Transformation 혁신을 주도하고 나아가<br/><br/>글로벌 시장에서 기술 기반 차별화된 서비스를 제공하는 ICT Solution Provider로 성장하는<br/><br/>로드맵을 가지고 사업을 추진하고 있다.<br/><br/>현재 FK ASSET은 블록체인 시장을 1순위 성장 동력으로 보고 모든 역량을 집중하고 있다.<br/><br/>4차 산업혁명을 견인하기 위해 블록체인 IT 기술력 확보 및 인력 양성에 주력하고 있고<br/><br/>글로벌 블록체인 시장을 유기적으로 연결하기 위하여 FK 플랫폼을 준비 중이다.<br/><br/>FK 플랫폼은 금융,호텔,리조트,의료,관광등 다양한 비즈니스 영역에서 블록체인 기술을<br/><br/>적용하여 투명하고 안전한 서비스를 제공하는 기반 기술이다.<br/><br/>현재 FK 에셋은 FK 플랫폼에서 사용될 수 있는 자체 토큰인 FK coin을 개발하였으며,<br/><br/>18년 12월 서울엑스 거래소에 상장되어 상승세를 이어가고 있다.<br/><br/>FK 코인은 에프케이에셋의 사업 영역내 모든 서비스를 연계하고 통합하기 위하여 개발 되었고<br/><br/>전 세계 모든 사용자들은 통합된 FK coin을 사용하여 쇼핑몰,의료,관광,<br/><br/>호텔,리조트 등의 다양한 서비스를 제공 받을 예정이다.<br/><br/>앞으로 FK ASSET은 국내 블록체인 비즈니스 활성화를 위해 다양한 기업들과 협업을 진행하며,<br/><br/>동남아 시장을 필두로 세계 시장에 진출하기 위한 거점 확보에 주력할 예정이다.<br/><br/>앞으로 계속 발전해서 나아갈 에프케이에셋의 귀추가 주목된다.<br/><br/>< 저작권자 © 헤모필리아 라이프 무단전재 및 재배포금지 >',
/*********************** 푸터 *******************************/
footer1:'(주)에프케이에셋 | 대표 김세연<br />경기도 남양주시 진접읍 봉현로14번길 11, 2,3층<br />사업자등록번호 : 842-81-01493 | Email: admin@fkasset.co.kr | Contact : 02-423-4261',
footer2:'(주)에프케이에셋 | 대표 김세연<br />경기도 남양주시 진접읍 봉현로14번길 11, 2,3층<br />사업자등록번호 : 842-81-01493<br/>Email: admin@fkasset.co.kr<br/>Contact : 02-423-4261',
/*********************** 컨택트폼 *******************************/
contact_name:'담당자명',
contact_company:'회사명',
contact_tel:'연락처',
contact_email:'이메일',
contact_submit:'확인',
contact_cancel:'취소',
contact_contents:'문의내용',
contact_title:'제휴문의',
contact_subtitle:'문의 내용을 작성해주시면 내용을 검토한 후 기재된 연락처로 답변을 드립니다.',
contact_inquirymsg:'문의내용을 입력해주세요',
contact_namemsg:'담당자명을 입력해주세요',
contact_companymsg:'회사명을 입력해주세요',
contact_telmsg:'연락처를 입력해주세요',
contact_emailmsg:'이메일을 입력해주세요',
contact_submitmsg:'문의하신 내용이 정상적으로 접수되었습니다.<br/>제안해 주신 좋은 의견은 담당자가 검토한 후 <br/>작성해 주신 연락처로 답변을 드릴 예정입니다.',
contact_close:'닫기'

};
export default string;