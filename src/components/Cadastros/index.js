import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import './index.css'

export default function Cadastros({ initialData = {}, onSubmit, title }) {
    const [nome, setNome] = useState(initialData.name || '');
    const [tipo, setTipo] = useState(initialData.type || '');
    const [preco, setPreco] = useState(initialData.price || '');
    const [detalhe, setDetalhe] = useState(initialData.detail || '');
    const [imagem, setImagem] = useState(null);
    const [imagemURL, setImagemURL] = useState(initialData.image || '');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setNome(initialData.name || '');
        setTipo(initialData.type || '');
        setPreco(initialData.price || '');
        setDetalhe(initialData.detail || '');
        setImagemURL(initialData.image || '');
    }, [initialData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let imageUrl = imagemURL;

        if (imagem) {
            const storage = getStorage();
            const storageRef = ref(storage, `images/${imagem.name}`);
            await uploadBytes(storageRef, imagem);
            imageUrl = await getDownloadURL(storageRef);
        }

        const updatedData = {
            name: nome,
            price: parseFloat(preco),
            type: tipo,
            detail: detalhe,
            image: imageUrl,
        };
        await onSubmit(updatedData);
        setIsLoading(false);
    };

    return (
        <>
            <h1>{title} produtos</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='nome' className='label'>Nome</label>
                    <input 
                        type='text' 
                        id='nome' 
                        name='nome' 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='tipo'>Tipo</label>
                    <input 
                        type='text' 
                        id='tipo' 
                        name='tipo' 
                        value={tipo} 
                        onChange={(e) => setTipo(e.target.value)} 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='preco'>Preço</label>
                    <input 
                        type='number' 
                        id='preco' 
                        name='preco' 
                        step='0.01' 
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='detalhe'>Detalhes</label>
                    <textarea 
                        id='detalhe' 
                        name='detalhe' 
                        value={detalhe} 
                        onChange={(e) => setDetalhe(e.target.value)} 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='imagem'>Imagem</label>
                    <input 
                        type='file' 
                        id='imagem' 
                        name='imagem' 
                        onChange={(e) => setImagem(e.target.files[0])} 
                    />
                </div>
                <button type='submit' disabled={isLoading}>
                    {isLoading ? 'Salvando...' : 'Salvar'}
                </button>
            </form>
        </>
    );
}
