import style from './App.module.css'
import { Alert, Button } from 'react-bootstrap';


function Apps() {

  const artikel = [
    {
      'title': 'Bola',
      'content': 'bla bla bla',
    },
    {
      'title': 'Presiden',
      'content': 'bla bla bla 2',
    },
    {
      'title': 'Belajar',
      'content': 'bla bla bla 3',
    }
  ];

    return (
      <>
      <Alert variant='primary'>Halo</Alert>
      <Button>Halo</Button>
        <h1>Halo</h1>
        {
          artikel.map((item, idx) => {
            return (
              <div key={idx} className={style.card}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            )
          })
        }
      </>
    )
}

export default Apps;
