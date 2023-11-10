export const CLOUDINARY_UPLOAD_NAME = 'shopery'

export const token = localStorage.getItem('token')

export const initialProductState = {
  id: new Date().getTime(),
  name: '',
  category: '',
  discountPrice: null || '',
  originalPrice: null,
  discountPercentage: null,
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
  author: localStorage.getItem('access_token'),
}
