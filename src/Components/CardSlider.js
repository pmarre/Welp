import React, { Component } from 'react';

class CardSlider extends Component {
  render() {
    return (
      <div className="container">
        <div className="container p-t-3">
          <div className="row">
            <div className="col-lg-12">
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </div>
        <div className="carousel slide" data-ride="carousel" id="postsCarousel">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-md-right lead">
                <a
                  className="btn btn-outline-secondary prev"
                  href=""
                  title="go back">
                  <i className="fa fa-lg fa-chevron-left" />
                </a>
                <a
                  className="btn btn-outline-secondary next"
                  href=""
                  title="more">
                  <i className="fa fa-lg fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="container p-t-0 m-t-2 carousel-inner">
            <div className="row row-equal carousel-item active m-t-0">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-img-top card-img-top-250">
                    <img
                      className="img-fluid"
                      src="http://i.imgur.com/EW5FgJM.png"
                      alt="Carousel 1"
                    />
                  </div>
                  <div className="card-block p-t-2">
                    <h6 className="small text-wide p-b-2">Insight</h6>
                    <h2>
                      <a href="#">Why Stuff Happens Every Year.</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-img-top card-img-top-250">
                    <img
                      className="img-fluid"
                      src="http://i.imgur.com/Hw7sWGU.png"
                      alt="Carousel 2"
                    />
                  </div>
                  <div className="card-block p-t-2">
                    <h6 className="small text-wide p-b-2">Development</h6>
                    <h2>
                      <a href>How to Make Every Line Count.</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-img-top card-img-top-250">
                    <img
                      className="img-fluid"
                      src="http://i.imgur.com/g27lAMl.png"
                      alt="Carousel 3"
                    />
                  </div>
                  <div className="card-block p-t-2">
                    <h6 className="small text-wide p-b-2">Design</h6>
                    <h2>
                      <a href>Responsive is Essential.</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-equal carousel-item m-t-0">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-img-top card-img-top-250">
                    <img
                      className="img-fluid"
                      src="//visualhunt.com/photos/l/1/office-student-work-study.jpg"
                      alt="Carousel 4"
                    />
                  </div>
                  <div className="card-block p-t-2">
                    <h6 className="small text-wide p-b-2">Another</h6>
                    <h2>
                      <a href>Tagline or Call-to-action.</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-img-top card-img-top-250">
                    <img
                      className="img-fluid"
                      src="//visualhunt.com/photos/l/1/working-woman-technology-computer.jpg"
                      alt="Carousel 5"
                    />
                  </div>
                  <div className="card-block p-t-2">
                    <h6 className="small text-wide p-b-2">
                      <span className="pull-xs-right">12.04</span> Category 1
                    </h6>
                    <h2>
                      <a href>This is a Blog Title.</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4 fadeIn wow">
                <div className="card">
                  <div className="card-img-top card-img-top-250">
                    <img
                      className="img-fluid"
                      src="//visualhunt.com/photos/l/1/people-office-team-collaboration.jpg"
                      alt="Carousel 6"
                    />
                  </div>
                  <div className="card-block p-t-2">
                    <h6 className="small text-wide p-b-2">Category 3</h6>
                    <h2>
                      <a href>Catchy Title of a Blog Post.</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSlider;
