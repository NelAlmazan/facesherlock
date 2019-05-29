import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 shadow-3 bb white'>
                {'{ FaceSherlock } will look for faces in your pictures. Give it a shot.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white b bg-dark-green'
                        onClick={onButtonSubmit}
                        >Observe</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;