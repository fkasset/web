import React, { Component } from 'react';
import { Table, Input, Button, Icon, Breadcrumb } from 'antd';
import string from '../string';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {},
      loading: false,
    }
  }
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });

    let page = params.page || 1;

    let result = this.getData(page);
    const pagination = { ...this.state.pagination };
    pagination.total = result.totalCount;
    this.setState({
      loading: false,
      data: result.data,
      pagination,
    });
    this.setState({ loading: false });
  }
  componentDidMount() {
    this.fetch();
  }
  renderDetail = (record) => {
    return (
      <div style={{ fontSize: '16px' }} dangerouslySetInnerHTML={{ __html: record.content }}>
      </div>
    );
  }
  render() {
    const columns = [{
      title: string.company_notice_no,
      dataIndex: 'idx',
      className: 'notice-idx'
    }, {
      title: string.company_notice_title,
      dataIndex: 'title',
      className: 'notice-title'
    }, {
      title: string.company_notice_date,
      dataIndex: 'createDate',
      className: 'notice-date'
    }, {
      title: "",
      dataIndex: 'idx',
      className: 'notice-mobile-left',
      render: (text, record) => {
        return (
          <div style={{ width: '4px' }}>
          </div>
        );
      }
    }, {
      title: string.contact_contents,
      dataIndex: 'title',
      className: 'notice-mobile',
      render: (text, record) => {
        return (
          <div>
            <div>
              <b>{record.createDate}</b>
            </div>
            <div style={{ paddingTop: '5px' }}>
              {record.title}
            </div>
          </div>
        );
      }
    }];
    return (
      <div className="global-wrapper">
        <div className="global-container">
          <div className="center-background com_1" style={{ backgroundImage: `url(${require("../img/company_1.png")})`, height: '361px' }}>
            <div className="company_title" dangerouslySetInnerHTML={{ __html: string.company_title }} />
            <div className="company_subtitle" dangerouslySetInnerHTML={{ __html: string.company_subtitle }} />
          </div>
          <div className="center-background mobile_com_1" style={{ backgroundImage: `url(${require("../img/m_com_1.png")})`, height: '360px' }}>
            <div className="company_title" dangerouslySetInnerHTML={{ __html: string.m_company_title }} />
            <div className="company_subtitle" dangerouslySetInnerHTML={{ __html: string.m_company_subtitle }} />
          </div>
          <div className="center-background com_2" style={{ backgroundImage: `url(${require("../img/company_2.png")})`, height: '791px' }}>
            <div className="company_intro">{string.company_intro}</div>
            <div className="company_intro_con" dangerouslySetInnerHTML={{ __html: string.company_intro_con }} />
            <div className="company_intro_con_1" style={string.company_intro_con_1_css} dangerouslySetInnerHTML={{ __html: string.company_intro_con_1 }} />
            <div className="company_intro_con_2" dangerouslySetInnerHTML={{ __html: string.company_intro_con_2 }} />
          </div>
          <div className="center-background mobile_com_2" style={{ backgroundImage: `url(${require("../img/m_com_2.png")})`, height: '1058px' }}>
            <div className="company_intro">{string.company_intro}</div>
            <div className="company_intro_con" style={string.company_intro_con_css} dangerouslySetInnerHTML={{ __html: string.m_company_intro_con }} />
            <div className="company_intro_con_1" style={string.m_company_intro_con_1_css} dangerouslySetInnerHTML={{ __html: string.m_company_intro_con_1 }} />
            <div className="company_intro_con_2" dangerouslySetInnerHTML={{ __html: string.m_company_intro_con_2 }} />
          </div>
          <div className="center-background com_3" style={{ backgroundImage: `url(${require("../img/company_3.png")})`, height: '1304px' }}>
            <div className="company_ceo">{string.company_ceo}</div>
            <div className="company_ceo_intro">{string.company_ceo_intro}</div>
            <div className="company_ceo_intro_con" dangerouslySetInnerHTML={{ __html: string.company_ceo_intro_con }} />
            <div className="company_ceo_box">
              <div style={{position: 'relative', left: 0, top: 0, textAlign:'left', paddingLeft: 300, paddingTop: 30}}>
                <a href="https://www.linkedin.com/in/se-yeon-kim-670a67178/" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a>
              </div>
              <div className="company_cer_con">
                <div className="company_ceo_career">{string.company_ceo_career}</div>
                <div className="company_ceo_career_con" dangerouslySetInnerHTML={{ __html: string.company_ceo_career_con }} />
                <div className="company_ceo_activity">{string.company_ceo_activity}</div>
                <div className="company_ceo_activity_con" dangerouslySetInnerHTML={{ __html: string.company_ceo_activity_con }} />

              </div>
            </div>
          </div>
          <div className="center-background mobile_com_3" style={{ backgroundImage: `url(${require("../img/m_com_3.png")})`, height: '1467px' }}>
            <div className="company_ceo">{string.company_ceo}</div>
            <div className="company_ceo_intro">{string.company_ceo_intro}</div>
            <div className="company_ceo_intro_con" style={string.company_ceo_intro_con_css} dangerouslySetInnerHTML={{ __html: string.m_company_ceo_intro_con }} />
            <div className="company_ceo_box">
              <div className="company_cer_con" style={string.company_cer_con_css}>
                <div className="company_ceo_career">
                {string.company_ceo_career}
                  <a href="https://www.linkedin.com/in/se-yeon-kim-670a67178/" target="_blank">
                    <img src={require('../img/linkedin.png')} width={20} style={{marginLeft: 10}}/>
                  </a>
                </div>
                <div className="company_ceo_career_con" dangerouslySetInnerHTML={{ __html: string.m_company_ceo_career_con }} />
                <div className="company_ceo_activity">{string.company_ceo_activity}</div>
                <div className="company_ceo_activity_con" dangerouslySetInnerHTML={{ __html: string.m_company_ceo_activity_con }} />
              </div>
            </div>
          </div>
          <div className="center-background com_4" style={{ backgroundImage: `url(${require("../img/company_4.png")})`, height: '3506px' }}>
            <div className="company_team">{string.company_team_1}</div>
            <div className="company_team_member_con" style={{ display: 'flex' }}>
            <div className="company_team_member_con_1" style={{ flex: '0.5' }}/>
              <div className="company_team_member_con_1" style={{ flex: '1' }}>
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kkg.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_team_member_1}
                <a href="https://www.linkedin.com/in/kyung-gon-kim-0a6a68178" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} style={{marginLeft:10, marginTop: -3}}/>
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_team_member_1_1 }} />
              </div>
              <div className="company_team_member_con_1" style={{ flex: '1' }}>
                <div className="company_team_member_con_1_img"><img src={require('../img/member/hsr.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_team_member_2}
                <a href="https://www.linkedin.com/in/soon-ryong-hwang-7b7a67178" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} style={{marginLeft:10, marginTop: -3}} />
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_team_member_2_1 }} />
              </div>
              <div className="company_team_member_con_1" style={{ flex: '0.5' }}/>
              {/*<div className="company_team_member_con_1" style={{ flex: '1' }}>
                 <div className="company_team_member_con_1_img"><img src={require('../img/member/kmw.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_team_member_3}
                <a href="http://www.linkedin.com/in/minwookim7" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_team_member_3_1 }} /> 
              </div>*/}
            </div>
            <div className="company_team">{string.company_team_2}</div>
            <div className="company_team_member_con" style={{ display: 'flex' }}>
            <div className="company_team_member_con_1" style={{ flex: '0.5' }}/>
              <div className="company_team_member_con_1" style={{ flex: '1' }}>
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmw.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_allianceteam_member_1}
                <a href="http://www.linkedin.com/in/minwookim7" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_allianceteam_member_1_1 }} />
              </div>
              <div className="company_team_member_con_1" style={{ flex: '1' }}>
                <div className="company_team_member_con_1_img"><img src={require('../img/member/cwh.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_allianceteam_member_2}
                <a href="https://www.linkedin.com/in/woo-hyuck-choi-20a197179" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_allianceteam_member_2_1 }} />
              </div>
              <div className="company_team_member_con_1" style={{ flex: '0.5' }}/>
              {/*<div className="company_team_member_con_1" style={{ flex: '1' }}>
                 <div className="company_team_member_con_1_img"><img src={require('../img/member/kmw.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_team_member_3}
                <a href="http://www.linkedin.com/in/minwookim7" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} style={{marginLeft:10, marginTop: -3}} />
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_team_member_3_1 }} /> 
              </div>*/}
            </div>
            <div className="company_team">{string.company_team_3}</div>
            <div className="company_team_member_con" style={{ display: 'flex' }}>
              <div className="company_team_member_con_1" style={{ flex: '0.5' }}/>
              <div className="company_team_member_con_1" style={{ flex: '1' }}>
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmj.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_advisorteam_member_1}
                <a href="https://www.linkedin.com/in/min-jun-kim-0b0197179" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_advisorteam_member_1_1 }} />
              </div>
              <div className="company_team_member_con_1" style={{ flex: '1' }}>
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmc.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_advisorteam_member_2}
                <a href="https://www.linkedin.com/in/hak-woo-kim-241202179" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_advisorteam_member_2_1 }} />
              </div>
              <div className="company_team_member_con_1" style={{ flex: '0.5' }}/>
              {/*<div className="company_team_member_con_1" style={{ flex: '1' }}>
                 <div className="company_team_member_con_1_img"><img src={require('../img/member/kmw.png')} width={300} /></div>
                <div className="company_team_member_con_1_name">{string.company_team_member_3}
                <a href="http://www.linkedin.com/in/minwookim7" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a></div>
                <div className="company_team_member_con_1_des" dangerouslySetInnerHTML={{ __html: string.company_team_member_3_1 }} />
              </div> */}
            </div>
            <div className="company_team_chart" style={string.company_team_chart_css}>{string.company_team_chart}</div>
            <div className="center-background com_2" style={{ backgroundImage: string.companyChart, height: '950px' }} />
            {/* <div className="company_team_chart_1">{string.company_team_chart_1}</div>
              <div className="company_team_chart_con">
                <div className="company_team_chart_box" style={{ display: 'flex', width: '1200px' }}>
                  <div className="company_team_chart_left_1" style={{ flex: '1' }}>
                    <div className="company_team_chart_left_1_1">
                      {string.company_team_chart_2}
                    </div>
                    <div className="company_team_chart_left_1_2">
                      {string.company_team_chart_3}
                    </div>
                  </div>
                  <div className="company_team_chart_right_1" style={{ flex: '1' }}>
                    <div className="company_team_chart_right_1_1">
                      {string.company_team_chart_4}
                    </div>
                    <div className="company_team_chart_right_1_2">
                      {string.company_team_chart_5}
                    </div>
                  </div>
                </div>
              </div>
              <div className="company_team_chart_con_block">
                <div className="company_team_chart_box_block">
                  <div className="company_team_chart_center_1">
                    <div className="company_team_chart_6">
                      {string.company_team_chart_6}
                    </div>
                  </div>
                  <div className="company_team_chart_center_2">
                    <div className="company_team_chart_7">
                      {string.company_team_chart_7}
                    </div>
                  </div>
                  <div className="company_team_chart_center_3">
                    <div className="company_team_chart_8">
                      {string.company_team_chart_8}
                    </div>
                  </div>
                  <div className="company_team_chart_center_4">
                    <div className="company_team_chart_9">
                      {string.company_team_chart_9}
                    </div>
                  </div>
                  <div className="company_team_chart_center_5">
                    <div className="company_team_chart_10">
                      {string.company_team_chart_10}
                    </div>
                  </div>
                </div>
              </div>
              <div className="company_team_chart_con">
                <div className="company_team_chart_box" style={{ display: 'flex', width: '1200px' }}>
                  <div style={{ flex: '3.1' }}></div>
                  <div className="company_team_chart_left_1" style={{ flex: '1' }}>
                    <div className="company_team_chart_11">
                      {string.company_team_chart_11}
                    </div>
                    <div className="company_team_chart_12">
                      {string.company_team_chart_12}
                    </div>
                    <div className="company_team_chart_13">
                      {string.company_team_chart_13}
                    </div>
                  </div>
                  <div className="company_team_chart_right_1" style={{ flex: '1' }}>
                    <div className="company_team_chart_14">
                      {string.company_team_chart_14}
                    </div>
                    <div className="company_team_chart_15">
                      {string.company_team_chart_15}
                    </div>
                    <div className="company_team_chart_16">
                      {string.company_team_chart_16}
                    </div>
                  </div>
                </div>
              </div> */}
            <div className="company_fkasset">{string.company_fkasset}</div>
          </div>
          <div className="center-background mobile_com_4" style={{ backgroundImage: `url(${require("../img/m_com_4.png")})`, height: '4421px' }}>
            <div className="company_team">{string.company_team_1}</div>
            <div className="company_team_member_con">
              <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kkg.png')} width={200} /></div>
                <div className="m_company_team_member_con_1_name" style={string.m_company_team_member_con_1_name_css}>{string.company_team_member_1}
                </div>
                <a href="https://www.linkedin.com/in/kyung-gon-kim-0a6a68178" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} style={{marginLeft: 10}}/>
                </a>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_team_member_1_1 }} />
              </div>
              <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/hsr.png')} width={200} /></div>
                <div className="m_company_team_member_con_1_name" style={string.m_company_team_member_con_1_name_css} dangerouslySetInnerHTML={{ __html: string.m_company_team_member_2 }} />
                <a href="https://www.linkedin.com/in/kyung-gon-kim-0a6a68178" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} style={{marginLeft: 10}}/>
                </a>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_team_member_2_1 }} />
              </div>
              {/* <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmw.png')} width={200} /></div>
                <div className="company_team_member_con_1_name" style={string.company_team_member_con_1_name} dangerouslySetInnerHTML={{ __html: string.m_company_team_member_3 }} />
                <a href="http://www.linkedin.com/in/minwookim7" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_team_member_3_1 }} />
              </div> */}
            </div>
            <div className="company_team" dangerouslySetInnerHTML={{ __html: string.m_company_team_2 }} />
            <div className="company_team_member_con">
              <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmw.png')} width={200} /></div>
                <div className="m_company_team_member_con_1_name" style={string.m_company_team_member_con_1_name_css} dangerouslySetInnerHTML={{ __html: string.m_company_allianceteam_member_1 }} />
                <a href="http://www.linkedin.com/in/minwookim7" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_allianceteam_member_1_1 }} />
              </div>
              <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/cwh.png')} width={200} /></div>
                <div className="m_company_team_member_con_1_name" style={string.m_company_team_member_con_1_name_css} dangerouslySetInnerHTML={{ __html: string.m_company_allianceteam_member_2 }} />
                <a href="https://www.linkedin.com/in/woo-hyuck-choi-20a197179" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_allianceteam_member_2_1 }} />
              </div>
              {/* <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmw.png')} width={200} /></div>
                <div className="company_team_member_con_1_name" style={string.company_team_member_con_1_name} >{string.m_company_team_member_3}
                <a href="http://www.linkedin.com/in/minwookim7" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} style={{marginLeft: 10}}/>
                </a>
                </div>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_team_member_3_1 }} />
              </div> */}
            </div>
            <div className="company_team">{string.company_team_3}</div>
            <div className="company_team_member_con">
              <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmj.png')} width={200} /></div>
                <div className="m_company_team_member_con_1_name" style={string.m_company_team_member_con_1_name_css} dangerouslySetInnerHTML={{ __html: string.m_company_advisorteam_member_1 }} />
                <a href="https://www.linkedin.com/in/min-jun-kim-0b0197179" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_advisorteam_member_1_1 }} />
              </div>
              <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmc.png')} width={200} /></div>
                <div className="m_company_team_member_con_1_name" style={string.m_company_team_member_con_1_name_css} dangerouslySetInnerHTML={{ __html: string.m_company_advisorteam_member_2 }} />
                <a href="https://www.linkedin.com/in/hak-woo-kim-241202179" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_advisorteam_member_2_1 }} />
              </div>
              {/* <div className="company_team_member_con_1">
                <div className="company_team_member_con_1_img"><img src={require('../img/member/kmc.png')} width={200} /></div>
                <div className="company_team_member_con_1_name" style={string.company_team_member_con_1_name} dangerouslySetInnerHTML={{ __html: string.m_company_team_member_3 }} />
                <a href="http://www.linkedin.com/in/minwookim7" target="_blank">
                  <img src={require('../img/linkedin.png')} width={30} />
                </a>
                <div className="company_team_member_con_1_des" style={string.company_team_member_con_1_des_css} dangerouslySetInnerHTML={{ __html: string.company_team_member_3_1 }} />
              </div> */}
            </div>
            <div className="company_team_chart" style={string.m_company_team_chart_css} dangerouslySetInnerHTML={{ __html: string.m_company_team_chart }} />
            <div className="center-background mobile_com_3" style={{ backgroundImage: string.companyChartMobile, height: '516px' }} />
            {/* <div className="company_team_chart_1">{string.company_team_chart_1}</div>
              <div className="company_team_chart_con">
                <div className="company_team_chart_box" style={{ display: 'flex', width: '1200px' }}>
                  <div className="company_team_chart_left_1" style={{ flex: '1' }}>
                    <div className="company_team_chart_left_1_1">
                      {string.company_team_chart_2}
                    </div>
                    <div className="company_team_chart_left_1_2">
                      {string.company_team_chart_3}
                    </div>
                  </div>
                  <div className="company_team_chart_right_1" style={{ flex: '1' }}>
                    <div className="company_team_chart_right_1_1">
                      {string.company_team_chart_4}
                    </div>
                    <div className="company_team_chart_right_1_2">
                      {string.company_team_chart_5}
                    </div>
                  </div>
                </div>
              </div>
              <div className="company_team_chart_con_block">
                <div className="company_team_chart_box_block">
                  <div className="company_team_chart_center_1">
                    <div className="company_team_chart_6">
                      {string.company_team_chart_6}
                    </div>
                  </div>
                  <div className="company_team_chart_center_2">
                    <div className="company_team_chart_7">
                      {string.company_team_chart_7}
                    </div>
                  </div>
                  <div className="company_team_chart_center_3">
                    <div className="company_team_chart_8">
                      {string.company_team_chart_8}
                    </div>
                  </div>
                  <div className="company_team_chart_center_4">
                    <div className="company_team_chart_9">
                      {string.company_team_chart_9}
                    </div>
                  </div>
                  <div className="company_team_chart_center_5">
                    <div className="company_team_chart_10">
                      {string.company_team_chart_10}
                    </div>
                  </div>
                </div>
              </div>
              <div className="company_team_chart_con">
                <div className="company_team_chart_box" style={{ display: 'flex', width: '1200px' }}>
                  <div style={{ flex: '3.1' }}></div>
                  <div className="company_team_chart_left_1" style={{ flex: '1' }}>
                    <div className="company_team_chart_11">
                      {string.company_team_chart_11}
                    </div>
                    <div className="company_team_chart_12">
                      {string.company_team_chart_12}
                    </div>
                    <div className="company_team_chart_13">
                      {string.company_team_chart_13}
                    </div>
                  </div>
                  <div className="company_team_chart_right_1" style={{ flex: '1' }}>
                    <div className="company_team_chart_14">
                      {string.company_team_chart_14}
                    </div>
                    <div className="company_team_chart_15">
                      {string.company_team_chart_15}
                    </div>
                    <div className="company_team_chart_16">
                      {string.company_team_chart_16}
                    </div>
                  </div>
                </div>
              </div> */}
            <div className="company_fkasset" style={string.company_fkasset_css}>{string.company_fkasset}</div>
          </div>
          {/* <div style={{margin: '70px 0px 70px 0px', textAlign: 'center'}}></div> */}
          <div className="company_notice" style={{ paddingTop: '70px', paddingBottom: '30px', fontSize: '30px', fontWeight: 'bold' }}>{string.company_notice}</div>
          {/* <div className="center-background com_5" style={{backgroundImage: `url(${require("../img/company_5.png")})`, height: '140px'}}/>
          <div className="center-background mobile_com_5" style={{backgroundImage: `url(${require("../img/410_m_company_5.png")})`, height: '31px'}}/> */}
          <div style={{ maxWidth: '1200px', display: 'inline-block', width: '100%' }}>
            <Table
              columns={columns}
              rowKey={record => record.key}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange}
              style={{ width: '100%', textAlign: 'center' }}
              expandedRowRender={this.renderDetail}
              expandRowByClick={true}
            />
          </div>
          {/* <div style={{margin: '70px 0px', textAlign: 'center'}}>
            <div className="company_partner" style={{ paddingBottom: '30px' }}>{string.company_partner}</div>
            <div style={{height: '2px', backgroundColor: '#000', width: '100%', maxWidth: '1200px', display: 'inline-block'}}></div>
            <div className="center-background com_7" style={{backgroundImage: `url(${require("../img/company_7.png")})`, height: '533px'}}/>
            <div className="center-background mobile_com_7" style={{backgroundImage: `url(${require("../img/410_m_company_7.png")})`, height: '697px'}}/>
          </div> */}
        </div>
      </div>
    );
  }

  getData = (page) => {
    let result = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (i >= datas.length) break;
      result.push(datas[i]);
    }
    return {
      totalCount: datas.length,
      data: result
    }
  }

};

