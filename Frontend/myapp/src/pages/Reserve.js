import Navbar from "../components/Navbar"
import { DateTimePicker } from "@mui/x-date-pickers"
import { useState } from "react";

function Reserve() {

    const [start, setStart] = useState('');
    const [stop, setStop] = useState('');
    const user = localStorage.getItem('user');

    return (
        <div className="Reserve">
            <Navbar></Navbar>
            <div class="max-w-screen-xl mx-auto">

                <div class="flex justify-between ">
                    <div>
                        <div class="my-10"><DateTimePicker label="กำหนดวันเริ่มใช้" value={start} onChange={(newValue) => setStart(newValue)} /></div>
                        <div><DateTimePicker label="กำหนดวันคืน" value={stop} onChange={(newValue) => setStop(newValue)} /></div>
                    </div>

                    <div class="w-1/2 rounded-lg  border-2 mt-10 flex flex-col">
                        <h1 class="mx-auto text-3xl mt-2">ยืนยันการจอง</h1>
                        <h1 class="mx-4  mt-2">อุปกรณ์ : </h1>
                        <h1 class="mx-4  mt-2">วันที่เริ่มใช้งาน : {JSON.stringify(start)}</h1>
                        <h1 class="mx-4  mt-2">วันที่เริ่มคืน : {JSON.stringify(stop)}</h1>
                        <h1 class="mx-4  mt-2 mb-2">ผู้ทำการจอง : {user} </h1>
                        
                    </div>


                    <div class="flex flex-col">
                        
                        <form class="flex items-center mx-auto mt-10">
                        <label for="simple-search" class="sr-only">ค้นหารายชื่ออุปกรณ์</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                        </div>
                        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                        </form>
                        <h1 class="mt-2">ค้นหารายชื่ออุปกรณ์</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserve