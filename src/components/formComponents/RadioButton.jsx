import React from 'react'

const RadioButton = () => {
    return (

        <div className='radioBtnDiv'>
            <p className=''>Gender*</p>
            <div className='d-flex justify-content-center radioBtnPoint'>
                <div className='mx-3'>
                    <input type="radio" name='male' />
                    <label htmlFor='male'>Male</label>
                </div>
                <div className='mx-3'>
                    <input type="radio" name='female'/>
                    <label htmlFor='female'>Female</label>
                </div>

                <div className='mx-3'>
                    <input type="radio" name='other' />
                    <label htmlFor='other'>Other</label>
                </div>
            </div>
        </div>

    )
}

export default RadioButton
