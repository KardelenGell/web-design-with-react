import React, { Component } from 'react'
import Resim from '../tas_baskisi.jpg'

class Tasbaskisi extends Component {
    render() {
        return (
            <div className="FirstComponent">
                <div className="Teknikresmi">
                    <img src={Resim} alt="" />
                </div>
                <h1 style={{ fontSize: '25px' }} >TAŞ BASKISI</h1> <br></br>
                <div className="Text">
                    {/* <h2 style={{fontSize:'40px'}}>Teknikler</h2>  <br></br> */}
                    <p>
                        Taş baskısına düz baskı da denir. Suyun ve yağın birbirini itmesinden ve baskı taşının basacak ve basmayacak kısımlarının hazırlanmasından ibarettir.  Taş  baskısında, yağı emen sert kireç taşları (lito taşı) kalıp olarak kullanılır.

					</p>
                    <br></br>
                    <div className="Insidetext">
                        <p>
                            Lito taşı düzeltilip perdahlandıktan sonra, yapılacak resim, üzerine yağlı lito kalemi ya da yağlı tuşe mürekkebiyle işlenir. Yapılan resmin kuruması için bir süre beklenir. Daha sonra Arap zamkı ve nitrik asit karışımı bir sıvı, resmin üzerine sürülür. Böylece taşın yağ almamış kısımlarının, tekrar yağ almasına karşı hassasiyeti giderilir.
                    </p>
                        <p>
                            Baskı işine geçmeden önce de süngerle taşın bütün yüzüne su sürülür. böylece resmin bulunduğu yer, yağlı olduğu için suyu almaz, diğer kısımlar suyu emer. Mürekkepli bir merdane taşın üzerinde gezdirildiğinde yağlı kısımlar boyanır, suyu emen gereksiz kısımlar ise boyanmaz. Taş kalıp baskı yapılacak malzemenin üzerine konduktan sonra, temiz bir merdane ile presten geçirilir.
                    </p>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
            </div>
        )
    }
}
export default Tasbaskisi;

