import React from 'react'

const CheckBox = () => {
    const subjects = ["english", "hindi", "marathi"]
    return (
        <div className='checkboxDiv'>
            <p>Your best subject*</p>
            <div className='d-flex justify-content-center checkBtnPoint'>



                {subjects.map((subject) => (
                    <div className="mx-3" key={subject}>
                        <input
                            type="checkbox"

                        />
                        <label>{subject}</label>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default CheckBox;