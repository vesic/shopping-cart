import React from 'react'

const Carousel = (props) => {
  return (
    <div className=''>
      <div className="col-md-12"  style={{marginBottom:20}}>
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                  <div className="item active">
                      <img className="slide-image" src="http://placehold.it/1200x400" alt="" />
                  </div>
                  <div className="item">
                      <img className="slide-image" src="http://placehold.it/1200x400" alt="" />
                  </div>
                  <div className="item">
                      <img className="slide-image" src="http://placehold.it/1200x400" alt="" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Carousel
