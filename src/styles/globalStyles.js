import { createGlobalStyle } from "styled-components"; 
export const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.text}; 
  border-radius: 10px;
}


body{
    background: ${({theme}) => theme.body};
    color:${({theme}) => theme.text};
    transition: all .5s ease-in;
    
}
.footer{
  border-top: 1px solid;
}
.navbar{
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  }
  ul{
    position: absolute;
  }
h1{
  font-size:40px
}
h2{
  32px
}
h3{
  font-size: 26px;
}
.skills{
  overflow-x: hidden;
  overflow-y: hidden;
}
.footer{
  overflow: hidden;
  }
  .vertical-timeline::before {
  background: ${({theme}) => theme.text};
  }
.vertical-timeline-element-title{
color: red;
margin-bottom:5px;
  }
.vertical-timeline-element-content{
  background: ${({theme}) => theme.text};
  opacity:92%;
  color:${({theme}) => theme.body};
  }
.vertical-timeline-element-icon{
  background: ${({theme}) => theme.body};
  z-index:1;
  color:${({theme}) => theme.text};
  box-shadow: 0 0 0 4px  ${({theme}) => theme.text}, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

.vertical-timeline-element-content-arrow{
  border-right: 7px solid ${({theme}) => theme.text};
  }

a{
  color: ${({theme}) => theme.secondary};
}
a:hover{
  color:${({theme}) => theme.text};
}
@media screen and (max-width: 768px){
  h3{
    font-size: 22px;
  }

}
.navbar a{
  
  text-decoration: none;
  color:${({theme}) => theme.text};
  transition: all .5s ease-in;
}
.toggle img{
  height: 60px;

}

.navbar a:hover {
  color:${({theme}) => theme.secondary};
  }
  

.card{
  background: ${({theme}) => theme.primary};
}
.nav-links{
  text-decoration: none;
 
}
`
export const lightTheme = {
    body:'#F7F7F7',
    text:'#121212',
    primary:'#C0C0C0',
    secondary:'#424242'
};
export const darkTheme = {
    body:'#121212',
    text:'#F7F7F7', 
    primary:'#424242',
    secondary:'#C0C0C0'
};