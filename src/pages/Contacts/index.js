import '../Home/index.css'
import Menu from '../../components/Menu'
import Header from '../../components/Header'

export default function Contacts() {
    return (
        <div className='container'>
            <Menu />
            <main style={{ flex: 1, marginTop: '-20px' }}>
                <Header title={'Contacts'}/>
                <div className='content'>
                    <h1>Welcome to the Contacts Page</h1>
                    <p>This is the main content area.</p>
                </div>
            </main>
        </div>
    )
}
