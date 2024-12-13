"use client"
import { AppBar } from "@/components/Appbar";
import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";
export default function() {
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return <div>
        <AppBar />
        <div className="flex justify-center">
        <div className="flex pt-8 max-w-4xl ">
         <div className="flex-1 pt-20 px-4">
            <div className="font-semibold text-3xl px-4 pb-4" >
            Join millions worldwide who automate their work using Zapier.
            </div>
            <div className="pb-4 pt-4">
            <CheckFeature label={"Easy setup, no coding required"} />
            </div>
            <div className="pb-4">
            <CheckFeature label = {"Free forever for core features"} />
            </div>
            <CheckFeature label = {"14-day trial of premium features & apps"} />
            
        </div>
        <div className='flex-1 pt-6 pb-4 px-4 border rounded '>
            <Input label={"Email"} onChange={e =>{
                setEmail(e.target.value)
            }} type="text" placeholder="Your email"/>
            <Input label={"Password"} onChange={e =>{setPassword(e.target.value)}} type="text" placeholder="Your password" />
            <div className="pt-4">
            <PrimaryButton onClick={async() =>{
                const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
                    username : email,
                    password
                })
                localStorage.setItem("token",res.data.token)
                router.push('/dashboard')
            }}size="big">Login</PrimaryButton>
            </div>
        </div>
        </div>
        </div>
    </div>
}


