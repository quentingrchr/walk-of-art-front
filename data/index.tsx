import { Exhibition, Work} from '../src/types'

export const dataForWorks = () => {
    const data: Work[] = [
        {
            "id": "1",
            "title": "",
            "description": "Une description",
            "createdAt": "2022-06-27T23:09:10.693Z",
            "mainFile": {
                id: "",
                fileUrl: "../src/assets/images/landing-1.png"
            },
            "workFiles": [
                {
                    id: "",
                    fileUrl: "../src/assets/images/landing-2.png"
                },
                {
                    id: "",
                    fileUrl: "../src/assets/images/landing-3.png"
                }
            ],
            "exhibitions": [
                {
                    "id": "1",
                },
            ]
        },
        {
            "id": "2",
            "title": "Un titre",
            "description": "Une description",
            "createdAt": "2022-06-27T23:09:10.693Z",
            "mainFile": {
                id: "12",
                fileUrl: "../src/assets/images/landing-8.png"
            },
            "workFiles": [
                {
                    id: "",
                    fileUrl: "../src/assets/images/landingGallery.png"
                },
                {
                    id: "",
                    fileUrl: "../src/assets/images/landing-6.png"
                }
            ],
        },
        {
            "id": "3",
            "title": "A title",
            "description": "Une description",
            "createdAt": "2022-06-27T23:09:10.693Z",
            "mainFile": {
                id: "",
                fileUrl: ""
            },
            "workFiles": [
                {
                    id: "",
                    fileUrl: ""
                },
                {
                    id: "",
                    fileUrl: ""
                }
            ],
            "exhibitions": [
                {
                    "id": "1",
                    
                },
                {
                    "id": "2",
                },
                {
                    "id": "3",
                },
            ]
        },
    ]

    return data
}

export const dataForSingleWork = () => {
    const data: Work = {
        "id": "3",
        "title": "A title",
        "description": "Une description",
        "createdAt": "2022-06-27T23:09:10.693Z",
        "mainFile": {
            id: "",
            fileUrl: ""
        },
        "workFiles": [
            {
                id: "",
                fileUrl: ""
            },
            {
                id: "",
                fileUrl: ""
            }
        ],
        "exhibitions": [
            {
                "id": "1",
                
            },
            {
                "id": "2",
            },
            {
                "id": "3",
            },
        ]
    }

    return data
}

