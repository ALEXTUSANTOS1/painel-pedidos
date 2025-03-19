import './index.css'
export default function Header({title}){
    return(
        <div className="header">
            <h2 className='title'>{title}</h2>
        </div>
    )
}