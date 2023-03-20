import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
import '../styles/SGModal.css';

import OMO from '../images/OMO.PNG';

class SGModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)}>show</button>

        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} width={900} height={600}>
          <div className="modalTitle">Skullgirls Online Video Database</div>
          <div className="content">
            <img src={OMO} alt="OMO" />
            <div className="contentText">One more once is an online video database that I created. 
            The goal was to store videos of gameplay that others can use to study and improve.
            I created custom dropdown menus and search functionality to help the user search for the characters or team they would like to see.
            </div>
          </div>
        </Rodal>
      </div>
    );
  }
}

export default SGModal;