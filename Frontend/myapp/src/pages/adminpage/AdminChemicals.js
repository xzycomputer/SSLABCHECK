import Navbar from "../../components/Navbar"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AdminChemicals() {

    const [chemi, setChemi] = useState([]);


    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const [isShown, setIsShown] = useState(false);

    const [filteredChemi,setfilteredChemi] = useState(chemi)
    

    const Filter = (event) => {
        setfilteredChemi(chemi.filter(f => f.name.includes(event.target.value)));
      }

    const decreaseQuantityChemi = (itemId) => {
        const updatedItems = filteredChemi.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setfilteredChemi(updatedItems);
    };
    
    const increaseQuantityChemi = (itemId) => {
        const updatedItems = filteredChemi.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setfilteredChemi(updatedItems);
    };
    
    
    
    useEffect(() => {
        axios.get('http://localhost:3001/getchemi').then((response) => {
            setChemi(response.data);
            setfilteredChemi(response.data)
        });
    }, []);
    
    function handleSubmitChemi(e) {
        e.preventDefault();
        axios.post(`http://localhost:3001/addchemi`, { name, quantity })
            .then(res => {
                axios.get('http://localhost:3001/getchemi').then((response) => {
                    setfilteredChemi(response.data);
                });
                
            })
    
    }
    
    function handleUpdateChemi(id, quantity) {
        setIsShown(current => !current);
        axios.put(`http://localhost:3001/updatechemi`, { id, quantity })
            .then(res => {
                axios.get('http://localhost:3001/getchemi').then((response) => {
                    setfilteredChemi(response.data);
                });
               
    
    
            })
    }

    const handleClick = event => {
        setIsShown(current => !current);
    };

    const deleteClick = id => {
        axios.delete(`http://localhost:3001/deleteproductchemi/${id}`)
            .then(res => {
                axios.get('http://localhost:3001/getchemi').then((response) => {
                    setfilteredChemi(response.data);
                });
              
            })
    };

    


    return (
        <div className="Chemicals">
            <Navbar></Navbar>
            <div className="flex">
                <h1 className="text-bold text-2xl mt-4 mx-auto ">เบิกสารเคมี Admin </h1>
            </div>
        
        <div className = "w-5/6  mx-auto flex justify-between"> 
        <div>
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">
                Add +
            </button>

            {/* <!-- Main modal --> */}
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">เพิ่มจำนวนสารเคมี</h3>
                            <form className="space-y-6" action="#" onSubmit={handleSubmitChemi}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อสารเคมี</label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="สารเคมี X" required></input>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
                                    <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="จำนวน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                                </div>

                                <button type="submit button" data-modal-hide="authentication-modal" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >ยืนยัน</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={handleClick} className="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">edit</button>
            </div>


            <form className="flex items-center  w-4/6 mt-4 " >
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input onChange={Filter} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                </div>
                <button type="button" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
         </div>

            <div className="relative overflow-x-auto mt-4 mx-auto ">
                <table className="w-5/6 text-sm  text-gray-500 dark:text-gray-400 mx-auto table-fixed">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 ">
                                รายการ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ปริมาณ
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {filteredChemi.map((item) => (
                            <tr key={item.id} className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                                <td className="px-10 py-4 flex justify-center items-center">
                                    {isShown && (<button onClick={() => decreaseQuantityChemi(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"><i className="fas fa-minus"></i></button>)}
                                    {!isShown && (<span className="mx-2 text-white">{item.quantity}</span>)}
                                    {isShown && (<h1 className="mx-4">{item.quantity}</h1>)}
                                    {isShown && (<button onClick={() => increaseQuantityChemi(item.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"><i className="fas fa-plus"></i></button>)}
                                    {isShown && (<button onClick={() => deleteClick(item.id)} className="p-2 rounded-full bg-red-500 text-white ml-4"><i className="fas fa-trash"></i></button>)}
                                    {isShown && (<button onClick={() => handleUpdateChemi(item.id,item.quantity)} className="p-2 rounded-full bg-green-500 text-white ml-4"><i className="fas fa-trash"></i></button>)}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default AdminChemicals