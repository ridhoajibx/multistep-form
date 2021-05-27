import React from 'react'

export const People = ({ formData, setFormData, navigation }) => {
    const handle = (item) => {
        setFormData({
                ...formData,
                people: item
            })
        navigation.next()
    }
    console.log("people", formData)
    return (
        <div className="frame">
            <div className="form-control">
                <label className="label" htmlFor="status">With people, I am more often</label>
                <div>
                    <button 
                        className="btn-primary"
                        onClick={() => handle("brief and to the point")}
                    >
                        Brief and to the point
                    </button>
                    <button 
                        className="btn-primary"
                        onClick={() => handle("friendly and warm")}
                    >
                        Friendly and warm
                    </button>
                </div>
            </div>
        </div>
    )
}

