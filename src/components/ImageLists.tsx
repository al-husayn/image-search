import { Image } from "./Search";

interface ImageListProps {
  data: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center align-center h-96">
      {data.map((image: Image) => (
        <div
          key={image.id}
          className="w-64 h-64 justify-self-center self-center rounded-lg transition-transform transform hover:-translate-y-3">
          <img
            src={image.urls?.small}
            alt={image.id}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
