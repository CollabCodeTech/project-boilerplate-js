import request from 'supertest'
import App from '../server/App'

describe('Test the root path', () => {
  test('It should response the GET method', () => {
      return request(App).get('/').expect(200);
  })
})
