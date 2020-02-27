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
    multiply => parseFloat(multiply.qty) * parseFloat(multiply.price)
  )

  const userProductsFromCategory = categories.map(category =>
    userProducts.filter(userProduct => userProduct.category === category)
  )

  const totalValueFromCategory = userProductsFromCategory.map(
    userProductFromCategory =>
      userProductFromCategory
        .map(multiply => parseFloat(multiply.qty) * parseFloat(multiply.price))
        .reduce((acc, product) => product + acc, 0)
        .toFixed(2)
  )

  const totalProductsFromCategory = userProductsFromCategory.map(
    userProductFromCategory =>
      userProductFromCategory
        .map(product => Number(product.qty))
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

  //console.log('user inside function', userProductsData)

  return userProductsData
}

export const filterAllUserProducts = async (
  products,
  userUid,
  userCity,
  userGenre,
  userEarnClass
) => {
  const allCategories = [
    'Food',
    'House',
    'Vehicle',
    'Health',
    'Beauty',
    'Personal'
  ]

  const allProducts = products.filter(
    product =>
      product.userUid !== userUid &&
      product.userCity === userCity &&
      product.userGenre === userGenre &&
      product.userEarnClass === userEarnClass
  )

  const allTotalValueFromAllCategories = allProducts.map(
    multiply => parseFloat(multiply.qty) * parseFloat(multiply.price)
  )

  const allProductsFromCategory = allCategories.map(category =>
    allProducts.filter(allProduct => allProduct.category === category)
  )

  const allTotalValueFromCategory = allProductsFromCategory.map(
    allProductFromCategory =>
      allProductFromCategory
        .map(multiply => parseFloat(multiply.qty) * parseFloat(multiply.price))
        .reduce((acc, product) => product + acc, 0)
        .toFixed(2)
  )

  const allTotalProductsFromCategory = allProductsFromCategory.map(
    allProductFromCategory =>
      allProductFromCategory
        .map(product => Number(product.qty))
        .reduce((acc, product) => product + acc, 0)
  )

  const allTotalMediaFromCategory = () => {
    const result = allTotalValueFromCategory.map((total, i) => {
      return (parseFloat(total) / allTotalProductsFromCategory[i]).toFixed(2)
    })
    return result
  }

  const allProductsData = {
    products: {
      allProductsFromCategory,
      allTotalValueFromCategory,
      allTotalProductsFromCategory,
      allTotalMediaFromCategory: allTotalMediaFromCategory()
    },
    allCategories,
    allTotalProducts: allTotalProductsFromCategory.reduce(
      (acc, product) => product + acc,
      0
    ),
    allTotalValueFromAllProducts: allTotalValueFromAllCategories
      .reduce((acc, product) => product + acc, 0)
      .toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
  }

  //console.log('all inside function', allProductsData)

  return allProductsData
}
