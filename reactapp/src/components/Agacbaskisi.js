import React, { Component } from 'react'
import Resim from '../agac_baskisi.jpg'

class Agacbaskisi extends Component {
    render() {
        return (

            <div className="FirstComponent">

                <div className="Teknikresmi">
                    <img src={Resim} alt="" />
                </div>
                <h1 style={{ fontSize: '25px' }} >AĞAÇ BASKISI</h1> <br></br>
                <div className="Text">
                    <p>
                        En eski baskı türlerinden biridir. Yapılış şekli bakımından linolyum baskısına çok benzer, yalnız kalıp olarak muşamba yerine tahta kullanılır.
					</p>
                    <p>
                        Bu baskıda kullanılacak ağaçların yapısı sağlam ve dokusu da oymaya elverişli olmalıdır. Armut ve şimşir gibi ağaçlar bu isteğe uygundur.
                    </p>
                    <br></br>
                    <div className="Insidetext">
                        <p>
                            Kalıp hazırlamak için seçilen ağaç gövdesi, uzunlamasına kesilir. Kesilen parça, tahta ya da kontrplak şekline getirilip, yüzeyi rende ile düzeltilir. Ağacın elyaflarından yararlanmak istenirse, çelik tel fırça ile fırçalanır; böylece yumuşak kısımlar aşınır, sert kısımlar yüksek kalır.
						</p>
                        <p>
                            Baskı yapıldığında ağacın damar elyafı doğal olarak kalır ve hoş bir görünüş elde edilir. Eğer perdahlanıp pürüzsüz bir yüzey olarak hazırlanırsa, üzerine yapacağımız resmi ters olarak kopya eder ve oyma işlemine geçeriz. Bundan sonra yapılacak işler de aynı linolyum baskısında olduğu gibidir.
                        </p>
                    </div>

                </div>

                <br></br><br></br><br></br><br></br>

            </div>
        )
    }
}

export default Agacbaskisi;

