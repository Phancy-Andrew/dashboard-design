import "./App.css";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { RiHome5Line } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { CiMoneyBill } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import {
//   chart as chartJS,
//   BarElement,
//   CartegoryScale,
//   LinearScale,
//   ToolTip,
//   Legend,
// } from "chartJS";
// import { Bar } from "react-chartjs-2";

function App() {
  return (
    <div className=" h-screen overflow-hidden p-5">
      <div className="border border-1 rounded-[20px] h-full overflow-hidden flex bg-[#0D0D0D] text-white">
        <div className="h-full  border-[#272727] border-e w-[20%] ">
          <div className="h-[70%] flex flex-col p-2 ">
            <div className="text-3xl text-center my-4">Andrew</div>
            <div className="h-[10%] w-full rounded-full flex items-center justify-start my-1 bg-[#272727]">
              <div className="flex justify-between w-[32%] m-4">
                <div className="text-2xl">
                  <RiHome5Line />
                </div>

                <h1 className="">Home</h1>
              </div>
            </div>
            <div className="h-[10%] w-full flex items-center justify-start my-1">
              <div className="flex justify-between w-[32%] m-4">
                <div className="text-2xl">
                  <GoGraph />
                </div>

                <h1>Statistics</h1>
              </div>
            </div>
            <div className="h-[10%] w-full flex items-center justify-start my-1">
              <div className="flex justify-between w-[32%] m-4">
                <div className="text-2xl">
                  <CiMoneyBill />
                </div>

                <h1>Transactions</h1>
              </div>
            </div>
            <div className="h-[10%] w-full flex items-center justify-start my-1">
              <div className="flex justify-between w-[32%] m-4">
                <div className="text-2xl">
                  <BiMessageDetail />
                </div>

                <h1>Messages</h1>
              </div>
            </div>
            <div className="h-[10%] w-full flex items-center justify-start my-1">
              <div className="flex justify-between w-[32%] m-4">
                <div className="text-2xl">
                  <BsBoxSeam />
                </div>

                <h1>Products</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-[80%]  ">
          <div className="h-[7%] w-full flex justify-between m-2">
            <div className=" flex p-3 items-center h-full w-[40%]">
              <input
                type="text"
                placeholder="search"
                className=" rounded-xl h-9 bg-[#272727] p-2 "
              />
            </div>
            <div className=" h-full w-[60%] flex justify-end items-center me-1">
              <div className="flex justify-between w-[20%] me-2">
                <div>
                  <CiSettings className="text-2xl" />
                </div>
                <div>
                  <IoMdNotificationsOutline className="text-2xl" />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-400"></div>
                {/* <div>
                  <IoIosArrowDown className="text-2xl" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="h-[93%] flex p-4">
            <div className="h-full w-[70%]">
              <div className="h-[30%] flex  ">
                <div className="w-[50%] h-full bg-gradient-to-r from-[#C4E7F3] to-[#90B7AC]  rounded-lg mx-1 p-4 text-black flex flex-col justify-between">
                  <div className="flex  justify-between">
                    <div>Total balance</div>
                    <div>
                      <SlOptions />
                    </div>
                  </div>
                  <div className="text-2xl my-3">
                    <div className="font-bold">
                      $48,651
                      <span className="text-sm text-[#747474]">.00</span>
                    </div>
                    <div className="text-sm">in October</div>
                  </div>
                </div>
                <div className="w-[50%] h-full bg-[#272727] rounded-lg mx-1 p-4 flex flex-col justify-between">
                  <div className="flex w-full justify-between">
                    <div>Sales</div>
                    <div className="text-[#747474]">
                      <SlOptions />
                    </div>
                  </div>
                  <div className="text-2xl my-3">
                    <div className="font-bold">
                      $23,124
                      <span className="text-sm text-[#747474]">.00</span>
                    </div>
                    <div className="text-sm">in October</div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-10 m-2 flex justify-between">
                <div className="text-2xl my-3">Sales Statistics</div>
                <div className="h-7 w-20 rounded-2xl border border-[#272727] text-[#272727] bg-[#0B0B0B] overflow-hidden flex justify-between m-2 p-1">
                  <div className="text-sm text-white">7 days</div>
                  <div className="">
                    <select className="   bg-[#0B0B0B]">
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div>
                  <span className="text-2xl">1432</span>
                  <span className="m-2 text-sm text-[#747474]"> for today</span>
                </div>
                <div className="h-32 w-full"></div>
              </div>
              <div className="p-2 w-full">
                <div className="flex justify-between items-center my-2">
                  <div className="text-2xl">Last Orders</div>
                  <div className="text-sm text-[#747474]">see all</div>
                </div>

                <div className="  w-full h-10">
                  <div className="flex w-full justify-between h-10">
                    <div className="flex h-10 w-44  items-center  ">
                      <div className="rounded-full h-6 w-6 bg-slate-400 flex "></div>
                      <span className="whitespace-no-wrap">Andrew Wilson</span>
                    </div>
                    <div className="flex h-10 w-auto justify-start items-center  ">
                      <span className="whitespace-no-wrap">$200.17</span>
                    </div>
                    <div className="flex h-10 w-auto justify-start items-center  ">
                      <span className="text-[#80CE81]">
                        <FaCheckCircle />
                      </span>
                      <span className="whitespace-no-wrap">Completed</span>
                    </div>
                    <div className="flex h-10 w-auto  justify-start items-center  ">
                      <span className="whitespace-no-wrap">Today</span>
                    </div>
                    <div className="flex h-10 w-auto  justify-start items-center  ">
                      <span className="">
                        <SlOptions />
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full justify-between h-10">
                    <div className="flex h-10 w-44  items-center  ">
                      <div className="rounded-full h-6 w-6 bg-slate-400 flex "></div>
                      <span className="whitespace-no-wrap">Andrew Wilson</span>
                    </div>
                    <div className="flex h-10 w-auto justify-start items-center  ">
                      <span className="whitespace-no-wrap">$200.17</span>
                    </div>
                    <div className="flex h-10 w-auto justify-start items-center  ">
                      <span className="text-[#80CE81]">
                        <FaCheckCircle />
                      </span>
                      <span className="whitespace-no-wrap">Completed</span>
                    </div>
                    <div className="flex h-10 w-auto  justify-start items-center  ">
                      <span className="whitespace-no-wrap">Today</span>
                    </div>
                    <div className="flex h-10 w-auto  justify-start items-center  ">
                      <span className="">
                        <SlOptions />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-[30%] m-1 flex flex-col">
              <div className="h-[45%] w-full">
                <div className="flex justify-between items-center my-2">
                  <div className="text-xl">Monthly Profit</div>
                  <div className="text-sm text-[#747474]">see more</div>
                </div>
                <div className="flex justify-center m-2">
                  <div className="flex justify-between bg-[#272727] rounded-3xl w-36 p-2">
                    <div className=" text-[10px]">Offline Sales</div>
                    <div className="text-[10px]">16%</div>
                  </div>
                </div>
              </div>
              <div className="h-[55%] w-full p-4">
                <div className="flex justify-between items-center my-2">
                  <div className="text-2xl">Recent Sales</div>
                  <div className="text-sm text-[#747474]">see all</div>
                </div>
                <div className="flex w-full justify-between h-10">
                  <div className="flex h-10 w-44  items-center  ">
                    <div className="rounded-full h-6 w-6 bg-slate-400 flex "></div>
                    <span className="text-sm">Andrew Wilson</span>
                  </div>
                  <div className="flex h-10 w-auto justify-start items-center  ">
                    <span className="whitespace-no-wrap">+$200.17</span>
                  </div>
                </div>
                <div className="flex w-full justify-between h-10">
                  <div className="flex h-10 w-44  items-center  ">
                    <div className="rounded-full h-6 w-6 bg-slate-400 flex "></div>
                    <span className="text-sm">Sammy Nyame</span>
                  </div>
                  <div className="flex h-10 w-auto justify-start items-center  ">
                    <span className="whitespace-no-wrap">+$640.37</span>
                  </div>
                </div>
                <div className="flex w-full justify-between h-10">
                  <div className="flex h-10 w-44  items-center  ">
                    <div className="rounded-full h-6 w-6 bg-slate-400 flex "></div>
                    <span className="text-sm">Isaac Blankson</span>
                  </div>
                  <div className="flex h-10 w-auto justify-start items-center  ">
                    <span className="whitespace-no-wrap">+$640.37</span>
                  </div>
                </div>
                <div className="flex w-full justify-between h-10">
                  <div className="flex h-10 w-44  items-center  ">
                    <div className="rounded-full h-6 w-6 bg-slate-400 flex "></div>
                    <span className="text-sm">Russel Darko</span>
                  </div>
                  <div className="flex h-10 w-auto justify-start items-center  ">
                    <span className="whitespace-no-wrap">+$640.37</span>
                  </div>
                </div>
                <div className="flex w-full justify-between h-10">
                  <div className="flex h-10 w-44  items-center  ">
                    <div className="rounded-full h-6 w-6 bg-slate-400 flex "></div>
                    <span className="text-sm">Wilson Aballey</span>
                  </div>
                  <div className="flex h-10 w-auto justify-start items-center  ">
                    <span className="whitespace-no-wrap">+$640.37</span>
                  </div>
                </div>
                <div className="flex w-full justify-between h-10">
                  <div className="flex h-10 w-44  items-center  ">
                    <div className="rounded-full h-6 w-6 bg-slate-400 flex "></div>
                    <span className="text-sm">Degraft Backson</span>
                  </div>
                  <div className="flex h-10 w-auto justify-start items-center  ">
                    <span className="whitespace-no-wrap">+$640.37</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
