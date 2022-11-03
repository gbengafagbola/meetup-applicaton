import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';
import { Fragment } from 'react';

function HomePage(props) {
    return <Fragment>
        <Head>  
            <title>React Meetup</title>
            <meta name='description' content='react meetups!'></meta>
        </Head>
        <Layout><MeetupList meetups={props.meetups} /></Layout>
    </Fragment> 
}

export async function getStaticProps() {
    // fetch data/ read from file system etc
    MongoClient.connect();

    const client = await MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.4qxk8uz.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
     
    const meetups  = await meetupCollection.find().toArray(); 

    client.close();
    return {
        props: {
            meetups: meetups.map(meetup =>  ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        // incremetal static generation, making a regeneration for a perticular time interval set on the server making it up to date, replacing the old generated page
        revalidate: 1
    };
}

// this block of code only run on the server and differs with the above because it update when any incoming request are made 
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
     
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;