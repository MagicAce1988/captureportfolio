import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';
import home2 from '../../img/home2.png';
import { Description, Image } from '../../CommonStyles.styled';
import { Card, Cards, Services } from './ServicesSection.styled';

const ServicesSection = ({ ...props }) => {
  const cards = [
    {
      icon: clock,
      alt: 'clock',
      title: 'Efficient',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      icon: teamwork,
      alt: 'teamwork',
      title: 'Teamwork',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      icon: diaphragm,
      alt: 'diaphragm',
      title: 'Diaphragm',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      icon: money,
      alt: 'money',
      title: 'Money',
      text: 'Lorem ipsum dolor sit amet.',
    },
  ];
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          {cards.map(({ icon, alt, title, text }) => (
            <Card>
              <div className="icon">
                <img src={icon} alt={alt} />
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
            </Card>
          ))}
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="digital camera" />
      </Image>
    </Services>
  );
};

export default ServicesSection;
