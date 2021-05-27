import React from 'react'

export const Speaker = ({ formData, setFormData, navigation }) => {
    const handle = (item) => {
        setFormData({
                ...formData,
                speaker: item
            })
        navigation.next()
    }
    console.log("speaker", formData)
    return (
        <div className="frame">
            <div className="form-control">
                <label className="label" htmlFor="status">I prefer speakers that communicate</label>
                <div>
                    <button
                        className="btn-primary"
                        onClick={() => handle("literally")}
                    >
                        Literally
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => handle("figuratively")}
                    >
                        Figuratively
                    </button>
                </div>
            </div>
        </div>
    )
}

