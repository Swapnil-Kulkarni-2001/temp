import React from 'react'
import { NavLink } from 'react-router-dom'

const CourseCard = () => {
    return (
        <div className="flex flex-col md:w-96 rounded-xl shadow-xl">
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className="p-5">
                <h1 className="text-md font-medium">Free course</h1>
                <h1 className="mt-1 text-xl font-semibold">Course Title</h1>
                <h1 className="mt-3 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae veniam tenetur blanditiis commodi illum distinctio ut magnam cum assumenda perspiciatis
                    ipsa natus maiores neque adipisci delectus, sit sunt. Reprehenderit, dicta.</h1>
                <div className="mt-5">
                    <NavLink to="/courses/course" className="px-3 py-2 bg-red-400 rounded-3xl font-semibold text-white">Start watching</NavLink>
                </div>
            </div>
        </div>
    )
}

export default CourseCard