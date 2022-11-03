import Head from 'next/head';
 import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Layout from '../../components/layout/Layout';


function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>  
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description}> </meta>
            </Head>
            
            <Layout><MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} /></Layout>
        </Fragment>
    )
}

// use for dynamiic page with dynamic content which pre renders their page pased on id 
export async function getStaticPaths(){

    const client = await MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.4qxk8uz.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
      
    const meetups  = await meetupCollection.find({}, {_id: 1}).toArray(); 
    client.close()
     
    return {
        fallback: false, // if another id is navigated to by the user and not in the list bellow (i.e m1, m2) it would generate a 404. but if true next would generate a page 4 it 
        paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))    
    }
}
  
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
     
    const client = await MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.4qxk8uz.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const selectedMeetup = await  meetupCollection.findOne({_id: ObjectId(meetupId)});
    // const meetups  = await meetupCollection.find({}, {_id: 1}).toArray(); 
    client.close()
     
    return {
        props: {
            meetupData:  {
                id:  selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description, 
            }
        },
        revalidate: 1
    };
}

export default MeetupDetails;