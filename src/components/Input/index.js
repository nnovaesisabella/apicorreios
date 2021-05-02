import { useState } from 'react';
import './styles.css';
import axios from 'axios';

export const InputContent = () => {

    const [cep, setCep]= useState('');
    const [info, setInfo] = useState({
        cep: '',
        logadouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ddd: '',
        error: '',
    });


 

    const getInfo = async () => {

        if (cep === '') {
            await setInfo({ error: 'Digite o cep' })
        } else {
            await axios.get('http://viacep.com.br/ws/' + cep + '/json/')
                .then(res => {
                    setInfo(res.data)
                   
                    
                })
                .catch((error) => {
                    setInfo({ error: 'Cep não encontrado' })


                })
        }
    }

    const handleCep = (e) => {

        if (e.target.value) {
            setCep(e.target.value)
        } else {
            setInfo({ error: "Digite o cep" })
        }
    }

    return (


        < div className="content">
            <h2> ENCONTRE SEU ENDEREÇO </h2>
            <div className="divinput">
                <input type="text" placeholder="Digite o CEP" onChange={(e) => e.target.value !== '' ? handleCep(e) : e.target.value} />
                <button onClick={getInfo}> Buscar </button>
            </div>
            <p>{info.error}</p>
            <ul>
                <li>CEP:  <strong>{info["cep"]}  </strong> </li>
                <li>Logradouro:  <strong>{info["logadouro"]} </strong> </li>
                <li>Complemento: <strong>{info["complemento"]} </strong> </li>
                <li>Bairro:   <strong>{info["bairro"]} </strong> </li>
                <li>Cidade: <strong> {info["localidade"]} </strong> </li>
                <li>UF:    <strong> {info["uf"]} </strong>  </li>
                <li>DDD:   <strong> {info["ddd"]} </strong> </li>

            </ul>
        </div>
    );
}




