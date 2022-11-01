import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'meetup 1',
        image: 'https://image.cnbcfm.com/api/v1/image/107118352-1663159290671-GettyImages-1355146458.jpg?v=1663219980&w=740&h=416&ffmt=webp',
        address: '41 arch street ring road',
        description: 'event 1'
    },
    {
        id: 'm2',
        title: 'meetup 2',
        image: 'https://www.nlc.org/wp-content/uploads/2020/10/large-city.png',
        address: '42 arch street ring road',
        description: 'event 2'
    },
    {
        id: 'm3',
        title: 'meetup 3',
        image: 'https://image.cnbcfm.com/api/v1/image/107118352-1663159290671-GettyImages-1355146458.jpg?v=1663219980&w=740&h=416&ffmt=webp',
        address: '43 arch street ring road',
        description: 'event 3'
    },
    {
        id: 'm4',
        title: 'meetup 4',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLErm6GOA_tCj9i8zsr2GOGY2ni0d85mT2iCqwP-AS52CxsuGNNNxd6LrvEeV1Q9umGk&usqp=CAU',
        address: '44 arch street ring road',
        description: 'event 4'
    },
    {
        id: 'm5',
        title: 'meetup 5',
        image: 'https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2016/08/16081357/brooklyn.png',
        address: '45 arch street ring road',
        description: 'event 5'
    }
];

function HomePage() {
    return  <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;