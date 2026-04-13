import { render } from '@testing-library/react'
import App from './App'

describe('App structure', () => {
  it('renders semantic elements: nav, main, header, footer', () => {
    const { container } = render(<App />)
    expect(container.querySelector('nav')).toBeTruthy()
    expect(container.querySelector('main')).toBeTruthy()
    expect(container.querySelector('header')).toBeTruthy()
    expect(container.querySelector('footer')).toBeTruthy()
  })

  it('renders all section ids in correct DOM order', () => {
    const { container } = render(<App />)
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
    const ids = Array.from(container.querySelectorAll('[id]')).map((el) => el.id)
    const indices = sections.map((id) => ids.indexOf(id))
    // Each section id should appear and be in ascending index order
    indices.forEach((idx) => expect(idx).toBeGreaterThanOrEqual(0))
    for (let i = 1; i < indices.length; i++) {
      expect(indices[i]).toBeGreaterThan(indices[i - 1])
    }
  })
})
