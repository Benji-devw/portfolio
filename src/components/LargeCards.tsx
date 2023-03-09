import Image from 'next/image'
import { useRouter } from 'next/router';

const LargeCards: React.FC = () => {
  const router = useRouter();
  return (
    <div className="row m-2">
    <div className="col-12 col-lg-10 mx-auto large__card_cv__preview">
      <div className="row align-items-center">
        <div className="col-md-8 p-2 large__card__text">
            <h2 className="large__card__title">Benjamin Navarro</h2>
            <p className="">
              {`Passionné par l’informatique, sa conception et son évolution, je suis très ambitieux et constamment en recherche de connaissances
              dans ce que j'entreprends avec le métier de développeur web.`}
            </p>
            <p>{`L'alternance serait une progression concrète et significative dans ma carrière professionnelle.`}</p>
            <h5><code className='large__card__cv mx-auto'><a href={`${router.basePath}/media/Navarro_Benjamin_CV_2023.pdf`} target="_blank" rel="noopener noreferrer" >Télécharger le CV</a></code></h5>
        </div>
        <div className="col-md-4 p-2 cv__preview__image  mx-auto">
          <div className="large__card__body">
            <a href={`${router.basePath}/media/Navarro_Benjamin_CV_2023.pdf`} target="_blank" rel="noopener noreferrer" >
              <Image src={`${router.basePath}/media/cv_preview.jpg`} alt="icon" width={800} height={800} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default LargeCards