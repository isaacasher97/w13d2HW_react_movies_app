const Movies = ({name, year, rating, alt, src, width, height}) => {
  return (
  <>
      <h2>{name}</h2>
      <img 
          alt={alt}
          src={src}
          width={width}
          height={height}        
      />
      <h4>{year}</h4>
      <p>{rating}</p>
  </>
  )
}

export default Movies;