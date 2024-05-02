import { IBlogDataInfo } from "./Blog.interface";

export const MOCK_DATA1 = {
    "title": "Mock Data - React 19: A Closer Look at the Latest Changes",
    "date": "January 1, 2024",
    "name": "Mark Spencer",
    "short_description": "A comprehensive tutorial on the new features of React 19, including detailed explanations of its capabilities and demonstrations showcasing its functionality.",
    "overview": "Welcome to React 19, where innovation and simplicity come together! React 19 is on its way, bringing fresh improvements to front-end development. As developers, we’re used to manually optimizing performance by memoizing components to prevent unnecessary re-renders. But with React 19, things are changing. This will be the major change in React 19, and there are many other improvements too. In this blog post, you’ll explore the latest enhancements in React 19, giving you the power to create great web applications.",
    "heading": [
      {
        "title": "React Optimising Compiler",
        "content": "Previously, we (developers) relied on useMemo, useCallback, and memo APIs for performance optimization. However, React’s new automatic reactivity compiler, known as React-Forgot changes the game. This smart compiler dynamically manages re-renders, determining when and how to update both the state and UI. As a result, the need for manual optimization using useMemo, useCallback, and memo APIs is eliminated, simplifying development while enhancing performance. ",
        "subHeading": [
          {
            "title": "use() Hook",
            "content": "The use hook is a powerful tool in React that allows us to load resources asynchronously, particularly fetching data. It tracks the loading state using suspense and handles errors with error boundaries. However, it’s essential to note that the use hook doesn't offer a comprehensive solution for handling asynchronous state. Notably, it lacks support for query promise cancellation. Additionally, developers must handle loading and error states at the parent level rather than within the same component, and explicit access to the loading and error variables isn't provided."
          }
        ]
      },
      {
        "title": "Server and Client Directives ",
        "content": "React now includes built-in support for server and client directives. Components can now be rendered on the server, leading to improved performance, faster page load times, and simplified data fetching with server components.",
        "subHeading": [
          {
            "title": "use server",
            "content": "‘use server’ makes the server-side functions that can be called from client-side code."
          },
          {
            "title": "use client",
            "content": "‘use client’ lets you mark what code runs on the client."
          }
        ]
      }
    ]
  }

  export const MOCK_DATA2 = {
    "title": "Mock Data - 4 useState Mistakes You Should Avoid in React 🚫",
    "date": "July 1, 2022",
    "name": "Jacob",
    "short_description": "One common hook, useState, is fundamental but often misused. Understanding and avoiding these common mistakes is crucial for both beginners and experienced developers aiming to create efficient and bug-free applications.",
    "overview": "React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, useState, is fundamental but often misused. Understanding and avoiding these common mistakes is crucial for both beginners and experienced developers aiming to create efficient and bug-free applications. This blog will dive into four critical mistakes to avoid when using useState in React. Let's enhance our React skills together!. Before diving in, explore more in-depth articles on web development at my personal website:",
    "heading": []
  }
  export const MockBlogContentData: IBlogDataInfo[] = [ MOCK_DATA1, MOCK_DATA2 ];