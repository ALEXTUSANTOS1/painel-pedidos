import '../Home/index.css'
import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function Requests(){
    return(
            <div className='container'>
                <Menu />
                <main style={{ flex: 1, marginTop: '-20px' }}>
                    <Header title={'Home'}/>
                    <div className='content'>
                        <h1>Welcome to the Requests Page</h1>
                        <p>This is the main content area.</p>
                    </div>  
                </main>
            </div>
    )
}