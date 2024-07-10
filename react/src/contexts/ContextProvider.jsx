import { useContext } from "react";
import { createContext, useState } from "react";

const StateContext = createContext({
    curentUser:{},
    userToken:null,
    setUserToken:() => {},
    setCurrentUser:() => {},
    surveys:[],
});
const tempSurveys=[
    {
        'id': 1,
        'imageUrl': "src/assets/java.png",
        'title': 'Lorem ipsum dolor sit amet',
        'slug': 'Lorem-ipsum-dolor-sit-amet',
        'status':true,
        'description':'Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet v',
        'created_at':'2024-07-04 12:30:52',
        'updated_at':'2024-07-04 12:30:52',
        'expired_date':'2024-07-04 12:30:52',
        'questions':[
            {
                'id': 15,
                'type': 'text',
                'quetion':'From which country are you',
                'description':null,
            },
            {
                'id': 16,
                'type': 'textarea',
                'quetion':'From which country are you',
                'description':null,
                'data':[]
            },
            {
                'id': 17,
                'type': 'checkbox',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 18,
                'type': 'radio',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 19,
                'type': 'select',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 20,
                'type': 'text',
                'quetion':'',
                'description':null,
                'data':null
            }
        ]
    },
    {
        'id': 2,
        'imageUrl': "src/assets/java.png",
        'title': 'Lorem ipsum dolor sit amet',
        'slug': 'Lorem-ipsum-dolor-sit-amet',
        'status':true,
        'description':'Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet v',
        'created_at':'2024-07-04 12:30:52',
        'updated_at':'2024-07-04 12:30:52',
        'expired_date':'2024-07-04 12:30:52',
        'questions':[
            {
                'id': 15,
                'type': 'text',
                'quetion':'From which country are you',
                'description':null,
            },
            {
                'id': 16,
                'type': 'textarea',
                'quetion':'From which country are you',
                'description':null,
                'data':[]
            },
            {
                'id': 17,
                'type': 'checkbox',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 18,
                'type': 'radio',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 19,
                'type': 'select',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 20,
                'type': 'text',
                'quetion':'',
                'description':null,
                'data':null
            }
        ]
    },
    {
        'id': 3,
        'imageUrl': "src/assets/java.png",
        'title': 'Lorem ipsum dolor sit amet',
        'slug': 'Lorem-ipsum-dolor-sit-amet',
        'status':true,
        'description':'Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet Lorem-ipsum-dolor-sit-amet v',
        'created_at':'2024-07-04 12:30:52',
        'updated_at':'2024-07-04 12:30:52',
        'expired_date':'2024-07-04 12:30:52',
        'questions':[
            {
                'id': 15,
                'type': 'text',
                'quetion':'From which country are you',
                'description':null,
            },
            {
                'id': 16,
                'type': 'textarea',
                'quetion':'From which country are you',
                'description':null,
                'data':[]
            },
            {
                'id': 17,
                'type': 'checkbox',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 18,
                'type': 'radio',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 19,
                'type': 'select',
                'quetion':'What is your favorate programming language',
                'description':'lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx lorem xxxxx',
                "data":{
                    "options":[
                        {
                            'uuid':'83883838838383833830dgd',
                            'text':"PHP"
                        },
                        {
                            'uuid':'8KKKKK83838838383833830dgd',
                            'text':"REACT"
                        }
                    ]
                }
            },
            {
                'id': 20,
                'type': 'text',
                'quetion':'',
                'description':null,
                'data':null
            }
        ]
    },

]
export const ContextProvider=({children})=>{
    const [curentUser,setCurrentUser ] = useState({
        name:'Last Madanhire',
        email:'lastmadanhire557@gmail.com',
    });
    const [userToken, _setUserToken ] = useState(localStorage.getItem('TOKEN') || '');
    const [surveys,setSurveys] = useState(tempSurveys)
    const setUserToken=(token)=>{
        if (token) {
            localStorage.setItem('TOKEN',token)
        }else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token)
    }

    return (
        <StateContext.Provider value={{
            curentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            surveys
         }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);
