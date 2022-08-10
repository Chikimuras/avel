import { render } from '@redwoodjs/testing/web'

import PortfolioCard from './PortfolioCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PortfolioCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PortfolioCard />)
    }).not.toThrow()
  })
})
