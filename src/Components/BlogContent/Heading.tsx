import { IHeadingData } from "../../Blog.interface"
import { Subheading } from "./Subheading";
import "./Heading.css"

interface HeadingDataProps {
    heading: IHeadingData;
}

export const Heading = ({ heading }: HeadingDataProps) => {
    return (
        <div className="heading-container">
            <div className="heading-title">{heading.title}</div>
            <div className="heading-content">{heading.content}</div>
            {heading.subHeading?.map((subHeading, index) => <Subheading key={index} subHeading={subHeading} />)}
        </div>
    )
}