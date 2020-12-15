import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');
  const handlerInputValue = (event) => setInputValue(event.target.value);
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (inputValue === undefined) {
      return;
    } else if (inputValue.trim().length > 1) {
      setCategories((categories) => {
        if (categories.includes(inputValue) === false) {
          return [inputValue, ...categories];
        } else {
          return [...categories];
        }
      });
      setInputValue('');
    }
  }
  


  return (
    <form onSubmit={handlerSubmit}>
      <input
        onChange={handlerInputValue}
        type="text"
        value={inputValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
export default AddCategory