const datas = [
  {
    "idx": 13,
    "title": string.notice13_title,
    "content": string.notice13_con,
    "createDate": "2019.01.02",
  },
  {
    "idx": 12,
    "title": string.notice12_title,
    "content": string.notice12_con,
    "createDate": "2018.12.26",
  },
  {
    "idx": 11,
    "title": string.notice11_title,
    "content": string.notice11_con,
    "createDate": "2018.12.02",
  },
  {
    "idx": 10,
    "title": string.notice10_title,
    "content": string.notice10_con,
    "createDate": "2018.12.01",
  },
  {
    "idx": 9,
    "title": string.notice9_title,
    "content": string.notice9_con,
    "createDate": "2018.11.20",
  },
  {
    "idx": 8,
    "title": string.notice8_title,
    "content": string.notice8_con,
    "createDate": "2018.11.18",
  },
  {
    "idx": 7,
    "title": string.notice7_title,
    "content": string.notice7_con,
    "createDate": "2018.10.19",
  },
  {
    "idx": 6,
    "title": string.notice6_title,
    "content": string.notice6_con,
    "createDate": "2018.10.13",
  },
  {
    "idx": 5,
    "title": string.notice5_title,
    "content": string.notice5_con,
    "createDate": "2018.09.13",
  },
  {
    "idx": 4,
    "title": string.notice4_title,
    "content": string.notice4_con,
    "createDate": "2018.07.29",
  },
  {
    "idx": 3,
    "title": string.notice3_title,
    "content": string.notice3_con,
    "createDate": "2018.05.07",
  },
  {
    "idx": 2,
    "title": string.notice2_title,
    "content": string.notice2_con,
    "createDate": "2018.01.22",
  },
  {
    "idx": 1,
    "title": string.notice1_title,
    "content": string.notice1_con,
    "createDate": "2017.08.23",
  },

]

export default Company;