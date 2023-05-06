import React,{Suspense} from 'react'
import  GetStaticPropsComp  from '../../components/getStaticProps';

const Index = ({employesData}) => {
  return (
	<>
	<Suspense  fallback={<div>"...loading"</div>}>
	<div>Employes Data</div>
	<GetStaticPropsComp employesData={employesData}/>
	</Suspense>
	</>
  )
}



export const getStaticProps = async ()=>{
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	// console.log("🚀 ~ file: getStaticProps.js:18 ~ getStaticProps ~ data: api", data)
	
	return{
		props:{
			employesData:data
		}
	}
	
	}

export default Index