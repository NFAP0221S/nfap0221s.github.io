// // pages/api/notion.js
// import { Client } from '@notionhq/client';

// const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });

// export default async function handler(req, res) {
//   const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

//   if (req.method === 'GET') {
//     try {
//       const response = await notion.databases.query({ database_id: databaseId });
//       res.status(200).json(response.results);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch data from Notion' });
//     }
//   } else if (req.method === 'POST') {
//     const { title, content } = req.body;
//     try {
//       const response = await notion.pages.create({
//         parent: { database_id: databaseId },
//         properties: {
//           title: {
//             title: [
//               {
//                 text: {
//                   content: title,
//                 },
//               },
//             ],
//           },
//         },
//         children: [
//           {
//             object: 'block',
//             type: 'paragraph',
//             paragraph: {
//               text: [
//                 {
//                   type: 'text',
//                   text: {
//                     content: content,
//                   },
//                 },
//               ],
//             },
//           },
//         ],
//       });
//       res.status(200).json(response);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to create post' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
