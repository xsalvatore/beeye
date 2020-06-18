import React from 'react';

const AddButton = () => {
  return (
    <div className='add-button'>
      <button>
        <i className='fa fa-folder-open'></i>
        <span>Ajouter</span>
        <i className='fa fa-chevron-down'></i>
      </button>
    </div>
  );
};

export default AddButton;
