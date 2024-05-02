import { ISubHeadingData } from "../../Blog.interface";
import "./Subheading.css"

interface SubHeadingDataProps {
    subHeading: ISubHeadingData;
}
export const Subheading = ({ subHeading }: SubHeadingDataProps) => {
    return (
        <div className="subheading-container">
            <div className="subheading-title">{subHeading.title}</div>
            <div className="subheading-content">{subHeading.content}</div>
        </div>
    )
}