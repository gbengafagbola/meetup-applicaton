import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails(props) {
    return (<MeetupDetail meetups={props.meetupData}/>
    )
}

// use for dynamiic page with dynamic content which pre renders their page pased on id 
export async function getStaticPaths(){
    return {
        fallback: false, // if another id is navigated to by the user and not in the list bellow (i.e m1, m2) it would generate a 404. but if true next would generate a page 4 it 
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ]
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
     
    return {
        props: {
            meetupData: {
                image: 'https://image.cnbcfm.com/api/v1/image/107118352-1663159290671-GettyImages-1355146458.jpg?v=1663219980&w=740&h=416&ffmt=webp',
                id: meetupId,
                title: 'first meetup',
                address: '40 arrow street',
                description: 'avenue for meetup'
            }
        },
        revalidate: 1
    };
}

export default MeetupDetails;