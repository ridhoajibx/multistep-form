import React from 'react'

export const Music = ({ formData, setFormData, navigation }) => {
    const handle = (item) => {
        setFormData({
                ...formData,
                music: item
            })
        navigation.next()
    }
    console.log("music", formData)
    return (
        <div className="frame">
            <div className="form-control">
                <label className="label" htmlFor="status">I appreciate a wide variety of music.</label>
                <div>
                    <button
                        className="btn-primary"
                        onClick={() => handle("rarely")}
                    >
                        Rarely
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => handle("occasionally")}
                    >
                        Occasionally
                    </button>
                    <button 
                        className="btn-primary"
                        onClick={() => handle("sometimes")}
                    >
                        Sometimes
                    </button>
                    <button 
                        className="btn-primary"
                        onClick={() => handle("usually")}
                    >
                        usually
                    </button>
                    <button 
                        className="btn-primary"
                        onClick={() => handle("almost always")}
                    >
                        Almost always
                    </button>
                </div>
            </div>
        </div>
    )
}