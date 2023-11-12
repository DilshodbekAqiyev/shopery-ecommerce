import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { instance } from '../../../utils/apiRequest'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Button } from '../../../components/ui/button'
import { Textarea } from '../../../components/ui/textarea'

import { CLOUDINARY_UPLOAD_NAME, initialProductState } from '../../../utils/constants'

function AddProduct() {
  const [imageSelected, setImageSelected] = useState('')
  const [product, setProduct] = useState(initialProductState)
  const fileInputRef = useRef()

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      try {
        const formData = new FormData()

        formData.append('file', imageSelected)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_NAME)

        const response = await axios.post('https://api.cloudinary.com/v1_1/dezjflp5d/image/upload', formData)
        // console.log(response)
        if (response.statusText === 'OK') {
          const imageUrl = response.data.secure_url
          // console.log(imageUrl)
          setProduct({
            ...product,
            id: new Date().getTime(),
            images: {
              ...product.images,
              src: imageUrl,
            },
          })
        } else {
          console.error('Failed to upload image')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    })()
  }, [imageSelected])

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name == 'discountPrice') {
      setProduct({
        ...product,
        [name]: Number(value),
      })
    }
    setProduct({
      ...product,
      [name]: value,
    })
  }
  // console.log(fileInputRef)
  const resetProductState = () => {
    setProduct(initialProductState)
    fileInputRef.current.value = ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const productResponse = await instance.post('products', product)

    if (productResponse.status === 201) {
      console.log('Product added successfully!')
      resetProductState()
    } else {
      console.error('Failed to add product')
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
            {/*  Price */}
            <div>
              <Label htmlFor="discountPrice" className="py-2 inline-block text-textMedium mt-5">
                Price
              </Label>
              <Input
                type="number"
                name="discountPrice"
                value={product.discountPrice}
                placeholder="Enter original price ..."
                id="discountPrice"
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
                onChange={handleChange}
              />
            </div>
            <Input
              type="file"
              className="my-3"
              onChange={(e) => setImageSelected(e.target.files[0])}
              ref={fileInputRef}
            />
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
        </div>
      </div>
    </form>
  )
}

export default AddProduct
