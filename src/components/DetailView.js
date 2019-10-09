import React, { Component } from 'react';
import axios from 'axios';
import DetailViewCard from './DetailViewCard';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDetailChange = this.onDetailChange.bind(this);
  }

  onDetailChange = async e => {
    e.preventDefault();
    let businessId = this.props.info;
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}`,
      {
        headers: {
          Authorization:
            'Bearer BSHoa-Ky4u-KV6x0BAMflZXlUc480GhS-AMMDw9W5TJr3QZm6bjozXdrUOM8BF7AQeT7JJnfws4GDFJK3iEk67lin_xbU7Tp8oNeeDa1YWqobPHRd82lupSr2vGIXXYx'
        }
      }
    );

    this.setState({ businessDetail: response.data });
    console.log(this.state.businessDetail);
  };

  render() {
    if (this.props.info !== '') {
      console.log('worked');

      console.log(this.props);
      return (
        <div onClick={this.onDetailChange}>
          <DetailViewCard {...this.state} {...this.props} />
        </div>
      );
    } else {
      return <div onClick={this.onDetailChange}>Empty</div>;
    }
  }
}

export default DetailView;
