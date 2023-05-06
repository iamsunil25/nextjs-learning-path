import React,{Suspense, useEffect, useState} from 'react'
import  GetStaticPropsComp  from '../../components/getStaticProps';

const Index = ({employesData}) => {

const [dataa, setData] = useState([])
	// useEffect(async() => {
	// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	// 	const data = await res.json();
	// setData(data)
	//   return () => {} 
	// }, [])
	
  return (
	<>
	<Suspense  fallback={<div>"...loading"</div>}>
	<div>Employes Data</div>
	<GetStaticPropsComp employesData={employesData}/>
	</Suspense>
	</>
  )
}


export const getServerSideProps = async ()=>{
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	// console.log("🚀 ~ file: getStaticProps.js:18 ~ getStaticProps ~ data: api", data)
	
	return{
		props:{
			employesData:data
		}
	}
	
	}

// export const getStaticProps = async ()=>{
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await res.json();
// 	// console.log("🚀 ~ file: getStaticProps.js:18 ~ getStaticProps ~ data: api", data)
	
// 	return{
// 		props:{
// 			employesData:data
// 		}
// 	}
	
// 	}

export default Index