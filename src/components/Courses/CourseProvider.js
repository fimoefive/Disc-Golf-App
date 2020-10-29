import React, { useState, createContext } from "react";

export const CourseContext = createContext();

export const CourseProvider = (props) => {

    const [courses, setCourses] = useState([]);


    const getCourses = () => {
        return fetch("http://localhost:8088/courses")
            .then(response => response.json())
            .then(setCourses)
    }

    return (
        <CourseContext.Provider value={{
            courses, getCourses
        }}>
            {props.children}
        </CourseContext.Provider>
    )
};