import Layout from '../layout/Layout';
import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
    return (
        <Layout>
            <section className={classes.detail}>
            <img src={props.image} alt={props.title}/>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    </Layout>
    )
}

export default MeetupDetail;