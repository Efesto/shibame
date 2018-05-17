jest.mock('../shiba_blogs', () => {
  return {
    getPosts: new Promise(((resolve, reject) => {
      resolve({
        posts: [
          {
            photos: [
              {
                alt_sizes: [
                  {
                    url: 'url0'
                  },
                  {
                    url: 'url1'
                  },]
              }
            ]
          }
        ]
      });
    }))
  }
});
const shibas = require('../shibas');
const response = {
  setHeader: jest.fn(),
  json: jest.fn(),
}

beforeEach(() => {
  response.setHeader.mockReset();
  response.json.mockReset();
})

describe('#random', () => {
  it('sets a single shiba in the response', async () => {    
    await shibas.random(null, response);
    expect(response.json).toHaveBeenCalledWith(
      {
        shiba: 'url0'
      }
    )
  })

  it('sets a allow origin * in the response', async () => {    
    await shibas.random(null, response);
    expect(response.setHeader).toHaveBeenCalledWith(
      'Access-Control-Allow-Origin', '*'
    );
  })
})

describe('#many', () => {
  it('sets a allow origin * in the response', async () => {    
    await shibas.many(null, response);
    expect(response.setHeader).toHaveBeenCalledWith(
      'Access-Control-Allow-Origin', '*'
    );    
  })
})