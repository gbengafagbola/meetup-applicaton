//  /api/new-meetup
import { MongoClient } from 'mongodb';

// this would work for only POST request
async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body; 
        const {title, image, address, desciption} = data;
 
        const result = await meetupCollection.insertOne(data);

        console.log(result);

        client.close();
        res.status(201).json({message: 'meetup inserted '})
    }
}

export default handler;