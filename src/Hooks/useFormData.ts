import { FormEvent, useRef, useState } from "react";
import { IBlogDataInfo, IHeadingData, ISubHeadingData } from "../Blog.interface";
import { getDate, setFormData } from "../Blog.helper";
import { useNavigate } from "react-router-dom";

export const useFormData = () => {

    const titleRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const shortDescriptionRef = useRef<HTMLTextAreaElement>(null);
    const overviewRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();

    // State to manage heading data
    const [headingData, setHeadingData] = useState<IHeadingData[]>([
        { title: '', content: '', subHeading: [{ title: '', content: '' }] }
    ]);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const formattedDate = getDate();

        const formData: IBlogDataInfo = {
            title: titleRef.current?.value || '',
            date: formattedDate.toString(),
            name: nameRef.current?.value || '',
            short_description: shortDescriptionRef.current?.value || '',
            overview: overviewRef.current?.value || '',
            heading: headingData
        };

        setFormData(formData);
        navigate("/blogs");
    }

    // Function to handle changes in heading data
    const handleHeadingChange = (index: number, newData: IHeadingData) => {
        const updatedHeadingData = [...headingData];
        updatedHeadingData[index] = newData;
        setHeadingData(updatedHeadingData);
    };

    const handleSubHeadingChange = (headingIndex: number, subHeadingIndex: number, newData: ISubHeadingData) => {
        const updatedHeadingData = [...headingData];
        updatedHeadingData[headingIndex].subHeading[subHeadingIndex] = newData;
        setHeadingData(updatedHeadingData);
    };

    // Function to add a new heading
    const addHeading = () => {
        setHeadingData([...headingData, { title: '', content: '', subHeading: [{ title: '', content: '' }] }]);
    };

    const addSubheading = (index: number) => {
        const updateHeadingData = [...headingData];
        updateHeadingData[index].subHeading.push({ title: "", content: "" });
        setHeadingData(updateHeadingData);
    }

    // Function to remove a heading
    const removeHeading = (index: number) => {
        const updatedHeadingData = [...headingData];
        updatedHeadingData.splice(index, 1);
        setHeadingData(updatedHeadingData);
    };

    // Function to remove a heading
    const removeSubHeading = (index: number, subHeadingIndex: number) => {
        const updatedHeadingData = [...headingData];
        updatedHeadingData[index].subHeading.splice(subHeadingIndex, 1);
        setHeadingData(updatedHeadingData);
    };

    return {
        titleRef,
        nameRef,
        shortDescriptionRef,
        overviewRef,
        headingData,
        handleSubmit,
        handleHeadingChange,
        handleSubHeadingChange,
        addHeading,
        addSubheading,
        removeHeading,
        removeSubHeading
    }
}