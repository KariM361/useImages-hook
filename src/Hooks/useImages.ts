import { useEffect, useState } from "react";


export function useImages() {
  // <string[]> = TypeScript type: array af strings
  // [] = initial værdi (tom array, da vi ikke har hentet billeder endnu)
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Henter alle billeder i mappen "/public/images"
    // glob = et mønster der matcher filer. Den finder alle filer der passer til mønsteret.
    // "*" betyder alle filer i mappen.
    const modules = import.meta.glob("/public/images/*", {
      eager: true, // hent alle filer med det samme (ikke lazy)
      as: "url",   // returnér filernes URL, ikke selve modulet
    });

    // Lav object om til array (Object.values tager alle værdierne i objektet)
    const paths = Object.values(modules) as string[];

    // Gem alle paths i state, så komponenten kan bruge dem
    setImages(paths);
  }, []); // [] = kør kun én gang når komponenten loader

  // Returnér arrayet med billedstier
  return images;
}

