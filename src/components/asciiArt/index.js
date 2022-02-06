import { useState } from 'react'
import { Image } from './styles'

export const frontend = `
                                 0000 
                                00000 
                             00000000 
                           000000000  
                         0000000000   
                         00000000     
 00000000000000000   000   00000      
00000000000000000   000000   0        
00000000000000        000000   0      
0000000000000  000000  00000  00      
000000000000  00000000  00  0000      
000000000001  000000000   100000      
00000000000  000000000  00000000      
00000000000  00000000   00000000      
0000000000   0        0000000000      
00000000000    00000000000000000      
00000000000000000000000000000000      
                                      
00000000000000000000000000000000      
00000000000000000000000000000000      
 000000000000000000000000000000       
            00000000                  
         00000000000000               `
export const backend = `00000000000000000000000000000000000
00000000000000000000000000000000000
000  000  000  00000000000000000000
000  000  000  00000000000000000000
00000000000000000000000000000000000
00000000000000000000000000000000000
                                   
00000000000000000000000000000000000
00000000000000000000000000000000000
000  000  000  00000000000000000000
000  000  000  00000000000000000000
00000000000000000000000000000000000
00000000000000000000000000000000000
                                   
                000                
                000                
                000                
              0000000              
  0000000000000000000000000000000  
  0000000000000000000000000000000  
              1000001              `
// export const backend = `
// 0000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000
// 00000  000  00000000000000          0000
// 00000  000  00000000000000          0000
// 0000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000

// 0000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000
// 00000  000  00000000000000          0000
// 00000  000  00000000000000          0000
// 0000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000

// 0000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000
// 00000  000  00000000000000          0000
// 00000  000  00000000000000          0000
// 0000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000`

export const AsciiArt = ({ image, align }) => {
  const [picture] = useState({
    frontend,
    backend,
  })

  return <Image align={align}>{picture[image]}</Image>
}
