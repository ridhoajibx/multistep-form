import React from 'react'

export const Weekend = ({ formData, setFormData, navigation }) => {
    const handle = (item) => {
        setFormData({
                ...formData,
                weekend: item
            })
        navigation.next()
    }
    console.log("weekend", formData)
    return (
        <div className="frame">
            <div className="form-control">
                <label className="label" htmlFor="status">A quiet weekend at home is</label>
                <div>
                    <button
                        className="btn-primary"
                        onClick={() => handle("boring")}
                    >
                        Boring
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => handle("rejuvenating")}
                    >
                        Rejuvenating
                    </button>
                </div>
            </div>
        </div>
    )
}