import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link, Route } from 'react-router-dom';
import Modal from 'react-modal';
import string from '../string';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state={modal:false}
  }
  render() {
    return (
      <div className="global-wrapper">
        <div className="global-container">
          <div className="footer-wrapper">
            <div style={{ background: '#e3e3e3', height: '1px' }} />
            {/* <div style={{ background: '#ffffff', padding: '20px 20px' }}>
              <div style={{  }}>
                <div className="footer-content-wrapper">
                  <Link exact to="/agreement?t=1#" className="footer-text" style={{ float: 'left' }}>
                    이용약관
                  </Link>
                  <div className="footer-text" style={{ float: 'left', margin: '0px 10px' }}>
                    |
                  </div>
                  <Link exact to="/agreement?t=2#" className="footer-text" style={{ float: 'left' }}>
                    개인정보취급방침
                  </Link>
                </div>
                <div style={{ clear: 'both' }} />
              </div>
            </div> */}
            <div style={{ background: '#e3e3e3' }}>
              <div style={{ padding: '20px' }}>
                <div style={{ float: 'left', padding: '20px 20px' }}>
                  <img src={require('../img/common/logo.png')} />
                </div>
                <div className="footer-blobs-info-text-1" dangerouslySetInnerHTML={{ __html: string.footer1 }} />
                <div className="footer-blobs-info-text-2" dangerouslySetInnerHTML={{ __html: string.footer2}} />
                <div style={{ clear: 'both' }} />
              </div>
            </div>
            
            <Modal
              isOpen={this.state.modal}
              style={modalStyles}
              onRequestClose={()=>this.setState({modal:false})}
            >
              <div className="">
              </div>
            </Modal>
          </div>
        </div>
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
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    borderRadius: '5px',
    padding: 0,
    textAlign: 'center'
  }
};
export default Footer;