export const dataForExhibitions = () => {
    const data: Exhibition[] = [
        {
            "id": "1",
            "title": "Un ti",
            "description": "Une description",
            "dateStart": "2022-05-02T23:09:10.693Z",
            "dateEnd": "2022-05-02T23:09:10.693Z",
            "reaction": false,
            "comment": false,
            "createdAt": "2022-05-02T23:09:10.693Z",
            "status": [{}],
            "work": {
                "id": "1",
                "title": "titre oeuvre",
                "mainFile": {
                "id": "234",
                "fileUrl": ""
                }
            },
            "board": {
                "id": "34",
                "gallery": {
                "id": "5",
                "name": "Nom de gallery",
                "latitude": 48.85156617494322,
                "longitude": 2.4203096542274656
                },
                "orientation": {}
            },
            "snapshot": [
                {
                "name": "Facebook",
                "url": "https://facebook.com/mon-profil"
                },
                {
                "name": "Site personnel",
                "url": "https://mon-site-personnel.com"
                },
                {
                "name": "Portfolio",
                "url": "https://mon-portoflio.com/"
                },
            ],
            },
            {
            "id": "2",
            "title": "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
            "description": "Une description",
            "dateStart": "2022-06-01T23:09:10.693Z",
            "dateEnd": "2022-08-15T23:09:10.693Z",
            "reaction": false,
            "comment": false,
            "createdAt": "2022-05-02T23:09:10.693Z",
            "status": [{}],
            "work": {
                "id": "1",
                "title": "titre oeuvre",
                "mainFile": {
                "id": "234",
                "fileUrl": ""
                }
            },
            "board": {
                "id": "34",
                "gallery": {
                "id": "5",
                "name": "Nom de gallery",
                "latitude": 48.85156617494322,
                "longitude": 2.4203096542274656
                },
                "orientation": {}
            },
            "snapshot": [
                {
                "name": "Facebook",
                "url": "https://facebook.com/mon-profil"
                },
                {
                "name": "Site personnel",
                "url": "https://mon-site-personnel.com"
                },
                {
                "name": "Portfolio",
                "url": "https://mon-portoflio.com/"
                },
            ],
            },
        
        // terminé
        {
            "id": "3",
            "title": "refused",
            "description": "Une description",
            "dateStart": "2022-05-02T23:09:10.693Z",
            "dateEnd": "2022-05-02T23:09:10.693Z",
            "reaction": false,
            "comment": false,
            "createdAt": "2022-05-02T23:09:10.693Z",
            "status": [{}],
            "work": {
                "id": "1",
                "title": "titre oeuvre",
                "mainFile": {
                "id": "234",
                "fileUrl": ""
                }
            },
            "board": {
            "id": "34",
            "gallery": {
                "id": "5",
                "name": "Nom de gallery",
                "latitude": 48.85156617494322,
                "longitude": 2.4203096542274656
            },
            "orientation": {}
            },
            "snapshot": [
                {
                "name": "Facebook",
                "url": "https://facebook.com/mon-profil"
                },
                {
                "name": "Site personnel",
                "url": "https://mon-site-personnel.com"
                },
                {
                "name": "Portfolio",
                "url": "https://mon-portoflio.com/"
                },
            ],
        },
        {
            "id": "4",
            "title": "mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
            "description": "Une description",
            "dateStart": "2022-10-02T23:09:10.693Z",
            "dateEnd": "2022-10-02T23:09:10.693Z",
            "reaction": false,
            "comment": false,
            "createdAt": "2021-09-02T23:09:10.693Z",
            "status": [{}],
            "work": {
                "id": "1",
                "title": "titre oeuvre",
                "mainFile": {
                "id": "234",
                "fileUrl": ""
                }
            },
            "board": {
                "id": "34",
                "gallery": {
                "id": "5",
                "name": "Nom de gallery",
                "latitude": 48.85156617494322,
                "longitude": 2.4203096542274656
                },
                "orientation": {}
            },
            "snapshot": [
                {
                "name": "Facebook",
                "url": "https://facebook.com/mon-profil"
                },
                {
                "name": "Site personnel",
                "url": "https://mon-site-personnel.com"
                },
                {
                "name": "Portfolio",
                "url": "https://mon-portoflio.com/"
                },
            ],
            },
            {
            "id": "5",
            "title": "un ttr",
            "description": "Une description",
            "dateStart": "2022-07-02T23:09:10.693Z",
            "dateEnd": "2022-07-15T23:09:10.693Z",
            "reaction": false,
            "comment": false,
            "createdAt": "2022-11-02T23:09:10.693Z",
            "status": [{}],
            "work": {
                "id": "1",
                "title": "titre oeuvre",
                "mainFile": {
                "id": "234",
                "fileUrl": ""
                }
            },
            "board": {
                "id": "34",
                "gallery": {
                "id": "5",
                "name": "Nom de gallery",
                "latitude": 48.85156617494322,
                "longitude": 2.4203096542274656
                },
                "orientation": {}
            },
            "snapshot": [
                {
                "name": "Facebook",
                "url": "https://facebook.com/mon-profil"
                },
                {
                "name": "Site personnel",
                "url": "https://mon-site-personnel.com"
                },
                {
                "name": "Portfolio",
                "url": "https://mon-portoflio.com/"
                },
            ],
            },
            {
            "id": "6",
            "title": "1 completer",
            "description": "Une description",
            "dateStart": "2022-06-02T23:09:10.693Z",
            "dateEnd": "2022-07-15T23:09:10.693Z",
            "reaction": false,
            "comment": false,
            "createdAt": "2022-11-02T23:09:10.693Z",
            "status": [{}],
            "work": {
                "id": "1",
                "title": "titre oeuvre",
                "mainFile": {
                "id": "234",
                "fileUrl": ""
                }
            },
            "board": {
                "id": "34",
                "gallery": {
                "id": "5",
                "name": "Nom de gallery",
                "latitude": 48.85156617494322,
                "longitude": 2.4203096542274656
                },
                "orientation": {}
            },
            "snapshot": [
                {
                "name": "Facebook",
                "url": "https://facebook.com/mon-profil"
                },
                {
                "name": "Site personnel",
                "url": "https://mon-site-personnel.com"
                },
                {
                "name": "Portfolio",
                "url": "https://mon-portoflio.com/"
                },
            ],
            },
            {
            "id": "7",
            "title": "2 completer",
            "description": "Une description",
            "dateStart": "2022-06-02T23:09:10.693Z",
            "dateEnd": "2022-07-15T23:09:10.693Z",
            "reaction": false,
            "comment": false,
            "createdAt": "2022-11-02T23:09:10.693Z",
            "status": [{}],
            "work": {
                "id": "1",
                "title": "titre oeuvre",
                "mainFile": {
                "id": "234",
                "fileUrl": ""
                }
            },
            "board": {
                "id": "34",
                "gallery": {
                "id": "5",
                "name": "Nom de gallery",
                "latitude": 48.85156617494322,
                "longitude": 2.4203096542274656
                },
                "orientation": {}
            },
            "snapshot": [
                {
                    "name": "Facebook",
                    "url": "https://facebook.com/mon-profil"
                },
                {
                    "name": "Site personnel",
                    "url": "https://mon-site-personnel.com"
                },
                {
                    "name": "Portfolio",
                    "url": "https://mon-portoflio.com/"
                },
            ],
        },
    ]
}

