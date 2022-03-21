import styles from './ZodiacList.module.css'
import ZodiacCard from '../../components/ZodiacCard/ZodiacCard'

const dogIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,
	593,611,659,718,783,790,824,837,881,937,943]

function ZodiacList(props) {
  return (
    <>
      <h1>Zodiac List</h1>
      <div className={styles.container}>
        {props.zodiacs.map(zodiac =>
          <ZodiacCard 
            key={zodiac._id} 
            zodiac={zodiac}
            randDogImgId={dogIds[Math.floor(Math.random()*(dogIds.length))]}
            handleDeleteZodiac={props.handleDeleteZodiac}
          />
        )}
      </div>
    </>
  )
}

export default ZodiacList