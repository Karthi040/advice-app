'use client'
import React, { useEffect } from 'react'
import "./advice.css"
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const page = () => {
    const [advice, setAdvice] = useState("To See Your Valueable advice Click the Button below");

    const [count, setCount] = useState(0);

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        // console.log(res)
        const data = await res.json();
        // console.log(data)

        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

    useEffect(function () {
        getAdvice();
    }, [])

    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">NextUI</p>
                        <p className="text-small text-default-500">nextui.org</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>{advice}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onClick={setAdvice}>
                        Button
                    </Button>
                </CardFooter>
            </Card>

            <p className="mt-9">You have Read<b> {count} </b> Pieces Of Advice</p>

        </>
    )
}

export default page
