import React, {Component} from 'react'
import Resim from '../yaprak_baskisi.jpg'

class Yaprakbaskisi extends Component{
    render()
    {
        return(
            
            <div className="FirstComponent"> 
             <div className="Teknikresmi">
             <img src={Resim} alt="" />
            </div> 
                <h1 style={{fontSize:'25px'}} >YAPRAK BASKISI</h1> <br></br>
                <div className="Text">
                    <p>
						Bitki yapraklarının kalıp olarak kullanılması ile yapılan bir baskı türüdür.
					</p>
                    <br></br>
                    <div className="Insidetext">
						
							Bir yaprağı incelediğimizde alt kısmının damarlı, üst kısmının da düz olduğunu görürüz. Damarlı olan yüzü sulu boya ile boyayıp resim yapacağımız yüzeyin üzerine bastırırsak yaprağın şekli aynen çıkar.
						
                    </div>  
                    <br></br>
					<p>
						Bol damarlı ve kenarları dilimli olan yapraklarla yapılan baskılar, daha başarılı olur.
					</p>
                </div>

            <br></br><br></br><br></br><br></br>
            
            </div>
        )
    }
}
export default Yaprakbaskisi;

