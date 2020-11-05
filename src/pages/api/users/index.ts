import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const{ method } = req;

    if(method === "GET") {

      res.status(200).json([
        {
          method,
          "id":137160,
          "first_name":"Janayna",
          "last_name":"Velozo",
          "picture":"https://quiin.s3.amazonaws.com/default_images/avatars/jv.svg",
          "headline":"Service Design Lead",
          "city":"",
          "country":null,
          "website":null,
          "linkedin":null,
          "twitter":null,
          "bio":null,
          "registration_blocked":false
      },
      {
        method,
        "id":110723,
          "first_name":"Ahirton",
          "last_name":"Lopes",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/000/110/723/medium/filename.jpg?1587752887",
          "headline":"Data Scientist @Magna Sistemas and Microsoft MVP in AI",
          "city":"",
          "country":null,
          "website":null,
          "linkedin":"https://www.linkedin.com/in/ahirton/",
          "twitter":"https://twitter.com/AhirtonLopes",
          "bio":"",
          "registration_blocked":false
      },
      {
        method,
        "id":102811,
          "first_name":"Aline",
          "last_name":"Ayres",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/000/102/811/medium/open-uri20200409-44-1i64jqp?1586458782",
          "headline":"Developer, Android developer, Kotlin enthusiast, speaker, traveller and little dragon's mother.",
          "city":"",
          "country":null,
          "website":"",
          "linkedin":"https://www.linkedin.com/in/alineayres/",
          "twitter":"https://twitter.com/missayres",
          "bio":null,
          "registration_blocked":false
      },
      {
        method,
        "id":2517717,
          "first_name":"Albert",
          "last_name":"Tanure",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/002/517/717/medium/albert.jpeg?1603289415",
          "headline":"Microsoft MVP",
          "city":null,
          "country":null,
          "website":"https://www.codefc.com.br",
          "linkedin":"https://www.linkedin.com/in/albert-tanure",
          "twitter":"https://twitter.com/alberttanure",
          "bio":"Graduado em Sistemas de Informação, Cloud Solutions Architect e Microsoft MVP, Imitador, Pai, Marido, palestrante. Gosto muito de aprender e principalmente servir as pessoas compartilhando conteúdos técnicos. Fundador do site Code FC (www.codefc.com.br), e dos pequenos vídeos didáticos, com conteúdo técnico, da série #SimplificandoConceitos.",
          "registration_blocked":false
      },
      {
        method,
        "id":132765,
          "first_name":"Renata",
          "last_name":"Faria",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/000/132/765/medium/IMG_1724_-_c%C3%B3pia.JPG?1590452999",
          "headline":"iOS dev @ iFood",
          "city":"",
          "country":null,
          "website":"",
          "linkedin":"http://linkedin.com/in/renatafariagomes/",
          "twitter":"",
          "bio":"",
          "registration_blocked":false
      },
      {
        method,
        "id":1443403,
          "first_name":"Rafa",
          "last_name":"Sampaio",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/001/443/403/medium/8A3243A9-4145-4053-A91C-80F92A89F569.JPG?1603720518",
          "headline":"Agile Leader",
          "city":null,
          "country":null,
          "website":"",
          "linkedin":"",
          "twitter":"",
          "bio":"",
          "registration_blocked":false
      },
      {
        method,
        "id":778745,
          "first_name":"Andre",
          "last_name":"Lins",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/000/778/745/medium/filename.jpg?1593172365",
          "headline":"Engenheiro FrontEnd",
          "city":"Florianópolis",
          "country":null,
          "website":"http://andrelmlins.github.io/",
          "linkedin":"https://www.linkedin.com/in/andrelmlins/",
          "twitter":"https://twitter.com/andrelmlins",
          "bio":"Viciado em open source, fazendo software da forma mais questionável possível e tendo raiva com FrontEnd.",
          "registration_blocked":false
      },
      {
        method,
        "id":1386819,
          "first_name":"Aline",
          "last_name":"De Santana Maranho Dos Santos",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/001/386/819/medium/Alephan%C3%A1tica.jpg?1603294552",
          "headline":"",
          "city":null,
          "country":null,
          "website":null,
          "linkedin":null,
          "twitter":null,
          "bio":null,
          "registration_blocked":false
      },
      {
        method,
        "id":100110,
          "first_name":"Carol",
          "last_name":"Vilas Boas",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/000/100/110/medium/WhatsApp_Image_2020-03-31_at_20.04.20.jpeg?1586394856",
          "headline":"Dev Advocate, Community Sponsorship Manager at QaLadies and Jornada Colaborativa, Speaker and Writer",
          "city":"",
          "country":null,
          "website":"",
          "linkedin":"https://www.linkedin.com/in/carolfvb/",
          "twitter":"https://twitter.com/carolfvboas",
          "bio":null,
          "registration_blocked":false
      },
      {
        method,
        "id":1353484,
          "first_name":"Fernanda",
          "last_name":"Souza",
          "picture":"https://s3.amazonaws.com/quiin/users/pictures/001/353/484/medium/49049355191_e3f69db197_o_v3.jpg?1603121671",
          "headline":"Data Engineer | Coordenadora Trilha Python",
          "city":null,
          "country":null,
          "website":"https://mfsouza.com/",
          "linkedin":"https://www.linkedin.com/in/naanadr/",
          "twitter":"https://twitter.com/naanadr",
          "bio":"",
          "registration_blocked":false
      }
      ])
    } else {
      res.status(405).json({ message: "Método não permitido"});
    }

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
