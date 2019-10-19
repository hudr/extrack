export const filterUserProducts = async (products, userUid) => {
  const categories = [
    'Food',
    'House',
    'Vehicle',
    'Health',
    'Beauty',
    'Personal'
  ]

  const userProducts = products.filter(product => product.userUid === userUid)

  const totalValueFromAllCategories = userProducts.map(
    multiply => parseFloat(multiply.pQuantity) * parseFloat(multiply.pPrice)
  )

  const userProductsFromCategory = categories.map(category =>
    userProducts.filter(userProduct => userProduct.pCategory === category)
  )

  const totalValueFromCategory = userProductsFromCategory.map(
    userProductFromCategory =>
      userProductFromCategory
        .map(
          multiply =>
            parseFloat(multiply.pQuantity) * parseFloat(multiply.pPrice)
        )
        .reduce((acc, product) => product + acc, 0)
        .toFixed(2)
  )

  const totalProductsFromCategory = userProductsFromCategory.map(
    userProductFromCategory =>
      userProductFromCategory
        .map(product => Number(product.pQuantity))
        .reduce((acc, product) => product + acc, 0)
  )

  const totalMediaFromCategory = () => {
    const result = totalValueFromCategory.map((total, i) => {
      return (parseFloat(total) / totalProductsFromCategory[i]).toFixed(2)
    })
    return result
  }

  const userProductsData = {
    products: {
      userProductsFromCategory,
      totalValueFromCategory,
      totalProductsFromCategory,
      totalMediaFromCategory: totalMediaFromCategory()
    },
    categories,
    totalProducts: totalProductsFromCategory.reduce(
      (acc, product) => product + acc,
      0
    ),
    totalValueFromAllProducts: totalValueFromAllCategories
      .reduce((acc, product) => product + acc, 0)
      .toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
  }

  console.log('inside function', userProductsData)

  return userProductsData
}
