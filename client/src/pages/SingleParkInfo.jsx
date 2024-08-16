import { useParams } from 'react-router-dom';

const SingleParkInfo = () => {

    const params = useParams();

  return (
    <div className="">All National Parks in {params.state}</div>
  )
}

export default SingleParkInfo