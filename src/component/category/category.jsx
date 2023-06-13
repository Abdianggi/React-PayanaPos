import React from "react";
import $ from "jquery";

const Category = (props) => {
    const handleLayla = () =>{
        $('.layla').on('click', function() {
            console.log('layla')
        })
    }

    handleLayla()

    return (
        <div className="mx-5 mt-3">
            <div
                className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <div className="layla cursor-pointer">
                    <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
                    src={'https://localhost/Payana/public/'+props.data.image}
                    alt="" />
                </div>
                <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {props.data.name}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {props.data.desc}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                    Last updated 3 mins ago
                </p>
                <button className="bg-red-800 mt-3 hover:bg-red-900 font-bold text-neutral-200 py-2 px-4 shadow-lg rounded-md" onClick={() => props.remove(props.data.id)}>Remove</button>
                </div>

            </div>
        </div>
    )
}

export default Category;