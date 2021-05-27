import React from 'react'

export const Submit = ({ formData }) => {
    const { value, music, weekend, speaker, people } = formData;
    return (
        <div className="frame">
            <div>
                <h3>Thank you for submitting, we will be in touch!</h3>
                <ol>
                    <li>{value}</li>
                    <li>{music}</li>
                    <li>{weekend}</li>
                    <li>{speaker}</li>
                    <li>{people}</li>
                </ol>
            </div>
        </div>
    )
}
