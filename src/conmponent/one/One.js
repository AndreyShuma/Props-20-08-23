import './Style.css';

function One(props) {
    // console.log('One props>>', props.test);

    return (
        <div className='One'>
            {props.test.name}
        </div>
    )
}

export default One;