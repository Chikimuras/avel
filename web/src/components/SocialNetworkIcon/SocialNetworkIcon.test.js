import { render } from '@redwoodjs/testing/web'

import SocialNetworkIcon from './SocialNetworkIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialNetworkIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialNetworkIcon />)
    }).not.toThrow()
  })
})
