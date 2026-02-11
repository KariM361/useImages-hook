import { useImages } from '../../Hooks/useImages';
import style from "./gallery.module.scss";


export function Gallery() {
// Kalder hooket → får et array med billedstier
  const images = useImages();

  return (
     // Container div med grid styling
    <div  className={style.gallery}>
        
    {/*går igennem alle billeder i arrayet */}
      {images.map((src, index) => (
        <img key={index}//holder styr på listen
        src={src}//billed sti
         className={style.image} alt="gallery" />
      ))}
    </div>
  );
}