import style from './style.module.css';
import Button from '../Button';

const Card = ({titled, colored, stock, navbarList}) => {

    function handleClick(text){
        alert(navbarList);
    }
    
    return(
        <div className={style.card} id="idCard">
            <h4>{titled}</h4>
            <p>Warna : {colored}</p>
            <hr/>
            <p style={{color: stock < 1 ? 'red': 'green'}}>Stock : {stock}</p>
            <Button title={titled} handleClick={handleClick}/>
        </div>
    )
}

export default Card;