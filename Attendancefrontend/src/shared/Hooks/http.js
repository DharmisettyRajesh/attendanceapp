import React from 'react';
import {useState,useCallback,useRef,useEffect} from 'react';

const Http=()=>{
    const[isloading,setisloading]=useState(false);
    const[error,seterror]=useState();
    const [loadedstudents,setloadedstudents]=useState();
    const httprequests=useRef([])
    const request=useCallback(
        async(url,method='GET',body=null,headers={})=>{
            setisloading(true);
            const abortctrl=new AbortController();
            httprequests.current.push(abortctrl);
            try{
                setisloading(true);
            const response=await fetch(url,
                {   method,
                    body,
                    headers,
                    signal:abortctrl.signal
                })
            const responsedata=await response.json();
            if(!response.ok){
                throw new Error(responsedata.message);
            }
            setloadedstudents(responsedata.students);

            setisloading(false);
            return loadedstudents;
            }
            catch(err){
                    seterror(err);
                    setisloading(false);
                    throw err;
            }
            

        }
       ,[] );
       const trigger =()=>{
           seterror(null);
       }
       useEffect(()=>{
           return ()=>{
               httprequests.current.forEach(abortctrl=>abortctrl.abort())
           }
       },[])
       return {isloading,error,request,trigger}
} 
export default Http;