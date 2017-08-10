import request from 'supertest'
import App from '../server/App'

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(App).get('/').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})
