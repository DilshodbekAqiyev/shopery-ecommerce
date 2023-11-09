import { useState } from 'react'

import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Button } from '../../../components/ui/button'
import { Textarea } from '../../../components/ui/textarea'
import { instance } from '../../../utils/apiRequest'

function AddProduct() {
  const [product, setProduct] = useState({
    id: new Date(),
    name: '',
    category: '',
    discountPrice: 0,
    originalPrice: 0,
    discountPercentage: 0,
    status: '',
    statusColor: '1A1A1A',
    rating: 1,
    available: 1,
    littleDescription:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.',
    description:
      'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit. Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.',
    images: {
      src: '/assets/images/products/potato.png',
      imageDescription: 'Big potato images',
      otherImages: [
        {
          id: 1,
          src: '/assets/images/products/potato.png',
          otherImageDescription: 'Picture of a large potato from the left',
        },
      ],
    },
    additionalInformation: [
      {
        title: 'Weight:',
        description: '02',
      },
    ],
    brand: '/assets/images/products/brands/farmary.svg',
    tag: ['Vegetables'],
    reviews: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'originalPrice' || name === 'discountPrice') {
      const originalPrice = parseFloat(product.originalPrice || 0)
      const discountPrice = parseFloat(product.discountPrice || 0)

      const discountPercentage = 100 - (discountPrice * 100) / originalPrice

      setProduct({
        ...product,
        [name]: value,
        discountPrice: discountPercentage.toFixed(2),
      })
      console.log(product)
    } else {
      setProduct({
        ...product,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('product', product)
      const response = await instance.post('products', product)
      console.log('response ', response)
      if (response.status === 201) {
        console.log('Product added successfully!')
      } else {
        console.error('Failed to add product')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form className="border mt-10 rounded-[8px] w-full" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h2 className="text-2xl text-grays-gray900 py-4 px-6">Add Product</h2>
        <hr />
        <div className="w-[515px] p-5">
          {/*  Product Name */}
          <div>
            <Label htmlFor="productName" className="py-2 inline-block text-textMedium mt-0">
              Product Name
            </Label>
            <Input
              type="text"
              name="name"
              value={product.name}
              placeholder="Enter product name ..."
              id="productName"
              onChange={handleChange}
            />
          </div>
          {/* Category */}
          <div>
            <Label htmlFor="productCategory" className="py-2 inline-block text-textMedium mt-5">
              Category
            </Label>
            <Input
              type="text"
              name="category"
              value={product.category}
              placeholder="Enter product category ..."
              id="productCategory"
              onChange={handleChange}
            />
          </div>
          {/* Discount Price */}
          <div>
            <Label htmlFor="discountPrice" className="py-2 inline-block text-textMedium mt-5">
              Discount Price
            </Label>
            <Input
              type="number"
              name="discountPrice"
              value={product.discountPrice}
              placeholder="Enter discount price ..."
              id="discountPrice"
              onChange={handleChange}
            />
          </div>
          {/*  Original Price */}
          <div>
            <Label htmlFor="originalPrice" className="py-2 inline-block text-textMedium mt-5">
              Original Price
            </Label>
            <Input
              type="number"
              name="originalPrice"
              value={product.originalPrice}
              placeholder="Enter original price ..."
              id="originalPrice"
              onChange={handleChange}
            />
          </div>
          {/* Description */}
          <div>
            <Label htmlFor="littleDescription" className="py-2 inline-block text-textMedium mt-5">
              Description
            </Label>
            <Textarea
              placeholder="Type this product description here."
              id="littleDescription"
              name="littleDescription"
              className="resize-none"
            />
          </div>
          <Button onClick={(e) => handleSubmit(e)} type="submit" className="rounded-xl mt-3">
            Add Product
          </Button>
        </div>
      </div>
    </form>
  )
}

export default AddProduct
