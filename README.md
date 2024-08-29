![Preview]()

Estou super animado em compartilhar este projeto! 🎉 Este é o início de algo especial, e você pode fazer parte disso.

Nesta rede social, você encontrará um espaço para se conectar, compartilhar e explorar uma variedade de funcionalidades que criei. Navegue pela aplicação, compartilhe suas ideias, curta o que você gosta e descubra novos amigos. 🌟

Estamos aqui para construir uma comunidade juntos. Portanto, sinta-se à vontade para se expressar, se divertir e fazer novas conexões! 😊 Aproveite cada recurso, explore cada canto e não hesite em nos dar seu feedback para ajudar a melhorar a aplicação. 💬

🔗 acesse a aplicação [aqui](https://text-fy.vercel.app).

## SOBRE O PROJETO

Text.fy é uma aplicação web fullstack que desenvolvi para aplicar e expandir os conhecimentos que venho adquirindo ao longo da minha jornada na programação. O projeto foi desenvolvido como uma rede social focada em postagens de texto, permitindo que os usuários compartilhem pensamentos, ideias e interajam entre si diretamente na plataforma.

Utilizei Next.js para desenvolver toda a aplicação, o que permitiu tratar componentes e páginas de forma unificada, integrando funcionalidades de server-side rendering (SSR) e client-side rendering (CSR) de maneira harmoniosa. As operações do lado do servidor, como funções assíncronas, são definidas dentro da própria estrutura do projeto, sem a necessidade de separação em diretórios distintos. Isso simplifica a manutenção e o desenvolvimento, permitindo que o código do servidor e do cliente compartilhem lógica e componentes, tornando o processo de desenvolvimento mais eficiente.

Utilizei a biblioteca NextAuth para implementar o sistema de login da aplicação e vincular cada publicação a um usuário. Assim, é possível visualizar as publicações de outros usuários sem a necessidade de login. No entanto, para interagir com as postagens como curtir, visualizar comentários ou criar novas publicações é necessário estar logado.

A aplicação possui uma interface intuitiva e fácil de usar, com uma estrutura composta por cinco páginas principais. A página Home lista todas as publicações criadas e armazenadas no banco de dados. A página Explore oferece um campo de pesquisa que permite ao usuário buscar todas as publicações de um usuário específico. Também desenvolvi uma página que exibe todas as publicações curtidas pelo usuário, além de uma página com um formulário para criar novas publicações. Por fim, há uma página dedicada aos comentários, onde é possível visualizar todos os comentários associados a uma publicação e adicionar novos comentários através de um formulário.

## TECNOLOGIAS USADAS

Como mencionado anteriormente, utilizei Next.js para a estrutura geral do projeto e TypeScript para garantir uma base sólida e tipada para o desenvolvimento.

Para a estilização, optei por TailwindCSS. Essa escolha permitiu criar estilos de forma rápida e eficiente, reduzindo a necessidade de escrever CSS personalizado. Além disso, minha familiaridade com a biblioteca facilitou a implementação e otimização do design.

Para armazenar os dados da aplicação, como publicações, comentários e informações de usuários, utilizei MongoDB, que oferece flexibilidade na estruturação dos dados.

Para facilitar o gerenciamento e a manipulação desses dados, empreguei o Prisma. Com o Prisma, criei um schema que define a estrutura dos dados e proporciona uma interface eficiente para interagir com o banco de dados.

Também utilizei Lucide Icons para incorporar ícones em várias partes do projeto, melhorando a interface e a usabilidade. Para simplificar a validação dos formulários, empreguei React Hook Form, que facilita a gestão de estados e validações de maneira eficiente e intuitiva.
