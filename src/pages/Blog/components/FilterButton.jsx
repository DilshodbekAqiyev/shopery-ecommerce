import PropTypes from 'prop-types'

import { Button } from '../../../components/ui/button'

const BlogFilterButton = ({ data, setFilterData }) => {
  return (
    <Button
      className="flex item-center gap-[12px]"
      onClick={() => {
        console.log('update..')
        setFilterData(data)
      }}
    >
      <span className="text-white font-bold">Filter</span>
      <img src="/assets/icons/filter.svg" alt="filter icon" className="inline-block ml-3 w-6 h-6" />
    </Button>
  )
}

export default BlogFilterButton

BlogFilterButton.propTypes = {
  data: PropTypes.array,
  setFilterData: PropTypes.func,
}
