/*
  #####   ######    #####   ######
 ##   ##  # ## #   ##   ##   ##  ##
 #          ##     ##   ##   ##  ##
  #####     ##     ##   ##   #####
      ##    ##     ##   ##   ##
 ##   ##    ##     ##   ##   ##
  #####    ####     #####   ####
*/
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";


export default function Page() {
    // tsを書く欄
    let [time, settime] = useState(30);          //タイマー
    let [timeS, settimeS] = useState<number>(0); //秒
    let [timeM, settimeM] = useState<number>(0); //分
    let [timeH, settimeH] = useState<number>(0); //時


    //最初のみ実行
    useEffect(() => {
        let localKey : number = Number(getlocalKey('time'));
        settime(localKey);
        settimeS(localKey % 60);
        settimeM(Math.floor(localKey / 60) % 60);
        settimeH(Math.floor(localKey / (60*60)) % 24);
    }, []);

    //0:4:20->00:04:20  桁数をあわせる
    function padTime(value: number): string {
        return value.toString().padStart(2, '0');
    }


    function getlocalKey(key: string): string {
        try {
            const storageValue = localStorage.getItem(key);
            if (storageValue) {
                console.log('Key acquisition successful');
                return storageValue;
            } else {
                console.warn('Failed to get key, setting to 0');
                localStorage.setItem(key, "0");
                return "0";
            }
        } catch (err) {
            console.error(err);
            localStorage.setItem(key, "0");
            return "0";
        }
    }




    //リンクジャンプ
    const router = useRouter();
    function resumebtn(link: string) {
        router.push(link);
    }

    return (
        <div>
            <h1 className="text-6xl ...">top/countup/stop</h1>
            <h1>タイマーストップ！</h1>
            <h1>TIME:{`${padTime(timeH)}:${padTime(timeM)}:${padTime(timeS)}`}</h1>
            <button onClick={() =>{resumebtn('../countup')}} className="defaultbtn"><span className="relative">RESUME</span></button>
        </div>
    );
}