

const GetStaticPropsComp = ({employesData}) => {

	// console.log("🚀 ~ file: getStaticProps.js:14 ~ GetStaticPropsComp ~ GetStaticPropsComp:", employesData)
  return (
	<ol style={{marginLeft:"90px"}}>
		{
			 employesData.map(item=>{
			return	<li key={item?.id}>{item.title}</li>
			})
		}
	</ol>
  )
}


export default GetStaticPropsComp