import { IHeadingData, ISubHeadingData } from "../../Blog.interface";
import { SubheadingForm } from "./SubheadingForm";

interface HeadingFormProps {
    index: number,
    heading: IHeadingData,
    removeHeading: (index: number) => void,
    handleHeadingChange: (index: number, newData: IHeadingData) => void,
    addSubheading: (index: number) => void,
    removeSubHeading: (index: number, subHeadingIndex: number) => void,
    handleSubHeadingChange: (headingIndex: number, subHeadingIndex: number, newData: ISubHeadingData) => void
}

export const HeadingForm = ({ index, heading, removeHeading, handleHeadingChange, addSubheading, removeSubHeading, handleSubHeadingChange }: HeadingFormProps) => {

    const handleRemoveheading = () => {
        removeHeading(index)
    };

    return (
        <div className="heading-section" key={index}>
            <div>
                <div className="remove-heading">
                    <label htmlFor={`headingTitle${index}`}>Title:</label>
                    <button type="button" onClick={handleRemoveheading}>Remove Heading</button>
                </div>
                <input
                    type="text"
                    id={`headingTitle${index}`}
                    value={heading.title}
                    onChange={(e) => handleHeadingChange(index, { ...heading, title: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor={`headingContent${index}`}>Content:</label>
                <textarea
                    id={`headingContent${index}`}
                    value={heading.content}
                    onChange={(e) => handleHeadingChange(index, { ...heading, content: e.target.value })}
                />
            </div>
            <div>
                <div className="add-subheading">
                    <label className="subheading-label" htmlFor={`subheading${index}`}> Subheading </label>
                    <button type="button" onClick={() => addSubheading(index)}> Add Subheading </button>
                </div>
                {
                    heading.subHeading.map((subheadingData, subHeadingIndex) => <SubheadingForm key={subHeadingIndex} index={index} subHeadingIndex={subHeadingIndex} subheadingData={subheadingData} removeSubHeading={removeSubHeading} handleSubHeadingChange={handleSubHeadingChange} />)
                }
            </div>
        </div>
    )
}