import React, { useEffect, useState } from "react";
import { MockBlogContentData } from "../../mock.data";
import "./BlogWrapper.css"
import { BlogContent } from "./BlogContent";
import { IBlogDataInfo } from "../../Blog.interface";
import { getFormData } from "../../Blog.helper";

export const BlogWrapper = () => {

    const [data, setData] = useState<IBlogDataInfo[]>(MockBlogContentData);

    useEffect(() => {
        // Note: setTimeout is used for now to replicate production scenarios, later we can do a fetch call to get the data from the API.
        setTimeout(() => {
            const formData = getFormData();
            if (formData) {
                setData([...formData, ...data]);
            } else {
                setData([...data]);
            }
        }, 200);
    }, [])

    return (
        <div className="dBlog-container">
            {data.map((blogData, index) => <BlogContent key={index} data={blogData} />)}
        </div>
    )
}