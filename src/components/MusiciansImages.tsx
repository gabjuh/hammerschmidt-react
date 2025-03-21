import david from '../assets/img/david-budai.png';
import gabor from '../assets/img/gabor-juhasz.png';
import laura from '../assets/img/laura.png';
import zsuzsi from '../assets/img/zsuzsa-juhasz.png';

const getMusiciansImages = ({imageName}: {imageName: string}) => {
  
  switch (imageName) {
    case 'zsuzsi':
      return zsuzsi;
    case 'laura':
      return laura;
    case 'david':
      return david;
    case 'gabor':
      return gabor;
    default:
      break;
  }
}

export default getMusiciansImages