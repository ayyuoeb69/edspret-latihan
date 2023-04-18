import Header from "../../components/Header";
import style from './style.module.css';
import Card from '../../components/Card';
import { useState, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';

function Home(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count, 'useEffect')
    }, []);

    function handleClick(){
        setCount(count + 1);
        console.log(count, 'handleClick');
    }

    const listProduct = [
        {
            'title': 'Motor',
            'color': 'Merah',
            'stock': '2'
        },
        {
            'title': 'Mobil',
            'color': 'Biru',
            'stock': '0'
        },
        {
            'title': 'Becak',
            'color': 'Ijo',
            'stock': '8'
        }
    ];

    const navbarList = ['Home', 'About', 'Checkout'];

    return (
        <>
            <Header navbars={navbarList} />
            <div className={style.container}>
                <h3 className={style['text-page']}>Halaman Home</h3>
                <h4>Nilai Count adalah {count} </h4>
                <button onClick={handleClick}>Tambah Count</button>
                <Row>
                {
                    listProduct.map((item, index) => {
                        return(
                            <Col sm="4" key={index}>
                                <Card 
                                    titled={item.title} 
                                    colored={item.color} 
                                    stock={item.stock} 
                                    navbarList={navbarList}
                                />
                            </Col>
                        )
                    })
                }
                </Row>
            </div>
            
        </>
    );
}

export default Home;