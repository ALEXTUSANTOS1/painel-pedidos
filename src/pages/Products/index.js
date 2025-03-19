import '../Home/index.css'
import Menu from '../../components/Menu'
import Header from '../../components/Header'
import ListProducts from '../../components/ListProducts'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

export default function Products() {
    const { data } = useContext(AuthContext)
    console.log(data)
    return (
        <div className='container'>
            <Menu />
            <main style={{ flex: 1, marginTop: '-20px' }}>
                <Header title={'Products'} />
                <div className='content'>
                    <div className='list-products-container'>
                        <ListProducts products={data} />
                    </div>
                </div>
            </main>
        </div>
    )
}
