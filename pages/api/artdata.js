// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id:1,
      name: 'John Doe1',
      url:"/artimages/img (1).JPG",
      price:1000 ,
      genre:"genre1",},
      { id:2,
        name: 'John Doe2',
        url:"/artimages/img (2).JPG",
        price:2000 ,
        genre:"genre2"},
        { id:3,
          name: 'John Doe3',
          url:"/artimages/img (3).JPG",
          price:3000 ,
          genre:"genre3"},
          { id:4,
            name: 'John Doe4',
            url:"/artimages/img (4).JPG",
            price:4000 ,
            genre:"genre4"},
            { id:5,
              name: 'John Doe5',
              url:"/artimages/img (5).JPG",
              price:5000 ,
              genre:"genre1"},
              { id:6,
                name: 'John Doe6',
                url:"/artimages/img (6).JPG",
                price:6000 ,
                genre:"genre2"},
                { id:7,
                  name: 'John Doe7',
                  url:"/artimages/img (7).JPG",
                  price:7000 ,
                  genre:"genre3"},
                  { id:8,
                    name: 'John Doe8',
                    url:"/artimages/img (8).JPG",
                    price:8000 ,
                    genre:"genre4"},
                  ])
}
