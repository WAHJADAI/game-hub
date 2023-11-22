import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import{BsGlobe}from 'react-icons/bs'

import { HStack, Icon, Text } from '@chakra-ui/react'
import {IconType} from 'react-icons'
import { Platform } from "../entity/Platform"

interface Props{
    platform:Platform[]
}
const PlatformIcon = ({platform}:Props) => {
    const iconMap:{ [key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid
    }
  return (
    <HStack marginY={'10px'}>
    {platform.map((platform) => (
            <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
          ))}
    </HStack>
  )
}

export default PlatformIcon