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
        });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/gettool').then((response) => {
            setTool(response.data);
        });
    }, []);

    const [isShown, setIsShown] = useState(false);
    const [isShowntool, setIsShowntool] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    const handleClicktool = event => {
        setIsShowntool(current => !current);
    };

    const deleteClick = name => {
        axios.delete('http://localhost:3001/deleteproductchemi', {name})
        .then(res => {
            console.log(name)
        })
    };



    return (
        <div className="AdminHome">
            <Navbar></Navbar>
            <div class="flex">
                <h1 class="text-bold text-2xl mt-4 ml-10">Now on shelf : สารเคมี Admin</h1>
                <AddButton add="addchemi"></AddButton>
                <button onClick={handleClick} className="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">edit</button>
            </div>
            <div class="relative overflow-x-auto mt-4 mx-auto ">
                <table class="w-5/6  text-gray-500 dark:text-gray-400 mx-auto">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" class="py-3 ">
                                รายการ
                            </th>
                            <th scope="col" class="py-3 ">
                                ปริมาณ
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {chemi.map((item) => (
                            <tr key={item.name} class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                                <td class="px-10 py-4 flex justify-center items-center">
                                    {isShown && (<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"><i class="fas fa-minus"></i></button>)}
                                    {!isShown && (<span class="mx-2 text-white">{item.quantity}</span>)}
                                    {isShown && (<h1>quantity</h1>)}
                                    {isShown && (<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"><i class="fas fa-plus"></i></button>)}
                                    {isShown && (<button onClick={() => deleteClick(item.name)} class="p-2 rounded-full bg-red-500 text-white ml-4"><i class="fas fa-trash"></i></button>)}
                                    {isShown && (<button class="p-2 rounded-full bg-green-500 text-white ml-4"><i class="fas fa-trash"></i></button>)}
                                </td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            </div>
            <div class="flex mt-4">
                <h1 class="text-bold text-2xl mt-4 ml-10">Now on shelf : อุปกรณ์ Admin</h1>
                <AddButton add="addtool"></AddButton>
                <button onClick={handleClicktool} className="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">edit</button>
            </div>
            <div class="relative overflow-x-auto mt-4 mx-auto mb-10">
                <table class="w-5/6  text-gray-500 dark:text-gray-400 mx-auto">
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
                                <td class="px-10 py-4 flex justify-center items-center">
                                    {isShowntool && (<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"><i class="fas fa-minus"></i></button>)}
                                    <span class="mx-2 text-white">{item.quantity}</span>
                                    {isShowntool && (<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"><i class="fas fa-plus"></i></button>)}
                                    {isShowntool && (<button class="p-2 rounded-full bg-red-500 text-white ml-4"><i class="fas fa-trash"></i></button>)}
                                    {isShowntool && (<button class="p-2 rounded-full bg-green-500 text-white ml-4"><i class="fas fa-trash"></i></button>)}
                                </td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Adminhome