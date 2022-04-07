import Carousel from '../../src/components/Carousel'
import Layout from '../../src/components/Layout'

const SLIDE_COUNT = 3
const slides = Array.from(Array(SLIDE_COUNT).keys())

const DetailedGraphicsCard = ({ id }: { id: number }) => {
  return (
    <Layout>
      <div>DetailedGraphicsCard {id}</div>
      <Carousel slides={slides} />
    </Layout>
  )
}
export const getServerSideProps = (context: { params: { id: number } }) => {
  // console.log(context)
  return {
    props: {
      id: context.params.id,
    },
  }
}
export default DetailedGraphicsCard
