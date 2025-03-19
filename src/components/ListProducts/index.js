import React, { useContext, useState } from 'react';
import './index.css';
import Modal from '../Modal';
import Cadastros from '../Cadastros';
import { AuthContext } from '../../contexts/auth';

export default function ListProducts({ products }) {
    const { updateProduct, addProduct, deleteProduct } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const handleOpenModal = (product) => {
        setCurrentProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentProduct(null);
    };

    const handleSubmit = (updatedData) => {
        if (currentProduct) {
            updateProduct(currentProduct.id, updatedData);
        } else {
            addProduct(updatedData);
        }
        handleCloseModal();
    };

    const handleDelete = (productId) => {
        deleteProduct(productId);
    };

    return (
        <div className='product-list'>
            <h2>Product List</h2>
            <button className='add-product-button' onClick={() => handleOpenModal(null)}>Adicionar Produto</button>
            <div className='product-list-header'>
                <span>Name</span>
                <span>Price</span>
                <span>Type</span>
                <span>Details</span>
                <span>Image</span>
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className='product-list-item'>
                        <span>{product.name}</span>
                        <span>R$ {product.price.toFixed(2)}</span>
                        <span>{product.type}</span>
                        <span>{product.detail}</span>
                        {product.image && <img src={product.image} alt={product.name} />}
                        <div className='product-actions'>
                            <button onClick={() => handleOpenModal(product)}>Atualizar</button>
                            <button onClick={() => handleDelete(product.id)}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Cadastros
                    initialData={currentProduct || {}}
                    onSubmit={handleSubmit}
                    title={currentProduct ? "Atualizar" : "Adicionar"}
                />
            </Modal>
        </div>
    );
}
