import './Style.css';

function Two(props) {
    // console.log('TWO props>>>', props);
    const {gender, height, mass, hair_color, eye_color} = props.data;
    return (
        <div className='Two'>
            <p>статть - {gender}</p>
            <p>зріст - {height} см</p>
            <p>вага - {mass}кг</p>
            <p>кольор волосся - {hair_color}</p>
            <p>кольор очей - {eye_color}</p>
        </div>
    )
}

export default Two;