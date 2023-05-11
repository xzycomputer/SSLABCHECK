import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from "../../components/Navbar"
import AddButton from "../../components/AddButton"


function Adminhome() {

    const [chemi, setChemi] = useState([]);
    const [tool, setTool] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getchemi').then((response) => {
            setChemi(response.data);
            console.log(response.status)
        });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/gettool').then((response) => {
            setTool(response.data);
            console.log(response.status)
        });
    }, []);



    return (
        <div className="AdminHome">
            <Navbar></Navbar>
            <div class="flex">
                <h1 class="text-bold text-2xl mt-4 ml-10">Now on shelf : สารเคมี Admin</h1>
                <AddButton add="addchemi"></AddButton>
            </div>
            <div class="relative overflow-x-auto mt-4 mx-auto ">
                <table class="w-5/6 text-sm text-left text-gray-500 dark:text-gray-400 mx-auto">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 ">
                                รายการ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ปริมาณ
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {chemi.map((item) => (
                            <tr key={item.name} class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                                <td class="px-10 py-4">{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            </div>
            <div class="flex mt-4">
                <h1 class="text-bold text-2xl mt-4 ml-10">Now on shelf : อุปกรณ์ Admin</h1>
                <AddButton add="addtool"></AddButton>
            </div>
            <div class="relative overflow-x-auto mt-4 mx-auto ">
                <table class="w-5/6 text-sm text-left text-gray-500 dark:text-gray-400 mx-auto">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 ">
                                รายการ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ปริมาณ
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {tool.map((item) => (
                            <tr key={item.name} class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                                <td class="px-10 py-4">{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Adminhome