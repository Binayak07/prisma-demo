import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Create user

    //  const user = await prisma.user.create({
    //     data:{
    //         name:"Richa",
    //         email:"pue@gmail.com"
    //     },
    //  })

    // get all users
    // const users = await prisma.user.findMany();
    //  console.log(users);

    // create an article
    // const article = await prisma.article.create({
    //     data: {
    //      title:"Nanhu book",
    //      body:"Nanhu is cute and sweet",
    //      author:{
    //         connect:{
    //         id:1
    //      }
    //     },
    //     },
    // });

    // Get all articles
    // const articles = await prisma.article.findMany();
    // console.log(articles)

    // Create user and article and associate them.
//     const user = await prisma.user.create({
//         data:{
//             name:"Richa",
//             email: "richa@gmail.com",
//             articles:{
//                 create:{
//                     title:"Piyu Book",
//                     body:"Pyari piyu book has ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 }
//             }
//         }
//     })

// show users with their articles
// const userWithArticles = await prisma.user.findMany({
//     include:{
//         articles: true
//     }
// })

// create another article
// const article = await prisma.article.create({
//     data:{
//         title:"Cute Nanhu",
//         body:"Nanhu is cute and sweet. Smallest member of our family.",
//         author:{
//             connect:{
//                 id:2
//             }
//         }
//     }
// })
// console.log(userWithArticles);
// userWithArticles.forEach(user=>{
//     console.log(`User: ${user.name} Email: ${user.email}`);
//     console.log("Articles:--");
//     user.articles.forEach(article=>{
//         console.log(`- Title: ${article.title} Body: ${article.body}`);
//     })
//     console.log("\n")
// })

// Update users
// const user = await prisma.user.update({
//     where: {
//         id:1,
//     },
//     data:{
//         name:"Piyu"
//     }
// })
// console.log(user)

// Remove Data
// const article = await prisma.article.delete({
//     where:{
//         id: 2
//     }
// });

// console.log(article)
}

main()
.then(async () => {
    await prisma.$disconnect();
}).catch(async (e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})