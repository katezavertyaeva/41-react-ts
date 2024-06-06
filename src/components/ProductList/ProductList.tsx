import {
  ProductListComponent,
  ProductElement,
  ProductsId,
  ProductsName,
} from './styles'
import { ProductListTypes } from './types'
import { products } from './data'
import Button from 'components/Button/Button'

function ProductList() {
  //   const productElement = products[0]
  //   console.log(productElement)

  const productElements = products.map((product) => {
    return (
      <ProductElement key = {product.id}>
        <ProductsId>{product.id}</ProductsId>
        <ProductsName>{product.name}</ProductsName>
        <Button name="add" />
      </ProductElement>
    )
  })

  const BtnClick = () => {}

  return <ProductListComponent>{productElements}</ProductListComponent>
}

export default ProductList
