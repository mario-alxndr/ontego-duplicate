// import axios from 'axios';
// import express from 'express';
// import cors from 'cors';
// import cheerio from 'cheerio';

//   var app = express();

//   app.use(cors());

//   axios.get('https://ontego.de/sap_mobility/mobile-geraete.html#')
//     .then(res => {
//       const $ = cheerio.load(res.data)
//       const urlRegex = /url\('(.*)'\)/;
//       let titles: string[] = [];
//       let prices: number[] = [];
//       let displays: number[] = [];
//       let weights: number[] = [];
//       let availableAccesorries: string[] = [];
//       let ourAssessments: string[] = [];
//       let imagesUrl: string[] = [];

//       $('div.cs-hfinder-container p.cs-body-2').each((index, element) => {
//         const itemName = $(element).text();
//         titles.push(itemName);
//       });

//       $('div.cs-hfinder-container li').each((index, element) => {
//         const item = $(element).text();

//         if(item.includes('Preis: ')) {
//           const price = item.match(/(\d+)/) || [];
//           prices.push(Number(price[0]));
//         }

//         if(item.includes('Display: ')) {
//           const display = item.match(/(\d+)/) || [];
//           displays.push(Number(display[0]));
//         }

//         if(item.includes('Gewicht: ')) {
//           const weight = item.match(/(\d+)/) || [];
//           weights.push(Number(weight[0]));
//         }

//         if(item.includes('verfügbares Zubehör')) {
//           availableAccesorries.push(item);
//         }
//       })

//       $('div.cs-hfinder-container h5').each((index, element) => {
//         const item = $(element).text();
//         ourAssessments.push(item);
//       })

//       $('div.cs-hfinder-container .cs-standard-img-1-1').each((index, element) => {
//         const imageUrl = $(element).attr('style');
//         const formattedImageUrl = imageUrl!.match(urlRegex) || [];
//         imagesUrl.push(formattedImageUrl[1]);
//       })

//       const scrappedData = titles.map((title, index) => {
//         return {
//           productName: title,
//           price: prices[index],
//           display: displays[index],
//           weight: weights[index],
//           availableAccesorry: availableAccesorries[index].trim(),
//           ourAssessment: ourAssessments[index].trim(),
//           imageUrl: imagesUrl[index*2],
//         }
//       })
    
//       console.log(JSON.stringify(scrappedData));
//     });