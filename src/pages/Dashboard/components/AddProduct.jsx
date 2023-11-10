import { useState } from 'react'
import axios from 'axios'

import { instance } from '../../../utils/apiRequest'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Button } from '../../../components/ui/button'
import { Textarea } from '../../../components/ui/textarea'

import { CLOUDINARY_UPLOAD_NAME } from '../../../utils/constants'

const initialProductState = {
  id: new Date().getTime(),
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
  description: '',
  images: {
    src: '',
    imageDescription: 'Image',
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
}

function AddProduct() {
  const [imageSelected, setImageSelected] = useState('')
  const [product, setProduct] = useState(initialProductState)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'originalPrice' || name === 'discountPrice') {
      const parsedValue = parseFloat(value)

      if (!isNaN(parsedValue) && parsedValue >= 0) {
        const originalPrice = parseFloat(product.originalPrice) || 0
        const discountPrice = parseFloat(product.discountPrice) || 0

        const discountPercentage = originalPrice !== 0 ? 100 - (discountPrice * 100) / originalPrice : 0

        setProduct({
          ...product,
          [name]: parsedValue,
          discountPrice: discountPercentage.toFixed(2),
        })
      }
    } else {
      setProduct({
        ...product,
        [name]: value,
      })
    }
  }

  const resetProductState = () => {
    setProduct(initialProductState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()

      formData.append('file', imageSelected)
      formData.append('upload_preset', CLOUDINARY_UPLOAD_NAME)

      const response = await axios.post('https://api.cloudinary.com/v1_1/dezjflp5d/image/upload', formData)

      if (response.status === 200) {
        const imageUrl = response.data.url

        setProduct({
          ...product,
          id: new Date().getTime(),
          images: {
            ...product.images,
            src: imageUrl,
          },
        })

        const productResponse = await instance.post('products', product)

        if (productResponse.status === 201) {
          console.log('Product added successfully!')
          resetProductState()
        } else {
          console.error('Failed to add product')
        }
      } else {
        console.error('Failed to upload image')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form className="border mt-10 rounded-[8px] w-full " onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h2 className="text-2xl text-grays-gray900 py-4 px-6">Add Product</h2>
        <hr />
        <div className="w-[515px] p-5">
          <div>
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
            <Input type="file" className="my-3" onChange={(e) => setImageSelected(e.target.files[0])} />

            <Button
              onClick={(e) => {
                handleSubmit(e)
              }}
              type="submit"
              className="rounded-xl mt-3"
            >
              Add Product
            </Button>
          </div>
          <div>{/* <Image cloudName="dezjflp5d" publicID={''} /> */}</div>
        </div>
      </div>
    </form>
  )
}

export default AddProduct
