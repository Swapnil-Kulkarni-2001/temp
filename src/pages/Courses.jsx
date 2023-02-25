import React from 'react'
import CourseCard from '../components/CourseCard'

const Courses = () => {
    return (
        <div className="flex flex-col p-5 md:p-20">
            <div className="flex flex-col md:flex-row mt-10 md:items-center">
                <div className="flex flex-col ">
                    <h1 className="text-3xl md:text-5xl font-bold">Heading</h1>
                    <h1 className="md:w-[28rem] mt-5  text-md md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, est consectetur.
                        Fugiat mollitia tempora delectus odit, non earum sequi esse totam optio ipsum vero
                        placeat quam voluptas ullam labore dolor!
                    </h1>
                    <div className="flex flex-row justify-evenly mt-5 md:justify-start">
                        <button className="bg-[#0067e1] text-white font-medium px-5 py-3 rounded-md">button 1</button>
                        <button className="bg-[#191919] text-white font-medium px-5 py-3 rounded-md md:mx-10">button 2</button>
                    </div>
                </div>
                <div className="mb-10 md:mb-0 md:ml-auto order-first md:order-last">
                    <img className="md:h-[28rem] md:w-[45rem]" src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                </div>
            </div>

            <div className="mt-20">
                <h1 className="text-3xl font-bold text-center">Recommended Courses</h1>
                <div className="mt-10 md:mt-12">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-5 md:grid-cols-3">
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses