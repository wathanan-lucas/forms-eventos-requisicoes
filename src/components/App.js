import React from 'react'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";         
import Busca from './Busca';
import "primereact/resources/themes/lara-dark-purple/theme.css"
//import "primeflex/"

const App = () => {
    return (
        <div className='grid justify-content-center m-auto w-9 border-round border-3 border-400 p-3'>
            <div className="col-12">
                <h1>Exibir uma lista de...</h1>
            </div>

            <div className="col-8">
                <Busca />
            </div>
        </div>
    )

}

export default App