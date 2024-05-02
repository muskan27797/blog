import React from "react";
import "./BlogForm.css"
import { useFormData } from "../../Hooks/useFormData";
import { HeadingForm } from "./HeadingForm";

export const BlogForm = () => {
    const {
        titleRef,
        nameRef,
        shortDescriptionRef,
        overviewRef,
        headingData,
        handleSubmit,
        addHeading,
        removeHeading,
        handleHeadingChange,
        addSubheading,
        removeSubHeading,
        handleSubHeadingChange
    } = useFormData()

    return (
        <div className="blogForm-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title <span className="required">*</span></label>
                        <input required type="text" id="title" ref={titleRef} />
                    </div>
                    <div>
                        <label htmlFor="name">Name <span className="required">*</span></label>
                        <input required type="text" id="name" ref={nameRef} />
                    </div>
                    <div>
                        <label htmlFor="shortDescription">Short Description:</label>
                        <textarea ref={shortDescriptionRef} cols={30} rows={5} id="shortDescription" ></textarea>
                    </div>
                    <div>
                        <label htmlFor="overview">Overview <span className="required">*</span></label>
                        <textarea required ref={overviewRef} cols={30} rows={5} id="overview" ></textarea>
                    </div>
                    <div>
                        <div className="add-heading">
                            <label className="heading-label">Heading</label>
                            <button type="button" onClick={addHeading}> Add heading </button>
                        </div>
                        {headingData.map((heading, index) => <HeadingForm key={index} index={index} heading={heading} removeHeading={removeHeading} handleHeadingChange={handleHeadingChange} addSubheading={addSubheading} removeSubHeading={removeSubHeading} handleSubHeadingChange={handleSubHeadingChange} />)}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}