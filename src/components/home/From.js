import React from 'react'
import useInput from '../../customhook/useInput'
const From = () => {
    const [title,bindTitle,resetTitle] = useInput()
    const [content,bindContent,resetContent] = useInput()
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({title,content})
        resetTitle()
        resetContent()
    }

    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>

                    <div className="input-field">
                        <input id="note_title" type="text" className="validate" {...bindTitle}></input>
                        <label htmlfor="note_title">Note title</label>
                    </div>
                    <div>
                        <textarea id="note_content" className="materialize-textarea"{...bindContent}></textarea>
                        <label htmlfor="note_content">Note content</label>
                    </div>
                    <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default From
