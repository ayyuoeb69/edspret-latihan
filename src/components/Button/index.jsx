import style from './style.module.css'

function Button(props){
    return <button onClick={() => props.handleClick(props.title)} className={style.button}>Klik</button>
}

export default Button;