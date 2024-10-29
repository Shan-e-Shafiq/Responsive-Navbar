import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function NavDropdown(props) {

    const { label, dropdownOptions } = props
    const [IsOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <button
            className="text-md font-medium select-none relative w-min"
            onClick={() => { setIsOpen(!IsOpen) }}
            onBlur={() => { setIsOpen(false) }}
        >
            <div className="flex items-center">
                {label}
                <i className={`fa-solid text-sm ml-1 ${IsOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>

            </div>

            {/* DROPDOWN OPTIONS */}
            {
                IsOpen ?
                    <div className="border bg-white w-[200px] absolute mt-1 z-20 shadow-lg rounded-lg p-2">
                        {
                            dropdownOptions.map((option, index) => {
                                return <div
                                    key={index}
                                    to={option.route}
                                    className={`font-medium w-full px-2 py-2 text-left rounded-lg hover:bg-slate-100 ${location.pathname == option.route ? "underline" : ''}`}
                                    onClick={() => { navigate(option.route) }}
                                >
                                    {option.name}
                                </div>
                            })
                        }
                    </div>
                    :
                    null
            }
        </button>
    )
}
