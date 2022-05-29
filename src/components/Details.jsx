import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faClock, faFire, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-bootstrap';

function Details(props) {
  const [imgIndex, setIndex] = React.useState(0);
  const prop = props.detailsPage.detail;
  return (
    <div className="mt-3">
      <div className="mt-3 d-flex justify-content-between">
        <div>
          <h1 className='fontGilory'>{prop.recipe?.title}</h1>
          <p>{prop.recipe?.description}</p>
          <div className='d-flex'>
            <Difficulty name={prop.recipe?.difficulty} />
            <FontAwesomeIcon icon={faClock} size="lg" className="ms-2 text-secondary" />
            <div className="mx-2">{GetTimeCooking(prop.recipe?.cookTime)}</div>
            <FontAwesomeIcon icon={faFire} size="lg" className="ms-2 text-secondary" />
            <div className="mx-2">{prop.recipe?.caloricity} kCal</div>
            <FontAwesomeIcon icon={faGlobe} size="lg" className="ms-2 text-secondary" />
            <div className="mx-2">{prop.recipe?.cuisine.title}</div>
          </div>

          <h2 className='mt-4 fontGilory'>Ingredients</h2>
          <ul className='ps-3'>
            {
              prop.recipe?.ingredients.map((value) => {
                return <li className='mt-2'>{value}</li>
              })
            }
          </ul>
          <h2 className='mt-4 fontGilory'>Instruction</h2>
          <ol className='ps-0'>
            {
              prop.recipe?.instructions.map((value, index) => {
                return (
                  <div className='d-flex  mt-2'>
                    <div className="numberList m-1 me-2">
                      <p className='m-1'>{index}</p>
                    </div>
                    <li>
                      {value}
                    </li>
                  </div>
                )
              })
            }
          </ol>
        </div>
        <div className='slider'>
          <Carousel style={{ width: '532px', height: '355px' }}
            activeIndex={imgIndex}
            indicators={false}
            controls={false}
            onChange={(e) => setIndex({ value: e.target ? e.target.value : e })}>
            {
              prop.recipe?.images.map((value, index) => {
                return <Carousel.Item className='img' value={index} key={index}>
                  <img
                    className="d-block h-100 img"
                    src={value}
                    alt={prop.recipe?.title}
                  />
                </Carousel.Item>
              })
            }
          </Carousel>
          <div className='d-flex mt-2'>
            {
              prop.recipe?.images.map((value, index) => {
                return <div className='m-1 imgSmall'
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'url(' + value + ')',
                    backgroundSize: 'cover'
                  }}
                  onClick={() => setIndex(index)}
                  key={index}>
                </div>
              })
            }
          </div>
        </div>

      </div>
    </div>
  );
}

export function GetTimeCooking(sec) {
  let time = sec / 60;
  if (time >= 60) {
    return (time / 60).toString() + ' hours';
  }
  return time.toString() + ' min';
}


function Difficulty(props) {
  switch (props.name) {
    case "easy":
      return (
        <>
          <FontAwesomeIcon icon={faCookieBite} size="lg" className="ms-2" style={{ color: '#2FB65D' }} />
          <div className="mx-2" style={{ color: '#2FB65D' }}>{props.name}</div>
        </>
      );
    case "hard":
      return (
        <>
          <FontAwesomeIcon icon={faCookieBite} size="lg" className="ms-2" style={{ color: '#EB3C31' }} />
          <div className="mx-2" style={{ color: '#EB3C31' }}>{props.name}</div>
        </>
      );
    case "medium":
      return (
        <>
          <FontAwesomeIcon icon={faCookieBite} size="lg" className="ms-2" style={{ color: '#EB8A31' }} />
          <div className="mx-2" style={{ color: '#EB8A31' }}>{props.name}</div>
        </>
      );
    default:
      return (
        <>
          <FontAwesomeIcon icon={faCookieBite} size="lg" className="ms-2 text-succsess" />
          <div className="mx-2 text-succsess">{props.name}</div>
        </>
      );
  }

}

export default Details;