import React from 'react'
import '../styles/stylesLinks.css'

function Links(){
    return(
        <div className='container d-flex justify-content-between'>
           <a href='https://www.ecoparq.cdmx.gob.mx/descarga-las-apps-de-pago'> <i class="bi bi-p-circle-fill"></i> </a> 
           <a href='https://gulfmexico.mx/'> <i class="bi bi-fuel-pump"></i> </a> 
           <a href='http://www.casadelalma.mx/'> <i class="bi bi-cup-hot-fill"></i> </a> 
           <a href='https://www.vwcomerciales.com.mx/es/postventa/unidades-moviles-de-servicio.html?adchan=sem&campaign=sea_msu&adgroup=msu&publisher=google&adpl=google&country=mx&language=es&adcr=keywords_msu&adpay=paid&gclid=EAIaIQobChMIseXIr-jl-wIVGBitBh2cswSHEBAYASAAEgKb0PD_BwE'> <i class="bi bi-tools"></i> </a> 
           <a href='https://www.estudiantefunval.org/'> <i class="bi bi-telephone-fill"></i> </a>                  
        </div>
        
    )
}

export default Links