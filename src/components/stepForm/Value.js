import React from 'react'

export const Value = ({ formData, setFormData, navigation }) => {
    const handle = (item) => {
        setFormData({
                ...formData,
                value: item
            })
        navigation.next()
    }
    console.log("value", formData)
    return (
        <div className="frame">
            <div className="form-control">
                <div className="label" htmlFor="status">I value</div>
                <div className="btn-flex">
                    <button
                        className="btn-primary"
                        onClick={() => handle("justice")}
                    >
                        Justice
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => handle("mercy")}
                    >
                        Mercy
                    </button>
                </div>
            </div>
        </div>
    )
}