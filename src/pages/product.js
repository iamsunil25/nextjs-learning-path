import { useRouter } from "next/router";

export default function Index(){
	const router = useRouter()

	return <>

	 <button
      type="button"
      onClick={() => {
		router.push({
			pathname: '/Home',
			query: { name:"sunilll"},
		
		},	"/Home")
      }}
    >
		{}
    Clieck Home
    </button></>
} 