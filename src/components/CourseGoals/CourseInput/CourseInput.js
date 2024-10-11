import React, { useState, useRef } from 'react';
 
import Button from '../../UI/Button/Button';
import  classes from'./CourseInput.module.css';
import Modal from '../../UI/Modal/Modal';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isEntered, SetIsNotEntered] = useState(false)
const [modal, setModal] = useState({
  isShow: false,
  message: '',
  title: ''
})
const inputNameRef = useRef()
 
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
 
    // if (enteredValue.length === 0) {
    //   SetIsNotEntered(true)
    //   return 
    // } else {
    // SetIsNotEntered(false)
    // }
 
  };

  const formSubmitHandler = (event) => {
    
    event.preventDefault();

    if (inputNameRef.current.value.trim().length < 6 ) {
      setModal({
        isShow: true,
        message: 'Should be more then please change',
        title: 'Some error'
      })
    }
    if (inputNameRef.current.value.trim().length === 0) {
      setModal({
        isShow: true,
        message: 'Please type sothing',
        title: "No data"
      })
    
       
 
      SetIsNotEntered(true)
      return ;
    } else {
    SetIsNotEntered(false)
    }
 
    props.onAddGoal(inputNameRef.current.value,);
    setEnteredValue('')
 
  };
 


  const closeModalHandler = () => {
    setModal(prevState => !prevState)
  }

  return (

    <React.Fragment>
      {modal.isShow && <Modal onClick={closeModalHandler} title={modal.title} message={modal.message}/>}
<form onSubmit={formSubmitHandler}>
      <div className={isEntered  ? classes['error'] : classes['form-control']  }>
        <label>Course Goal</label>
        <input ref={inputNameRef} value={enteredValue} type="text" onChange={goalInputChangeHandler} />
        {isEntered && <p style={{color: 'red'}}>Please type something</p>}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
    </React.Fragment>
 
  );
};

export default CourseInput;
/// formFef.current.reset()

