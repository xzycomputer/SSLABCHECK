import Navbar from "../../components/Navbar"

function Adminhome() {
    return (
        <div className="AdminHome">
            <Navbar></Navbar>
            <div class="flex">
            <h1 class ="text-bold text-2xl mt-4 ml-10">Now on shelf : สารเคมี Admin</h1>
            <button type="button" class="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add +</button>
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
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-10 py-4">
                                1
                            </td>
                            
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-10 py-4">
                                1
                            </td>
                           
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-10 py-4">
                                1
                            </td>
                        
                        </tr>
                    </tbody>
                 
                </table>
            </div>
            <div class ="flex mt-4">
            <h1 class ="text-bold text-2xl mt-4 ml-10">Now on shelf : อุปกรณ์ Admin</h1>
            <button type="button" class="ml-4 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add +</button>
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
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-10 py-4">
                                1
                            </td>
                            
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-10 py-4">
                                1
                            </td>
                           
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-10 py-4">
                                1
                            </td>
                        
                        </tr>
                    </tbody>
                 
                </table>
            </div>
        </div>
    )
}

export default Adminhome