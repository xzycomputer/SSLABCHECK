import Navbar from "../../components/Navbar"

function Home() {
    return (
        <div className="Home">
            <Navbar></Navbar>
            <h1 class ="text-bold text-2xl mt-4 ml-10">Now on shelf : สารเคมี</h1>
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
            <h1 class ="text-bold text-2xl mt-4 ml-10">Now on shelf : อุปกรณ์</h1>
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

export default Home