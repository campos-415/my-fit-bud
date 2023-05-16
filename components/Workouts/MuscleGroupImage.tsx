import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import bodyImg from "/public/assets/bodyImg.png";
import { group } from "console";

interface MuscleGroupImageProps {
  muscleGroups: Array<string>;
}

export default function MuscleGroupImage({
  muscleGroups,
}: MuscleGroupImageProps) {
  const [image, setImage] = useState("");
  const fetchMuscleImage = async () => {

    // tries to fetch the image from the API
    try {
      const response = await axios.get(
        `https://muscle-group-image-generator.p.rapidapi.com/getImage`,
        {
          params: {
            muscleGroups: `${muscleGroups.join(",")}`,
            color: "80,204,02",
            transparentBackground: "1",
          },
          headers: {
            "X-RapidAPI-Key":
              "707b32fad2mshc384f1c4790c3e8p110ffbjsnfe4e85cc70ac",
            "X-RapidAPI-Host": "muscle-group-image-generator.p.rapidapi.com",
          },
          responseType: "arraybuffer",
        }
      );
      const imageFile = new Blob([response.data]);
      const imageUrl = URL.createObjectURL(imageFile);
      setImage(imageUrl);
    } catch (error) {
      // catches any errors and fetches another image as replacement
      const response = await axios.get(
        `https://muscle-group-image-generator.p.rapidapi.com/getBaseImage`,
        {
          params: {
            transparentBackground: "1",
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RapidAPI_KEY,
            "X-RapidAPI-Host": "muscle-group-image-generator.p.rapidapi.com",
          },
          responseType: "arraybuffer",
        }
      );
      const imageFile = new Blob([response.data]);
      const imageUrl = URL.createObjectURL(imageFile);
      setImage(imageUrl);
    }
  };

  useEffect(() => {
    fetchMuscleImage();
  }, [muscleGroups]);

  return image ? (
    <Image
      priority
      width={400}
      height={400}
      src={image}
      alt={`Image of ${muscleGroups.join(",")}`}
    />
  ) : (
    <Image
      priority
      width={400}
      height={400}
      src={bodyImg}
      alt={`Image of body`}
    />
  );
}
