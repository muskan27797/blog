import React from "react";
import "./BlogContent.css";
import { IBlogDataInfo } from "../../Blog.interface";
import { Heading } from "./Heading";

interface BlogContentProps {
    data: IBlogDataInfo
}

export const BlogContent = ({ data }: BlogContentProps) => {
    return (
        <div className="display-blogs">
            <h1 className="title">{data.title}</h1>
            <div className="date-name"><span className="date">{data.date}</span> by <span className="name">{data.name}</span></div>
            <div className="short-description">{data.short_description}</div>
            <hr />
            <div className="overview">{data.overview}</div>
            {data.heading?.map((heading, index) => <Heading key={index} heading={heading} />)}
        </div>
    )
}