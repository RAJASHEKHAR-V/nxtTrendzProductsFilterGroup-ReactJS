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
    onChangeOfInput,
    onClearButton,
  } = props

  const onClear = () => {
    onClearButton()
  }

  const callCategoryItem = eachCategory => {
    const {categoryId, name} = eachCategory
    const addActiveClass = categoryId === category ? 'active' : ''
    const onCategory = () => {
      onCategoryButton(categoryId)
    }

    return (
      <li className="category-item" key={categoryId}>
        <p className={`category-button ${addActiveClass}`} onClick={onCategory}>
          {name}
        </p>
      </li>
    )
  }

  const callRating = eachRating => {
    const {ratingId, imageUrl} = eachRating
    const onRating = () => {
      onRatingButton(ratingId)
    }

    return (
      <li className="rating-item" key={ratingId}>
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
        placeholder="Search"
        type="search"
        className="input-el"
        value={titleSearch}
        onKeyDown={onKeydownInput}
        onChange={onChangeOfInput}
      />
      <h1 className="category-heading">Category</h1>
      <ul className="category-card">
        {categoryOptions.map(eachCategory => callCategoryItem(eachCategory))}
      </ul>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-card">
        {ratingsList.map(eachRating => callRating(eachRating))}
      </ul>
      <div>
        <button className="clear-button" type="submit" onClick={onClear}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
