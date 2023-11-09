import { CHECKOUT_TYPES } from './checkoutType'
// firstName: '',
// lastName: '',
// companyName: '',
// streetAdress: '',
// region: '',
// states: '',
// zipCode: '',
// email: '',
// phone: '',
// shipToDiffernAdress: false,
// additionalInfo: '',
export const CheckoutReducer = (state, action) => {
  switch (action.type) {
    case CHECKOUT_TYPES.FIRST_NAME:
      return { ...state, firstName: action.payload }
    case CHECKOUT_TYPES.LAST_NAME:
      return { ...state, lastName: action.payload }
    case CHECKOUT_TYPES.COMPANY_NAME:
      return { ...state, companyName: action.payload }
    case CHECKOUT_TYPES.STREET_ADRESS:
      return { ...state, streetAdress: action.payload }
    case CHECKOUT_TYPES.REGION:
      return { ...state, region: action.payload }
    case CHECKOUT_TYPES.STATES:
      return { ...state, states: action.payload }
    case CHECKOUT_TYPES.ZIP_CODE:
      return { ...state, zipCode: action.payload }
    case CHECKOUT_TYPES.EMAIL:
      return { ...state, email: action.payload }
    case CHECKOUT_TYPES.PHONE:
      return { ...state, phone: action.payload }
    case CHECKOUT_TYPES.SHIP_TO_DIFFERENT_ADRESS:
      return { ...state, shipToDiffernAdress: action.payload }
    case CHECKOUT_TYPES.ADDITIONAL_INFO:
      return { ...state, additionalInfo: action.payload }

    default:
      return { ...state }
  }
}
