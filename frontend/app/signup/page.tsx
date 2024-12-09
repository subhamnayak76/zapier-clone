"use client"
import { AppBar } from "@/components/Appbar";
import { CheckFeature } from "@/components/CheckFeature";

export default function() {
    return <div>
        <AppBar />
        <div className="flex">
         <div className="flex-1">
            <div className="font-bold text-lg" >
            Join millions worldwide who automate their work using Zapier.
            </div>
            <CheckFeature label={"Easy setup, no coding required"} />
            <CheckFeature label = {"Free forever for core features"} />
            <CheckFeature label = {"14-day trial of premium features & apps"} />
            
        </div>
        <div className='flex-1'>
            <input type="text" placeholder="Your Name"></input>
            <input type="text" placeholder="Your Email"></input>
            <input type="password" placeholder="password"></input>

        </div>
        </div>
    </div>
}