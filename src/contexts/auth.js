import { createContext, useState, useEffect } from "react";
import { collection, doc, getDocs, updateDoc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebaseConnect";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "produtos"));
            const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(list);
        };

        fetchData();
    }, []);

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(list);
    };

    const addProduct = async (newProduct) => {
        const productDoc = await addDoc(collection(db, "produtos"), newProduct);
        setData(prevData => [...prevData, { id: productDoc.id, ...newProduct }]);
    };

    const updateProduct = async (id, updatedData) => {
        const productDoc = doc(db, "produtos", id);
        await updateDoc(productDoc, updatedData);
        setData(prevData => prevData.map(item => item.id === id ? { ...item, ...updatedData } : item));

    };

    const deleteProduct = async (id) => {
        const productDoc = doc(db, "produtos", id);
        await deleteDoc(productDoc)
        fetchData()
        .then(()=>{
            alert('deletado com sucesso')
        })
        .catch((e) =>{
            console.log('Erro ao deletar', e)
        })
    };

    return (
        <AuthContext.Provider
            value={{
                data,
                addProduct,
                updateProduct,
                deleteProduct
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;