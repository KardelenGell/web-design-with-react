import React, { Component } from 'react'
import Resim from '../ip_baskisi.jpg'

class Ipbaskisi extends Component {
    render() {
        return (
            <div className="FirstComponent">
                <div className="Teknikresmi">
                    <img src={Resim} alt="" />
                </div>
                <h1 style={{ fontSize: '25px' }} >İP BASKISI</h1> <br></br>
                <div className="Text">
                    <p>
                        Renklerin açıktan koyuya olan değerlerinden yararlanmak ve yüzey üzerinde renk düzenleri elde etmek için yapılan çalışmalardır.
					</p>
                    <br></br>
                    <h2 style={{ fontSize: '25px' }}> İp Baskısı İçin Gerekli Malzemeler </h2>
                    <p>  • 75-100 cm. uzunluğunda kalınca bir iplik  </p>
                    <p>  • Sulu boya ve fırçası   </p>
                    <p>  • Üzerine resim yapılacak malzeme </p>
                    <br></br>
                    <div className="Insidetext">
                        <p>
                            Öncelikle kullanılacak olan ip boyanır. Boyanan ip, resim yapacağımız malzemenin üzerine oynatmadan güzel bir biçimde yayılır. Daha sonra ikinci resim yapacağımız malzeme iplik arada kalacak şekilde diğerinin üzerine köşe köşeye gelecek biçimde konulur. Bunu yaparken ipliğin ucu dışarıda kalmalıdır.
						</p>
                        <p>
                            Sonra da kalın kaplı bir kitapla resim yapacağımız malzemenin üzerine baskı yapılarak iplik, ucundan yavaş yavaş çekilir. iplik tamamen çıktıktan sonra malzemeler birbirinden ayrılır.
                        </p>
                        <br></br>
                    </div>
                    <p>
                        Birden fazla renkle yapılan çalışmalarda, her rengi kullanırken fırçayı kesinlikle temizlemeliyiz.
					</p>
                    <p> </p>
                </div>
                <br></br><br></br><br></br><br></br>
            </div>
        )
    }
}

export default Ipbaskisi;

