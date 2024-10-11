import React from 'react'
import classes from './Modal.module.css'
import Button from '../Button/Button'
import Card from '../Card'
import ReactDOM from 'react-dom';
 
const Backdrop = (props) => {
  return <div className={classes.backdrop}onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
  return (
 
        <Card className={classes.modal}> 
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <main className={classes.content}>
            <p>{props.message}</p>
        </main>
        <footer className={classes.actions}>
            <Button onClick={props.onClick}>Ok</Button>
            {/* <Button>Cancel</Button> */}
        </footer>
        </Card>
 
  )
}
const  Modal = (props) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(        <Backdrop classNam={props.backdrop} onClick={props.onClick}/>,document.getElementById('backdrop-root'), )}
 {ReactDOM.createPortal(      <ModalOverlay className={props.className} title={props.title} message={props.message} onClick={props.onClick} />, document.getElementById('modal-root'))}
 
 

    </React.Fragment>
  )
}

export default Modal