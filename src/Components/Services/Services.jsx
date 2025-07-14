import React from 'react';
import { MdManageSearch } from 'react-icons/md';
import { TbDeviceDesktopBolt } from 'react-icons/tb';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import { PiHandDepositDuotone } from 'react-icons/pi';
import { FaPaintBrush } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import image from '../../assets/setting.png';
import './Services.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      icon: <MdManageSearch />,
      title: t('services.discovery.title'),
      description: t('services.discovery.description'),
    },
    {
      icon: <FaPaintBrush />,
      title: t('services.uiux.title'),
      description: t('services.uiux.description'),
    },
    {
      icon: <RiVerifiedBadgeLine />,
      title: t('services.testing.title'),
      description: t('services.testing.description'),
    },
    {
      icon: <TbDeviceDesktopBolt />,
      title: t('services.development.title'),
      description: t('services.development.description'),
    },
    {
      icon: <PiHandDepositDuotone />,
      title: t('services.launch.title'),
      description: t('services.launch.description'),
    },
  ];

  const rightServices = servicesData.slice(0, 3);
  const leftServices = servicesData.slice(3);

  return (
    <div className="services" data-aos="fade-up">
      <h1 className="servicesTitle" data-aos="fade-down">
        <IoMdSettings style={{ color: '#525CA9' }} /> {t('services.sectionTitle')}
      </h1>

      <div className="servicesContainer">
        <div className="leftContainer">
          {rightServices.map((service, index) => (
            <div className="content" key={index} data-aos="fade-right" data-aos-delay={index * 100}>
              <div className="icon">{service.icon}</div>
              <div className="titleContent">
                <h1 className="header">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rightContainer">
          <div className='containerImg' data-aos="zoom-in">
            <img src={image} className="image" alt="Services illustration" />
          </div>
          {leftServices.map((service, index) => (
            <div className="content" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
              <div className="icon">{service.icon}</div>
              <div className="titleContent">
                <h1 className="header">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
