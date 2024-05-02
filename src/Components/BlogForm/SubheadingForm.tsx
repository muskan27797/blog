import { ISubHeadingData } from "../../Blog.interface";

interface SubHeadingFormProps {
    index: number,
    subHeadingIndex: number,
    subheadingData: ISubHeadingData,
    removeSubHeading: (index: number, subHeadingIndex: number) => void,
    handleSubHeadingChange: (headingIndex: number, subHeadingIndex: number, newData: ISubHeadingData) => void
}

export const SubheadingForm = ({ index, subHeadingIndex, subheadingData, removeSubHeading, handleSubHeadingChange }: SubHeadingFormProps) => {
    return (
        <div key={subHeadingIndex} className="subHeading-section">
            <div>
                <div className="remove-heading" >
                    <label htmlFor={`subheadingTitle${subHeadingIndex}`}>Title:</label>
                    <button type="button" onClick={() => removeSubHeading(index, subHeadingIndex)}>Remove SubHeading</button>
                </div>
                <input
                    type="text"
                    id={`subheadingTitle${subHeadingIndex}`}
                    value={subheadingData.title}
                    onChange={(e) => handleSubHeadingChange(index, subHeadingIndex, { ...subheadingData, title: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor={`subheadingContent${index}`}>Content:</label>
                <textarea
                    id={`subheadingContent${index}`}
                    value={subheadingData.content}
                    onChange={(e) => handleSubHeadingChange(index, subHeadingIndex, { ...subheadingData, content: e.target.value })}
                />
            </div>
        </div>
    )
}