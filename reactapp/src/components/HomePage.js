import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Picture from './yaprak_baskisi2.jpg'
import Picture2 from './patates_baskisi2.jpg'
import Picture3 from './ip_baskisi2.jpg'
import Picture4 from './tas_baskisi2.jpg'
import Picture5 from './agac_baskisi2.jpg'
import Picture6 from './linolyum_baskisi2.jpg'

class HomePage extends Component {
  render() {
    return (
      <div className="BaskiTeknikleri"> <br></br><br></br>
        <h1>Resim Baskı Teknikleri Nelerdir?</h1> <br></br><br></br><br></br>

        <div className="Teknikler">
          <p style={{ color: '#FFFFFF' }}> → Yaprak Baskısı</p>
          <p style={{ color: '#FFFFFF' }}> → Patates Baskısı</p>
          <p style={{ color: '#FFFFFF' }}> → İp Baskısı</p>
          <p style={{ color: '#FFFFFF' }}> → Taş Baskısı</p>
          <p style={{ color: '#FFFFFF' }}> → Ağaç Baskısı</p>
          <p style={{ color: '#FFFFFF' }}> → Linolyum Baskısı</p>
        </div>

        <div className="Slider">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Picture}
                alt="Yaprak Baskısı"
              />
              <Carousel.Caption>
                <h3>Yaprak Baskısı</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Picture2}
                alt="Patates Baskısı"
              />
              <Carousel.Caption>
                <h3>Patates Baskısı</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Picture3}
                alt="İp Baskısı"
              />
              <Carousel.Caption>
                <h3>İp Baskısı</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Picture4}
                alt="Taş Baskısı"
              />
              <Carousel.Caption>
                <h3>Taş Baskısı</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Picture5}
                alt="Ağaç Baskısı"
              />
              <Carousel.Caption>
                <h3>Ağaç Baskısı</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Picture6}
                alt="Linolyum Baskısı"
              />
              <Carousel.Caption>
                <h3>Linolyum Baskısı</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

    )
  }
}
export default HomePage;