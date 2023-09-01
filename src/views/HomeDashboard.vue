<script>


    export default {
        name: 'HomeDashboard',
        
    }

</script>

<template>
    <div class="flex h-screen w-screen">
    <!-- sidebar -->
        <div class="h-full w-[250px] border overflow-y-auto">
            <!-- header sidebar -->
            <div class="text-dark justify-between flex shadow-md p-5 sticky top-0 bg-white">
                <div class="flex gap-2">
                    <p>..</p> <!--logo-->
                    <h1 class="font-bold text-xl">CUBA</h1>
                </div>
                <div>
                    <p>..</p> <!--burger-->
                </div>
            </div>

            <!-- Menu sidebar components layout -->
            <div class="border-t-2 mt-3">
                <h1 class="p-3 mt-3 font-bold text-slate-600">GENERAL</h1>                
                <!-- <ul class="flex flex-col">
                    <li class="p-3  font-bold text-white"><a href="">Profile</a></li>
                    <li class="p-3  font-bold text-white"><a href="">Profile</a></li>
                    <li class="p-3 bg-blue-500 font-bold text-white"><a href="">Profile</a></li>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Profile</a></li>
                </ul> -->
            
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">    
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <a href="">Dashboard</a>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <h1>Widget</h1>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <h1>Page Layout</h1>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>  
            </div>

            <div class="border-t-2 mt-3">
                <h1 class="p-3 mt-3 font-bold text-slate-600">APPLICATION</h1>                
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">    
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <a href="">Project</a>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <h1>Kamban Board</h1>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <h1>File Manager</h1>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>  
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <h1>Ecommmerce</h1>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <h1>Email</h1>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>
            </div>

            <div class="border-t-2 mt-3">
                <h1 class="p-3 mt-3 font-bold text-slate-600">FORMS & TABLES</h1>                
                <!-- <ul class="flex flex-col">
                    <li class="p-3  font-bold text-white"><a href="">Profile</a></li>
                    <li class="p-3  font-bold text-white"><a href="">Profile</a></li>
                    <li class="p-3 bg-blue-500 font-bold text-white"><a href="">Profile</a></li>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Profile</a></li>
                </ul> -->
            
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">    
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <a href="">Forms</a>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>
                <div class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white">
                    <div class="flex gap-4">
                        <p>...</p> <!--logo-->
                        <h1>Tables</h1>
                    </div>
                    <div>
                        <p>...</p> <!--logo-->
                    </div>
                </div>
            </div>

            


            

        </div>

    <!-- main -->
        <div class="h-full w-full bg-slate-100 overflow-y-auto">
            <!-- header -->
            <div class="flex justify-between bg-white p-4 shadow-2xl">
                <div class="flex gap-5 items-center">
                    <p>..</p>
                    <h1 class="font-semibold">Something you love is now on sale!!! 💥</h1>
                </div>

                <!-- navbar -->
                <div class="flex gap-5">
                    <ul class="flex items-center gap-5">
                        <li><a href="">💨</a></li>
                        <li><a href="">💗</a></li>
                        <li><a href="">💦</a></li>
                    </ul>

                    <!-- menu -->
                    <div class="text-sm flex items-center gap-5 relative">
                        <p>🎃</p> <!-- foto user -->
                        <div class="group">
                            <p class="font-bold">Emay Walter</p>
                            <p>Admin <span>📌</span></p>
                            
                            <div class="hidden group-hover:block absolute z-10 right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                                <!-- Options inside the box -->
                                <ul class="py-2">
                                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account</li>
                                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Inbox</li>
                                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Taskbar</li>
                                    <!-- Add more options as needed -->
                                </ul>
                            </div>
                        </div>
                            
                    </div>
                </div>

                

            </div>

            <!-- second header -->
            <div class="flex justify-between bg-white p-4 bg-opacity-80">
                <div class="text-xl font-semibold text-slate-700 ms-5">
                    <h1>Email Application</h1>
                </div>

                <!-- history category -->
                <div class="flex gap-4 text-sm">
                    <a href="">🎪</a>
                    <p>/ Email</p>
                    <p class="text-blue-600">/ Email Application</p>
                </div>
            </div>

            <!-- column -->
            <div class="container mx-auto px-8 mt-5">
                <div class="grid grid-cols-4 gap-4">
                    <div class="p-4 rounded-lg bg-white block">
                        <div class="items-center justify-center flex flex-col">
                            <p>Photo</p>
                            <h2 class="font-bold text-base ">MARKENCO</h2>
                            <p class="font-thin text-sm">markenco@gmail.com</p>
                        </div>

                        <div class="mt-5">
                            <div class="border flex items-center ps-5 gap-5 bg-blue-500 text-white rounded p-3 font-semibold">
                                <p>📧</p>
                                <h3>NEW MAIL</h3>
                            </div>

                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-center ps-5 gap-5 rounded p-3 font-semibold hover:bg-slate-300 cursor-pointer mt-2">
                                <div class="flex gap-5">
                                    <p>📧</p>
                                    <h3>NEW MAIL</h3>
                                </div>
                                <div>
                                    <p>20</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class=" p-4 rounded bg-white col-span-3">
                        <div>    
                            <h1>John doe</h1>
                            <p>The developer</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>



    <!-- <div class="w-screen border">

        <div class="bg-yellow-600 w-full p-5 rounded mt-3 flex">
            <h1 class="text-xl font-bold text-white">Welcome back user</h1>
        </div>

        <div class="grid grid-cols-3 gap-5">           
            <div class="bg-white w-full p-5 rounded mt-3">
                <h1 class="text-xl font-bold text-black">Welcome back user</h1>                    
            </div>  
            <div class="bg-white w-full p-5 rounded mt-3 col-span-2">
                <h1 class="text-xl font-bold text-black">Welcome back user</h1>                    
            </div>  
        </div>

    </div> -->
        
</template>