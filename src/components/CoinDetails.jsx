import { Box, Container, Radio, RadioGroup, HStack, VStack, Text, Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { server } from '../index';
import ErrorComponent from './ErrorComponent';
import Chart from './Chart';

const CoinDetails = () => {

  const params = useParams()
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [days, setDays] = useState('24h')
  const [chartArray, setChartArray] = useState([])

  const currencySymbols = {
    inr: "₹",
    usd: "$",
    eur: "€"
  };

  const btns=['24h','7d','14d','30d','60d','200d','365d'];

  const switchChartStats=(key)=> {

    switch (key) {
      case '24h':
        setDays('24h');
        setLoading(true);
        break;

        case '7d':
        setDays('7d');
        setLoading(true);
        break;

        case '14d':
          setDays('14d');
          setLoading(true);
          break;

          case '30d':
          setDays('30d');
          setLoading(true);
          break;

          case '60d':
          setDays('60d');
          setLoading(true);
          break;

          case '200d':
          setDays('200d');
          setLoading(true);
          break;

          case '365d':
          setDays('365d');
          setLoading(true);
          break;

    
      default:
        setDays('24h');
        setLoading(true);
        break;
    }

  }

  

  useEffect(() => {

    const fetchCoin = async () => {
      try {
        const res = await fetch(`${server}/coins/${params.id}`);
        
        const chartResponse = await fetch(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        

        const response = await res.json()
        const chartData = await chartResponse.json()
       

        

        setCoin(response);
        setChartArray(chartData.prices);
        setLoading(false);

      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();


  }, [params.id, currency, days])

  if (error)
    return <ErrorComponent message={"Error while fetching Coin..."} />

  return <Container maxW={'container.xl'}>

    {
      loading ? <Loader /> : (
        <>

          <Box w={'full'} borderWidth={1}>

          <Chart arr={chartArray} currencySymbol={currencySymbols[currency]} days={days}/>
          </Box>

        {/* for buttons od btns array */}
        <HStack p={'4'} overflowX={'auto'}>

          {
            btns.map((i)=>(
              <Button key={i} onClick={()=>switchChartStats(i)}>{i}</Button>
            ))
          }

        </HStack>


          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value='inr'>INR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>

          </RadioGroup>

          <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>

            <Text fontSize={'small'} alignSelf={'center'} opacity={'0.7'}>Last Updated On {Date(coin.market_data.last_updated).split("G")[0]}</Text>

            <Image src={coin.image.large} w={'16'} h={'16'} objectFit={'contain'} />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>{currencySymbols[currency]}{coin.market_data.current_price[currency]}</StatNumber>

              <StatHelpText>
                <StatArrow type={coin.market_data.price_change_percentage_24h > 0?"increase":"decrease"}/>
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

          <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'}>
            {`#${coin.market_cap_rank}`}
          </Badge>

          <CustomBar high={`${currencySymbols[currency]} ${coin.market_data.high_24h[currency]}`} 
                      low={`${currencySymbols[currency]} ${coin.market_data.low_24h[currency]}`}/>

                      <Box w={'full'} p={'4'}>
                        <Item title={"Max Supply"} value={coin.market_data.max_supply}/>
                        <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply}/>
                        <Item title={"Market Cap"} value={`${currencySymbols[currency]}${coin.market_data.market_cap[currency]}`}/>
                        <Item title={"All Time low"} value={`${currencySymbols[currency]}${coin.market_data.atl[currency]}`}/>
                        <Item title={"All Time high"} value={`${currencySymbols[currency]}${coin.market_data.ath[currency]}`}/>
                      </Box>

          </VStack>

        </>
      )
    }



  </Container>

};

const Item=({title, value})=>(
  <HStack justifyContent={"space-between"} w={"full"} my={'4'}>
    <Text fontFamily={'Bebas Neue'} letterSpacing={"widest"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
)

const CustomBar = ({high, low})=>(
  <VStack w={'full'}>
    <Progress value={50} colorScheme={'teal'} w={'full'}/>
    <HStack justifyContent={'space-between'} w={'full'}></HStack>
    <Badge children={low} colorScheme='red'/>
    <Text fontSize={'sm'}>24H Range</Text>
    <Badge children={high} colorScheme='green'/>
  </VStack>
)

export default CoinDetails;