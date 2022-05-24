import React from 'react'
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP} from './ServicesElements';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-1.svg';

const Services = () => {
  return (
    <>
      <ServicesContainer>
<ServicesH1> Our Services </ServicesH1>
<ServicesWrapper>
  <ServicesCard>
    <ServicesIcon src={Icon1}/>
    <ServicesH2> Reduce expenses </ServicesH2>
    <ServicesP> We help reduce your fees and increase your overall revenue.</ServicesP>
  </ServicesCard>
  <ServicesCard>
    <ServicesIcon src={Icon2}/>
    <ServicesH2> Virtual offices </ServicesH2>
    <ServicesP> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veniam cum explicabo placeat blanditiis cumque assumenda aspernatur odio.</ServicesP>
  </ServicesCard>
  <ServicesCard>
    <ServicesIcon src={Icon3}/>
    <ServicesH2> Premium benefits </ServicesH2>
    <ServicesP> Lorem ipsum dolor sit amet consectetur adipisicing elit. </ServicesP>
  </ServicesCard>
</ServicesWrapper>
      </ServicesContainer>

    </>
  )
}

export default Services
