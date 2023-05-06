import dynamic from 'next/dynamic'
const AboutUs1Dynamic = dynamic(() => import('../../../components/dynamic_index'), {
  ssr: false,
})

export default AboutUs1Dynamic