export const dataForSingleExhibition = () => {
    const data: Exhibition = {
        id: "1",
        title:
        "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue vestibulum diam elit pretium amet risus sed blandit. Vulputate et cras purus lobortis. Adipiscing at ut volutpat proin tempus fermentum faucibus. Senectus massa tortor eget sit non eleifend orci nulla. Id est ut id augue sapien risus ornare eget. Ipsum quis arcu, viverra gravida at sed. Pulvinar ut lobortis mauris vel purus pulvinar lacus volutpat quam. Nullam in purus viverra lorem mauris. Blandit faucibus nulla lobortis enim.",
        dateStart: "2022-07-08T23:09:10.693Z",
        dateEnd: "2022-07-18T23:09:10.693Z",
        reaction: false,
        reactions: [
            {
                count: 32,
                name: 'Smiley',
            },
            {
                count: 5,
                name: "smiley-like",
            },
            {
                count: 12,
                name: "smiley-love",
            },
            {
                count: 53,
                name: "smiley-lol",
            },
            {
                count: 11,
                name: "smiley-wow",
            },
        ],
        comment: false,
        createdAt: "2022-06-27T23:09:10.693Z",
        status: [{}],
        work: {
            id: "2343",
            title: "Titre de l'oeuvre",
            mainFile: {
                id: "",
                fileUrl: "",
            },
        },
        board: {
            id: "48",
            gallery: {
                id: "5",
                name: "Nom de gallery",
                latitude: 48.87391471364133,
                longitude: 2.295116384360164,
            },
            orientation: {},
        },
        snapshot: [
            {
                name: "Facebook",
                url: "https://facebook.com/mon-profil",
            },
            {
                name: "Site personnel",
                url: "https://mon-site-personnel.com",
            },
            {
                name: "Portfolio",
                url: "https://mon-portoflio.com/",
            },
        ],
    }

    return data
}

