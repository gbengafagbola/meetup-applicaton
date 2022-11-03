import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Layout from '../../components/layout/Layout';

function NewMeetupPage() {
    const router = useRouter;
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            } 
        });

        const data = await response.json();

        console.log(data);
        router.push('/');
    }
    return  <Layout><NewMeetupForm onAddMeetup={addMeetupHandler}/></Layout>
}

export default NewMeetupPage;