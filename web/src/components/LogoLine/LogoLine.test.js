import { render } from '@redwoodjs/testing/web'

import LogoLine from './LogoLine'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LogoLine', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogoLine />)
    }).not.toThrow()
  })
})
