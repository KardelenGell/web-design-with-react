import React, {Component} from 'react'
import Resim from '../linolyum_baskisi.jpg'

class Linolyumbaskisi extends Component{
    render()
    {
        return(
            
            <div className="FirstComponent"> 
             <div className="Teknikresmi">
             <img src={Resim} alt="" />
            </div> 
                <h1 style={{fontSize:'25px'}} >LİNOLYUM BASKISI</h1> <br></br>
                <div className="Text">
                    <p>
                    Kalıbın(yer muşambası) uzun ömürlü oluşu ve saklama kolaylığı bulunuşu nedeniyle diğer baskılardan daha uygundur.
                    </p>
                    <p>
                    Linolyum baskı resimlerinde desen, kompozisyon ve siyah - beyaz etkisi gibi unsurlar çok önemlidir.
                    </p>
                    <br></br>
                    <h2 style={{fontSize:'25px'}}> Linolyum Baskısı İçin Gerekli Malzemeler </h2>
            
                    <p>  • Yer muşambası (linolyum)    </p>
                    <p>  • Linolyum bıçakları (ucu keskin bir çakı)  </p>
                    <p>  • Matbaa ya da teksir mürekkebi </p>
                    <p>  • İki adet merdane   </p>
                    <p>  • Mürekkebi emen mat baskı kağıdı    </p>

                    <br></br>
                    <p>
                    Model ile muşamba arasına konulan karbon kağıdı vasıtasıyla resim kopya edilir. Muşambayı oyarak kalıp haline sokmak için özel linolyum bıçakları ya da ucu keskin çakı, kunduracı bıçağı gibi aletler kullanılır. Bunlardan en uygun olanı, kesici ağızları çeşitli profillerde olan linolyum oyma bıçaklarıdır.
                    </p>
                    <br></br>
                    <div className="Insidetext">
						<p>
                        Baskıdan sonra, oyulan kısımların beyaz, oyulmayan kısımların siyah olarak çıkacağı düşünülmelidir. Ara tonlar sık ya da seyrek tarama çizgileriyle sağlanır. Oyma işi bittikten sonra sert kıllı bir fırça ile muşamba iyice temizlenir. Böylece kalıp, oyuklarında kalmış olan pürüzler ve muşamba artıklarından temizlenmiş olur.Muşamba düz bir yere konulur, daha iyisi aynı büyüklükte temizlenmiş ve zımparalanmış bir tahta takaza yapıştırılır.
						</p>
                        <p>
                        Mürekkep, cam levha üzerine merdane ile yayılır. Merdane üzerindeki mürekkep, muşamba kalıpta gezdirildiğinde çıkıntılı olan kısımlar boyanır. Eğer merdane yoksa bir fırça ile mürekkeplenebilir. 
                        </p>
                        <p>
                        Muşamba kalıp üzerine konan kağıdın üzerinden temiz bir merdane geçirildiğinde boyalı kısımlar resim yapacağımız yüzeye aynen geçmiş olur.
                        </p>
                        <br></br>
                    </div>  
					<p>
                    Linolyum baskıda, her renk için ayrı kalıp hazırlanarak renkli resimler de basılabilir.
                    </p>
                </div>
                
            <br></br><br></br><br></br><br></br>
            
            </div>
        )
    }
}
export default Linolyumbaskisi;

