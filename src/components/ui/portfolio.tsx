"use client"
import React, { useEffect, useState } from "react";
import { Button } from "./moving-border";
const workData = [
    {
        id: 1,
        item: "All",
    },
    {
        id: 2,
        item: "tailwind css",
    },
    {
        id: 3,
        item: "javascript",
    },
    {
        id: 4,
        item: "typescript",
    },
    {
        id: 5,
        item: "Next js",
    },
    {
        id: 6,
        item: "dflsjfldsjf"
    }
];
const Portfolio = () => {
    const [items, setitems] = useState('')
    const [workdata, setworkdata] = useState([]);
    useEffect(() => {
        fetch("/api/workdata.json")
            .then((res) => {
                return res.json();
            })
            .then((res) => setworkdata(res));
    }, []);
    const hadleClick = (item: any) => {
        setitems(item)
    }
    const portfoliodata = workdata.filter((item: any, index: number) => item.des.includes(items) || item.title.includes(items) || item.technology.includes(items))

    return (
        <div className="">

            <div className="relative">
                <div className="flex flex-wrap space-y-3 space-x-6 items-center justify-center">
                    {workData.map((item: any, index: number) => {
                        return <div key={index}>
                            <button className={`font-semibold rounded-lg cursor-pointer px-6 py-3 text-white items-center ${item.item == items || (item.item == "All" && items == '') ? "bg-red-700" : "bg-blue-900"}`} onClick={() => hadleClick(item.item == 'All' ? "" : item.item)}>{item.item}</button>
                        </div>
                    })}
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 space-y-8 md:space-x-8 mt-10">
                {
                    portfoliodata.map((item: any, index: number) => {
                        return <div key={item} className="m-8 hover:-translate-y-1.5 duration-150 transition-all">

                            <div className="max-w-[600px] max-h-[350px] overflow-scroll">
                                <img src={item.img} className="" alt="sujon biswas" />
                            </div>
                            <div className="border-2 border-primary mt-1">

                            </div>
                            <div className="mt-4 px-4 py-1">
                                <h3 className="text-[17px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-primary hover:text-primary cursor-pointer">{item.title}</h3>
                                <p className="text-secoundary font-semibold text-[14px] md:text-base lg:text-[18px]">{item.des}</p>
                            </div>

                            {/* technology sections */}
                            <div className="space-y-2 px-3 py-1">
                                <span className="font-bold">Technology : </span>
                                {item.technology.map((item: any, index: number) => (
                                    <button
                                        className="bg-[rgb(38,37,41)]  md:ml-3 rounded-xl cursor-pointer font-semibold hover:bg-[#222222] transition-all duration-200 px-4 py-2"
                                        key={index}
                                    >
                                        {item}
                                    </button>

                                ))}
                            </div>

                            {/* library section */}
                            <div className="px-4 py-1.5">
                                <span className="font-bold">Library : </span>{" "}
                                {item.library.map((item: any, index: number) => (
                                    <button
                                        className="bg-[rgb(41,42,49)] px-4  py-2 ml-3 rounded-xl cursor-pointer font-semibold hover:bg-[#222222] transition-all duration-200"
                                        key={index}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

                             {/* button components */}
                            <div className="flex gap-1 md:gap-8 -mt-5 px-1 md:px-6 justify-between items-center mt-3">
                                <a href={item.url} className="cursor-pointer">
                                    <Button
                                    borderRadius="1.75rem"
                                    className="bg-blue-900 dark:bg-slate-900 dark:text-white border-blue-950 dark:border-slate-800 text-white font-semibold cursor-pointer"
                                >
                                    Github
                                </Button>
                                </a>
                               <a href={item.link} className="cursor-pointer">
                                 <Button
                                    borderRadius="1.75rem"
                                    className="bg-blue-900 dark:bg-slate-900 dark:text-white border-blue-950 dark:border-slate-800 text-white font-semibold cursor-pointer"
                                >
                                    Live Demo
                                </Button>
                               </a>
                            </div>
                        </div>
                    })
                }

              

            </div>
        </div>
    );
};


export default Portfolio