import React, { Component } from 'react'
import Resim from '../patates_baskisi.jpg'

class Patatesbaskisi extends Component {
    render() {
        return (

            <div className="FirstComponent">

                <div className="Teknikresmi">
                    <img src={Resim} alt="" />
                </div>
                <h1 style={{ fontSize: '25px' }} >PATATES BASKISI</h1> <br></br>
                <div className="Text">
                    <p>
                        Bu baskı türünde patates, yer elması, havuç, turp, soğan gibi sebzeler kalıp olarak kullanılır. Teknikleri hemen hemen birbirine benzer. Bunlardan patates en çok kullanılan ve adı geçen bir sebzedir.
					</p>
                    <br></br>
                    <h2 style={{ fontSize: '25px' }}> Patates Baskısı İçin Gerekli Malzemeler </h2>
                    <p>  • Yapacağımız örgeye (motife) uygun büyüklükte düzgün bir patates.    </p>
                    <p>  • Ucu sivri, keskin bir bıçak (maket bıçağı)  </p>
                    <p>  • Üzerine resim yapılacak malzeme </p>
                    <p>  • Bir bardak su   </p>
                    <p>  • Sulu boya ve fırçası    </p>
                    <p>  • Kopya ve kurşun kalemi  </p>

                    <br></br>
                    <div className="Insidetext">
                        <p>
                            Yapacağımız şeklin büyüklüğüne uygun olarak patates düzgünce ortadan kesilir. Sonra baskısını yapacağımız örge (motif), patatesin kesilen yüzüne kopya kalemi ile çizilir. Daha sonra da basılacak kısımlar kabarık kalacak şekilde maket bıçağı ile patates oyulur. Yüksekte kalan kısımlar sulu boyayı fazla sulandırmadan fırça ile boyanır. Patatesin boyalı yüzeyi resim yapacağımız malzemenin üzerine oynatmadan bastırılır ve kaydırmadan çekilir.
						</p>
                        <br></br>
                    </div>
                    <p>
                        Aynı şekilde yer elması, havuç, turp gibi sebzelerden de yararlanmak mümkündür. Soğanla yapılan baskı resimlerinde ise soğanın katları ve doğal yapısı önemlidir. Patates baskısında olduğu gibi basılan soğan kalıbı izleri renk dalgaları halinde yüzeye aynen geçer.
					</p>
                    <p>
                        Yaş sebzelerle yapılan kalıpları hemen kullanmak gerekir. Çünkü kesilen sebzeler çabuk kururlar ve yapılan kalıplar suların çekilmesi nedeniyle büzülüp küçülerek kullanılmaz duruma gelirler.
                    </p>
                </div>

                <br></br><br></br><br></br><br></br>

            </div>
        )
    }
}
export default Patatesbaskisi;