export const dataForExhibInModeration = () => {
    const data: Exhibition[] = [
        {
          "id": "1",
          "title": "Un titre",
          "description": "Une description",
          "dateStart": "2022-05-02T23:09:10.693Z",
          "dateEnd": "2022-05-02T23:09:10.693Z",
          "reaction": false,
          "comment": false,
          "createdAt": "2022-05-02T23:09:10.693Z",
          "status": [{}],
          "work": {
            "id": "1",
            "title": "titre oeuvre",
            "mainFile": {
              "id": "234",
              "fileUrl": "https://iili.io/5zikPt.jpg"
            }
          },
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          },
          "snapshot": [
            {
              "name": "Facebook",
              "url": "https://facebook.com/mon-profil"
            },
            {
              "name": "Site personnel",
              "url": "https://mon-site-personnel.com"
            },
            {
              "name": "Portfolio",
              "url": "https://mon-portoflio.com/"
            },
          ],
        },
        {
          "id": "2",
          "title": "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
          "description": "Une description",
          "dateStart": "2022-06-01T23:09:10.693Z",
          "dateEnd": "2022-08-15T23:09:10.693Z",
          "reaction": false,
          "comment": false,
          "createdAt": "2022-05-02T23:09:10.693Z",
          "status": [{}],
          "work": {
            "id": "1",
            "title": "titre oeuvre",
            "mainFile": {
              "id": "234",
              "fileUrl": "../src/assets/images/landing-1.png"
            }
          },
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          },
          "snapshot": [
            {
              "name": "Facebook",
              "url": "https://facebook.com/mon-profil"
            },
            {
              "name": "Site personnel",
              "url": "https://mon-site-personnel.com"
            },
            {
              "name": "Portfolio",
              "url": "https://mon-portoflio.com/"
            },
          ],
        },
      
        // terminé
        {
          "id": "3",
          "title": "refused",
          "description": "Une description",
          "dateStart": "2022-05-02T23:09:10.693Z",
          "dateEnd": "2022-05-02T23:09:10.693Z",
          "reaction": false,
          "comment": false,
          "createdAt": "2022-05-02T23:09:10.693Z",
          "status": [{}],
          "work": {
            "id": "1",
            "title": "titre oeuvre",
            "mainFile": {
              "id": "234",
              "fileUrl": "../src/assets/images/landing-1.png"
            }
          },
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          },
          "snapshot": [
            {
              "name": "Facebook",
              "url": "https://facebook.com/mon-profil"
            },
            {
              "name": "Site personnel",
              "url": "https://mon-site-personnel.com"
            },
            {
              "name": "Portfolio",
              "url": "https://mon-portoflio.com/"
            },
          ],
        },
        {
          "id": "4",
          "title": "mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
          "description": "Une description",
          "dateStart": "2022-10-02T23:09:10.693Z",
          "dateEnd": "2022-10-02T23:09:10.693Z",
          "reaction": false,
          "comment": false,
          "createdAt": "2021-09-02T23:09:10.693Z",
          "status": [{}],
          "work": {
            "id": "1",
            "title": "titre oeuvre",
            "mainFile": {
              "id": "234",
              "fileUrl": "../src/assets/images/landing-2.png"
            }
          },
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          },
          "snapshot": [
            {
              "name": "Facebook",
              "url": "https://facebook.com/mon-profil"
            },
            {
              "name": "Site personnel",
              "url": "https://mon-site-personnel.com"
            },
            {
              "name": "Portfolio",
              "url": "https://mon-portoflio.com/"
            },
          ],
        },
        {
          "id": "5",
          "title": "un ttr",
          "description": "Une description",
          "dateStart": "2022-07-02T23:09:10.693Z",
          "dateEnd": "2022-07-15T23:09:10.693Z",
          "reaction": false,
          "comment": false,
          "createdAt": "2022-11-02T23:09:10.693Z",
          "status": [{}],
          "work": {
            "id": "1",
            "title": "titre oeuvre",
            "mainFile": {
              "id": "234",
              "fileUrl": "../src/assets/images/landing-3.png"
            }
          },
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          },
          "snapshot": [
            {
              "name": "Facebook",
              "url": "https://facebook.com/mon-profil"
            },
            {
              "name": "Site personnel",
              "url": "https://mon-site-personnel.com"
            },
            {
              "name": "Portfolio",
              "url": "https://mon-portoflio.com/"
            },
          ],
        },
        {
          "id": "6",
          "title": "1 completer",
          "description": "Une description",
          "dateStart": "2022-06-02T23:09:10.693Z",
          "dateEnd": "2022-07-15T23:09:10.693Z",
          "reaction": false,
          "comment": false,
          "createdAt": "2022-11-02T23:09:10.693Z",
          "status": [{}],
          "work": {
            "id": "1",
            "title": "titre oeuvre",
            "mainFile": {
              "id": "234",
              "fileUrl": "../src/assets/images/landing-4.png"
            }
          },
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          },
          "snapshot": [
            {
              "name": "Facebook",
              "url": "https://facebook.com/mon-profil"
            },
            {
              "name": "Site personnel",
              "url": "https://mon-site-personnel.com"
            },
            {
              "name": "Portfolio",
              "url": "https://mon-portoflio.com/"
            },
          ],
        },
        {
          "id": "7",
          "title": "2 completer",
          "description": "Une description",
          "dateStart": "2022-06-02T23:09:10.693Z",
          "dateEnd": "2022-07-15T23:09:10.693Z",
          "reaction": false,
          "comment": false,
          "createdAt": "2022-11-02T23:09:10.693Z",
          "status": [{}],
          "work": {
            "id": "1",
            "title": "titre oeuvre",
            "mainFile": {
              "id": "234",
              "fileUrl": "../src/assets/images/landing-5.png"
            }
          },
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          },
          "snapshot": [
            {
              "name": "Facebook",
              "url": "https://facebook.com/mon-profil"
            },
            {
              "name": "Site personnel",
              "url": "https://mon-site-personnel.com"
            },
            {
              "name": "Portfolio",
              "url": "https://mon-portoflio.com/"
            },
          ],
        },
    ]

    return data
}

