import React, { Component } from 'react';
import axios from 'axios';
import DetailViewCard from './DetailViewCard';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.onDetailChange = this.onDetailChange.bind(this);
  }

  onDetailChange = async id => {
    let businessId = id;
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}`,
      {
        headers: {
          Authorization:
            'Bearer BSHoa-Ky4u-KV6x0BAMflZXlUc480GhS-AMMDw9W5TJr3QZm6bjozXdrUOM8BF7AQeT7JJnfws4GDFJK3iEk67lin_xbU7Tp8oNeeDa1YWqobPHRd82lupSr2vGIXXYx'
        }
      }
    );
    this.setState({ businessDetail: response.data, show: true });
    console.log(this.state.businessDetail);
  };

  getShowStatus = status => {
    this.setState({
      show: status
    });
  };

  render() {
    if (this.props.info !== '' && this.state.show === true) {
      return (
        <div>
          <DetailViewCard
            {...this.state}
            {...this.props}
            callbackFromParent={this.getShowStatus}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DetailView;
