import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    titleSearch,
    category,
    onCategoryButton,
    onRatingButton,
    onKeydownInput,
  } = props

  const callCategoryItem = eachCategory => {
    const {categoryId, name} = eachCategory
    const addActiveClass = categoryId === category ? 'active' : ''
    const onCategory = () => {
      onCategoryButton(categoryId)
    }

    return (
      <li className="category-item">
        <button
          className={`category-button ${addActiveClass}`}
          type="submit"
          onClick={onCategory}
        >
          {name}
        </button>
      </li>
    )
  }

  const callRating = eachRating => {
    const {ratingId, imageUrl} = eachRating
    const onRating = () => {
      onRatingButton(ratingId)
    }

    return (
      <li className="rating-item">
        <button className="rating-button" type="submit" onClick={onRating}>
          <img
            src={imageUrl}
            className="rating-image"
            alt={`rating ${ratingId}`}
          />{' '}
          & up
        </button>
      </li>
    )
  }

  return (
    <div className="filters-group-container">
      <input
        type="text"
        className="input-el"
        value={titleSearch}
        onKeyDown={onKeydownInput}
      />
      <h1>Category</h1>
      <ul className="category-card">
        {categoryOptions.map(eachCategory => callCategoryItem(eachCategory))}
      </ul>
      <h1>Rating</h1>
      <ul className="rating-card">
        {ratingsList.map(eachRating => callRating(eachRating))}
      </ul>
    </div>
  )
}

export default FiltersGroup
