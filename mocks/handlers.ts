import { rest } from 'msw'

export const handlers = [
  rest.get('https://mockup.litecells.com/documents/', (req, res, ctx) => {
    return res(
      ctx.json([
        {
            id: 0,
            author: 'Orhan Pamuk',
            book: 'Kırmızı Saçlı Kadın',
        },
        {
          id: 1,
          author: 'Albert Camus',
          book: 'The Stranger',
        },
        {
          id: 2,
          author: 'Stefan Zweig',
          book: 'The Royal Game',
        },
        {
          id: 3,
          author: 'Peyami Safa',
          book: '9. Hariciye Koğuşu',
        },
        {
          id: 4,
          author: 'Daniel Defoe',
          book: 'Robinson Crusoe',
        },
        {
          id: 5,
          author: 'Sabahattin Ali',
          book: 'Kürk Mantolu Madonna',
        },
      ])
    )
  }),
]