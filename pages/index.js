import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  // ...

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`05/01/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-cover bg-center h-screen z-10 flex justify-center items-center">
      <div className="z-30 max-w-[500px]">
        <Image src={"/img/logo.png"} alt="logo" height={300} width={300} />
        <p className="text-yellow-400 text-center">
          (Website Under construction)
        </p>
        <div className="text-white font-bold text-4xl text-center">
          Coming Soon!!!
        </div>
        <div className="text-white">
          <div
            className="border-2 border-white
          p-5 mt-4 font-bold text-center"
          >
            {timerComponents.length ? timerComponents : null}
          </div>
        </div>
      </div>
    </div>
  );
}
