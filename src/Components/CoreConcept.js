function CoreConcept({title,image,description})// here we pass the propos value which is called array destructuring.
 {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )

}
export default CoreConcept