import React from 'react'
import { Container, Main, Wrapper } from './components'
import { assets } from './assets'

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth)
  const imageType = width > 640 ? assets.desktop : assets.mobile
  type StatsDataProps = {
    title: string
    number: string
  }
  const statsData: StatsDataProps[] = [
    {
      title: '10k+',
      number: 'companies'
    },
    {
      title: '314',
      number: 'templates'
    },
    {
      title: '12M+',
      number: 'queries'
    }
  ]

  React.useEffect(() => {

    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  return (
    <Main className='min-h-[956px] sm:min-h-screen  bg-[#0A0C1C] grid place-items-center min-w-full px-[24px] sm:py-[5rem] md:py-[0]'>
      <Container className='bg-[#1B1937] w-full max-w-[1110px] rounded-[8px] min-h-[780px] sm:min-h-[446px] flex flex-col md:flex-row-reverse flex-nowrap gap-[40px] overflow-hidden'>
        <img className='relative object-fit md:w-[50%]' src={imageType} alt="" />
        <Wrapper className='flex-grow-[1] flex flex-col flex-nowrap justify-evenly items-center px-[32px] sm:px-[72px] pb-[32px] md:py-[72px] font-inter gap-[16px] sm:gap-[25px]'>

          <h1 className='text-white text-[28px] sm:text-[36px] text-center sm:text-left font-bold sm:leading-[1.2]'>
            Get <span className='text-[#AB5CDB]'>insights</span> that help your business grow.
          </h1>

          <p className='text-center sm:text-left text-[15px] text-white opacity-[.75] tracking-wide'>
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
          </p>

          <Wrapper className='flex flex-col w-full gap-[24px] mt-[calc(40px-16px)] md:mt-[calc(72px-25px)] xs:flex-row xs:justify-around sm:justify-between'>
          {
            statsData.map((data, index) => (
              <div key={index} className='flex flex-col flex-nowrap justify-center items-center'>
                <h2 className='text-[24px] text-white font-bold'>{data.title}</h2>
                <p className='font-lexend text-white text-[12px] opacity-[.75] tracking-[1px]'>{data.number}</p>
              </div>
            ))
          }
          </Wrapper>

        </Wrapper>
      </Container>
    </Main>
  )
}