export const dataForSigleExhibInModeration = () => {
    const data: Exhibition = {
        id: "1",
        title: "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue vestibulum diam elit pretium amet risus sed blandit. Vulputate et cras purus lobortis. Adipiscing at ut volutpat proin tempus fermentum faucibus. Senectus massa tortor eget sit non eleifend orci nulla. Id est ut id augue sapien risus ornare eget. Ipsum quis arcu, viverra gravida at sed. Pulvinar ut lobortis mauris vel purus pulvinar lacus volutpat quam. Nullam in purus viverra lorem mauris. Blandit faucibus nulla lobortis enim.",
        dateStart: "2022-07-27T23:09:10.693Z",
        dateEnd: "2022-07-30T23:09:10.693Z", 
        reaction: false,
        reactions: [],
        comment: false,
        createdAt: "2022-06-27T23:09:10.693Z",
        status: [{}],
        work: {
            id: "2343",
            title: "Titre de l'oeuvre",
            mainFile: {
                id: "",
                fileUrl: ""
            }
        },
        board: {
            id: "48",
            gallery: {
                id: "5",
                name: "Nom de gallery",
                latitude: 48.87391471364133, 
                longitude: 2.295116384360164
            },
            orientation: {}
        },
        snapshot: [
            {
                name: "Facebook",
                url: "https://facebook.com/mon-profil"
            },
            {
                name: "Site personnel",
                url: "https://mon-site-personnel.com"
            },
            {
                name: "Portfolio",
                url: "https://mon-portoflio.com/"
            },
        ],
    }

    return data
}