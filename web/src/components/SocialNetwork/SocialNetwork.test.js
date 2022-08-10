import { render } from '@redwoodjs/testing/web'

import SocialNetwork from './SocialNetwork'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialNetwork', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialNetwork />)
    }).not.toThrow()
  })
})
