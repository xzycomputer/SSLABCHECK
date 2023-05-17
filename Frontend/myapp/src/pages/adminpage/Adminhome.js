import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../../components/Navbar"



function Adminhome() {

    const [chemi, setChemi] = useState([]);
    const [tool, setTool] = useState([]);

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const decreaseQuantity = (itemId) => {
        const updatedItems = chemi.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setChemi(updatedItems);
      };
    
      const increaseQuantity = (itemId) => {
        const updatedItems = chemi.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setChemi(updatedItems);
      };



    function handleSubmitChemi(e) {
        e.preventDefault();
        axios.post(`http://localhost:3001/addchemi`, { name, quantity })
            .then(res => {
                axios.get('http://localhost:3001/getchemi').then((response) => {
                    setChemi(response.data);
                });
                axios.get('http://localhost:3001/gettool').then((response) => {
                    setTool(response.data);
                });
            })

    }
    // เหลือแก้ update
    // function handleUpdateChemi(id) {
    //     axios.update(`http://localhost:3001/updatechemi`, { id, quantity })
    //         .then(res => {
    //             axios.get('http://localhost:3001/getchemi').then((response) => {
    //                 setChemi(response.data);
    //             });
    //             axios.get('http://localhost:3001/gettool').then((response) => {
    //                 setTool(response.data);
    //             });
    //         })

    // }

    function handleSubmitTool(e) {
        e.preventDefault();
        axios.post(`http://localhost:3001/addtool`, { name, quantity })
            .then(res => {
                axios.get('http://localhost:3001/getchemi').then((response) => {
                    setChemi(response.data);
                });
                axios.get('http://localhost:3001/gettool').then((response) => {
                    setTool(response.data);
                });
            })
    }


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



    const deleteClick = id => {
        axios.delete(`http://localhost:3001/deleteproductchemi/${id}`)
            .then(res => {
                axios.get('http://localhost:3001/getchemi').then((response) => {
                    setChemi(response.data);
                });
                axios.get('http://localhost:3001/gettool').then((response) => {
                    setTool(response.data);
                });
            })
    };

    const deleteClickTool = id => {
        axios.delete(`http://localhost:3001/deleteproducttool/${id}`)
            .then(res => {
                axios.get('http://localhost:3001/getchemi').then((response) => {
                    setChemi(response.data);
                });
                axios.get('http://localhost:3001/gettool').then((response) => {
                    setTool(response.data);
                });
            })
    };



    return (
        <div className="AdminHome">
            <Navbar></Navbar>
            <div class="flex">
                <h1 class="text-bold text-2xl mt-4 ml-10">Now on shelf : สารเคมี Admin</h1>

                {/* <!-- Modal toggle --> */}
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">
                    Add +
                </button>

                {/* <!-- Main modal --> */}
                <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-md max-h-full">
                        {/* <!-- Modal content --> */}
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">เพิ่มจำนวนสารเคมี</h3>
                                <form class="space-y-6" action="#" onSubmit={handleSubmitChemi}>
                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อสารเคมี</label>
                                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="สารเคมี X" required></input>
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
                                        <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="จำนวน" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                                    </div>

                                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ยืนยัน</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={handleClick} className="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">edit</button>
            </div>
            <div class="relative overflow-x-auto mt-4 mx-auto ">
                <table class="w-5/6  text-gray-500 dark:text-gray-400 mx-auto table-fixed">
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
                            <tr key={item.id} class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                                <td class="px-10 py-4 flex justify-center items-center">
                                    {isShown && (<button onClick={() => decreaseQuantity(item.id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"><i class="fas fa-minus"></i></button>)}
                                    {!isShown && (<span class="mx-2 text-white">{item.quantity}</span>)}
                                    {isShown && (<h1 class="mx-4">{item.quantity}</h1>)}
                                    {isShown && (<button onClick={() => increaseQuantity(item.id)} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"><i class="fas fa-plus"></i></button>)}
                                    {isShown && (<button onClick={() => deleteClick(item.id)} class="p-2 rounded-full bg-red-500 text-white ml-4"><i class="fas fa-trash"></i></button>)}
                                    {isShown && (<button onClick={handleClick} class="p-2 rounded-full bg-green-500 text-white ml-4"><i class="fas fa-trash"></i></button>)}
                                </td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            </div>
            <div class="flex mt-4">
                <h1 class="text-bold text-2xl mt-4 ml-10">Now on shelf : อุปกรณ์ Admin</h1>
                {/* <!-- Modal toggle --> */}
                <button data-modal-target="authentication-modal2" data-modal-toggle="authentication-modal2" className="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">
                    Add +
                </button>

                {/* <!-- Main modal --> */}
                <div id="authentication-modal2" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-md max-h-full">
                        {/* <!-- Modal content --> */}
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal2">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">เพิ่มจำนวนอุปกรณ์</h3>
                                <form class="space-y-6" action="#" onSubmit={handleSubmitTool}>
                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่ออุปกรณ์</label>
                                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="หลอดทดลอง" required></input>
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
                                        <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="จำนวน" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                                    </div>

                                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ยืนยัน</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={handleClicktool} className="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">edit</button>
            </div>
            <div class="relative overflow-x-auto mt-4 mx-auto mb-10">
                <table class="w-5/6  text-gray-500 dark:text-gray-400 mx-auto table-fixed">
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
                            <tr key={item.id} class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                                <td class="px-10 py-4 flex justify-center items-center">
                                    {isShowntool && (<button onClick={() => decreaseQuantity(item.id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"><i class="fas fa-minus"></i></button>)}
                                    <span class="mx-2 text-white">{item.quantity}</span>
                                    {isShowntool && (<button onClick={() => increaseQuantity(item.id)} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"><i class="fas fa-plus"></i></button>)}
                                    {isShowntool && (<button onClick={() => deleteClickTool(item.id)} class="p-2 rounded-full bg-red-500 text-white ml-4"><i class="fas fa-trash"></i></button>)}
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