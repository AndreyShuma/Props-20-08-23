import './Style.css';

function Three (props) {
    // const f1 = () => {props.data2};
    const {data1, data2} = props;
    
    // console.log('Three props2>>', props);

    return (
        <button className='button' onClick={data2}>SEND</button>
    )

}

export default Three;