import './index.css';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}