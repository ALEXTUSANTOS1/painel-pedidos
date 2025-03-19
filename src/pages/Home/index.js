    import './index.css'
    import Menu from '../../components/Menu'
    import Header from '../../components/Header'

    export default function Home() {
        return (
            <div className='container'>
                <Menu />
                <main style={{ flex: 1, marginTop: '-20px' }}>
                    <Header title={'Home'}/>
                    <div className='content'>
                        <h1>Welcome to the Home Page</h1>
                        <p>This is the main content area.</p>
                    </div>  
                </main>
            </div>
        )
    }
