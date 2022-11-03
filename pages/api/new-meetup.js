//  /api/new-meetup
import { MongoClient } from 'mongodb';

// this would work for only POST request
async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body; 
        const {title, image, address, desciption} = data;
        const client = await MongoClient.connect('mongodb+srv://holard:MSjLd0eLfTsUANNV@cluster0.4qxk8uz.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();

    }
}

export default handler;