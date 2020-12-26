import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {
  const {data:images , loading} = useFetchGifs(category);
  return (
    <div className="card-grid">
    <h2 className="animate__animated animate__fadeIn">{category}</h2>
        {loading && <p>Loading...</p>}

        {(category !== '' && images[0] === 'Not Found') &&  <p>Not Found</p>}
        {images[0] === 'Not Found' && delete images[0]} 

        {
          images.map((image) => (
            <GifGridItem
              key={image.id}
              {...image}
          />))
        }
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
