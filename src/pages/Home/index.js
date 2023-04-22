import { useRouter } from "next/router";

export default function Home(){
	const router = useRouter();
	console.log("params checking",router);
	return "home"
} 