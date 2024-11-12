import Marquee from 'react-fast-marquee';
import AlibabaImage from '../../assets/images/alibaba.avif';
import ArtifImage from '../../assets/images/Artof.avif';
import BMWImage from '../../assets/images//BMW-Logo.avif';
import DocuSignImage from '../../assets/images/DocuSign.avif';
import HarvardImage from '../../assets/images/harvard.avif';
import HubSpotImage from '../../assets/images/HubSpot.avif';
import LogoImage from '../../assets/images/Logo.avif';
import McDonaldImage from '../../assets/images/McDonald.avif';
import NvidiaImage from '../../assets/images/NVIDIA.avif';
import PepsiImage from '../../assets/images/pepsi.avif';
import RectangleImage from '../../assets/images/Rectangle.avif';
import SamsungImage from '../../assets/images/samsung.avif';

const images = [
  AlibabaImage,
  ArtifImage,
  BMWImage,
  DocuSignImage,
  HarvardImage,
  HubSpotImage,
  LogoImage,
  McDonaldImage,
  NvidiaImage,
  PepsiImage,
  RectangleImage,
  SamsungImage
];

const InfiniteSlider = () => {
  return (
    <Marquee>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className='h-6 mr-5 opacity-40 md:mr-10 lg:mr-32 xl:h-7'
        />
      ))}
    </Marquee>
  )
};

export default InfiniteSlider;