import {  useRouter } from "next/router"

export default function Home(){
	const router = useRouter();
	console.log("params",router);
	return (<>
	{JSON.stringify("ss")}
	</>)  } 