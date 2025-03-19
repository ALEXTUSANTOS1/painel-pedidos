import { FaUserTie } from "react-icons/fa";
import './index.css';
import { useState } from 'react';

export default function Menu() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <aside className='menu'>
            <ul className='lista'>
                <div className='perfil'>
                    <FaUserTie color="#d9dee2" size={70} className="icon" />
                    <h2 className="nome">Bem Vindo</h2>
                </div>
                <hr />
                <li><a className='link' href="/">Home</a></li>
                <li><a className='link' href="/products">Products</a></li>
                <li><a className='link' href="/contacts">Contacts</a></li>
                <li><a className='link' href="/requests">Requests</a></li>
            </ul>
        </aside>
    );
}