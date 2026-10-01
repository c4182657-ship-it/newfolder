import { render } from '@redwoodjs/testing/web'

import HomePage from './HomePage'

// If you want to use POV testing, uncomment the following lines and replace
// render with renderHook and screen.debug() with HookOutput viz
// import { renderHook } from '@redwoodjs/testing/web'
// import { screen } from '@redwoodjs/testing'

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
