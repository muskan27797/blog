import { IBlogDataInfo } from "./Blog.interface";

let BLOG_KEY: string = "blog"

export const setFormData = (data: IBlogDataInfo) => {
  const localData = localStorage.getItem(BLOG_KEY);
  if (localData) {
    const parsedLocalData = JSON.parse(localData) as IBlogDataInfo[];
    const finalData = [data, ...parsedLocalData];
    localStorage.setItem(BLOG_KEY, JSON.stringify(finalData));
  } else {
    localStorage.setItem(BLOG_KEY, JSON.stringify([data]));
  }
}

export const getFormData = () => {
  const data = localStorage.getItem(BLOG_KEY);
  const parsedData = data ? (JSON.parse(data)) as IBlogDataInfo[] : undefined;
  return parsedData;
}

export const getDate = () => {
  const dateFormat = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  return dateFormat.toLocaleDateString('en-US', options);
}