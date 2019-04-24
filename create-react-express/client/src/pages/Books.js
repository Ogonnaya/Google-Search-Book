import React, { Component } from "react";
import SearchCard from "../components/SearchCard";
import SearchResult from "../components/SearchResult";
import BookItemCard from "../components/BookItemCard";
import SaveCard from "../components/SaveResult";
// import API from "../utils/API";


class Books extends Component {
    
    state= { 
        results: {
            "kind": "books#volumes",
            "totalItems": 3334,
            "items": [
             {
              "kind": "books#volume",
              "id": "C8NVhWNU_uIC",
              "etag": "ahg8S0Qvp/Y",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/C8NVhWNU_uIC",
              "volumeInfo": {
               "title": "Coraline",
               "authors": [
                "Neil Gaiman"
               ],
               "publisher": "A&C Black",
               "publishedDate": "2009-11-02",
               "description": "When a young girl ventures through a hidden door, she finds another life with shocking similarities to her own. Coraline has moved to a new house with her parents and she is fascinated by the fact that their 'house' is in fact only half a house! Divided into flats years before, there is a brick wall behind a door where once there was a corridor. One day it is a corridor again and the intrepid Coraline wanders down it. And so a nightmare-ish mystery begins that takes Coraline into the arms of counterfeit parents and a life that isn't quite right. Can Coraline get out? Can she find her real parents? Will life ever be the same again?",
               "industryIdentifiers": [
                {
                 "type": "ISBN_13",
                 "identifier": "9781408808191"
                },
                {
                 "type": "ISBN_10",
                 "identifier": "1408808196"
                }
               ],
               "readingModes": {
                "text": true,
                "image": true
               },
               "pageCount": 192,
               "printType": "BOOK",
               "categories": [
                "Juvenile Fiction"
               ],
               "averageRating": 4.5,
               "ratingsCount": 29,
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": true,
               "contentVersion": "0.12.6.0.preview.3",
               "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
               },
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=C8NVhWNU_uIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=C8NVhWNU_uIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=C8NVhWNU_uIC&printsec=frontcover&dq=coraline&hl=&cd=1&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=C8NVhWNU_uIC&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Coraline.html?hl=&id=C8NVhWNU_uIC"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "PARTIAL",
               "embeddable": true,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED",
               "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Coraline-sample-epub.acsm?id=C8NVhWNU_uIC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
               },
               "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Coraline-sample-pdf.acsm?id=C8NVhWNU_uIC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
               },
               "webReaderLink": "http://play.google.com/books/reader?id=C8NVhWNU_uIC&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "SAMPLE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "One day it is a corridor again and the intrepid Coraline wanders down it. And so a nightmare-ish mystery begins that takes Coraline into the arms of counterfeit parents and a life that isn&#39;t quite right. Can Coraline get out?"
              }
             },
             {
              "kind": "books#volume",
              "id": "3niiEQjRbocC",
              "etag": "oxCRXGNJRU4",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/3niiEQjRbocC",
              "volumeInfo": {
               "title": "Coraline",
               "authors": [
                "Neil Gaiman"
               ],
               "publisher": "A&C Black",
               "publishedDate": "2013",
               "description": "Tenth anniversary edition of Neil Gaiman's modern classic, brilliantly illustrated by Chris Riddell, with a new foreword by the author",
               "industryIdentifiers": [
                {
                 "type": "ISBN_13",
                 "identifier": "9781408841754"
                },
                {
                 "type": "ISBN_10",
                 "identifier": "1408841754"
                }
               ],
               "readingModes": {
                "text": false,
                "image": true
               },
               "pageCount": 191,
               "printType": "BOOK",
               "categories": [
                "Juvenile Fiction"
               ],
               "averageRating": 4.5,
               "ratingsCount": 11,
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=3niiEQjRbocC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=3niiEQjRbocC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=3niiEQjRbocC&printsec=frontcover&dq=coraline&hl=&cd=2&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=3niiEQjRbocC&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Coraline.html?hl=&id=3niiEQjRbocC"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "PARTIAL",
               "embeddable": true,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED",
               "epub": {
                "isAvailable": false
               },
               "pdf": {
                "isAvailable": false
               },
               "webReaderLink": "http://play.google.com/books/reader?id=3niiEQjRbocC&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "SAMPLE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "There is something strange about Coraline&#39;s new home."
              }
             },
             {
              "kind": "books#volume",
              "id": "nqTCv_9VRXsC",
              "etag": "WCQHjSDKU3g",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/nqTCv_9VRXsC",
              "volumeInfo": {
               "title": "Coraline - Film Tie-In Edition",
               "authors": [
                "Neil Gaiman",
                "Dave McKean"
               ],
               "publisher": "A&C Black",
               "publishedDate": "2009-04-06",
               "description": "When a young girl ventures through a hidden door, she finds another life with shocking similarities to her own. This brilliantly spooky and chilling novel has been adapted into a feature film, with the voices of Teri Hatcher, Jennifer Saunders and Dakota Fanning and directed by Henry Selick ('The Nightmare before Christmas').",
               "industryIdentifiers": [
                {
                 "type": "ISBN_13",
                 "identifier": "9780747597308"
                },
                {
                 "type": "ISBN_10",
                 "identifier": "0747597308"
                }
               ],
               "readingModes": {
                "text": true,
                "image": true
               },
               "pageCount": 192,
               "printType": "BOOK",
               "categories": [
                "Education"
               ],
               "averageRating": 4.0,
               "ratingsCount": 6,
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=nqTCv_9VRXsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=nqTCv_9VRXsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=nqTCv_9VRXsC&printsec=frontcover&dq=coraline&hl=&cd=3&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=nqTCv_9VRXsC&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Coraline_Film_Tie_In_Edition.html?hl=&id=nqTCv_9VRXsC"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "PARTIAL",
               "embeddable": true,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED",
               "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Coraline_Film_Tie_In_Edition-sample-epub.acsm?id=nqTCv_9VRXsC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
               },
               "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Coraline_Film_Tie_In_Edition-sample-pdf.acsm?id=nqTCv_9VRXsC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
               },
               "webReaderLink": "http://play.google.com/books/reader?id=nqTCv_9VRXsC&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "SAMPLE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "When a young girl ventures through a hidden door, she finds another life with shocking similarities to her own."
              }
             },
             {
              "kind": "books#volume",
              "id": "4shbzHSjChAC",
              "etag": "Ct30PavitxU",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/4shbzHSjChAC",
              "volumeInfo": {
               "title": "Coraline Graphic Novel",
               "authors": [
                "Neil Gaiman"
               ],
               "publisher": "Harper Collins",
               "publishedDate": "2008-06-24",
               "description": "When Coraline steps through a door in her family's new house, she finds another house, strangely similar to her own (only better). At first, things seem marvelous. The food is better than at home, and the toy box is filled with fluttering wind-up angels and dinosaur skulls that crawl and rattle their teeth. But there's another mother there and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and all the tools she can find if she is to save herself and return to her ordinary life. This beloved tale has now become a visual feast. Acclaimed artist P. Craig Russell brings Neil Gaiman's enchanting nationally bestselling children's book Coraline to new life in this gorgeously illustrated graphic novel adaptation.",
               "industryIdentifiers": [
                {
                 "type": "ISBN_13",
                 "identifier": "9780060825430"
                },
                {
                 "type": "ISBN_10",
                 "identifier": "006082543X"
                }
               ],
               "readingModes": {
                "text": false,
                "image": false
               },
               "pageCount": 192,
               "printType": "BOOK",
               "categories": [
                "Juvenile Fiction"
               ],
               "averageRating": 4.0,
               "ratingsCount": 64,
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "1.1.2.0.preview.0",
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=4shbzHSjChAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=4shbzHSjChAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=4shbzHSjChAC&printsec=frontcover&dq=coraline&hl=&cd=4&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=4shbzHSjChAC&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Coraline_Graphic_Novel.html?hl=&id=4shbzHSjChAC"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "PARTIAL",
               "embeddable": true,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
               "epub": {
                "isAvailable": false
               },
               "pdf": {
                "isAvailable": false
               },
               "webReaderLink": "http://play.google.com/books/reader?id=4shbzHSjChAC&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "SAMPLE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "This beloved tale has now become a visual feast. Acclaimed artist P. Craig Russell brings Neil Gaiman&#39;s enchanting nationally bestselling children&#39;s book Coraline to new life in this gorgeously illustrated graphic novel adaptation."
              }
             },
             {
              "kind": "books#volume",
              "id": "OltdPgAACAAJ",
              "etag": "3Cs38G2CByI",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/OltdPgAACAAJ",
              "volumeInfo": {
               "title": "Coraline & Other Stories",
               "authors": [
                "Neil Gaiman"
               ],
               "publisher": "Bloomsbury UK",
               "publishedDate": "2009",
               "description": "When Coraline explores her new home, she steps through a door and into another house just like her own - except that things aren't quite as they seem. There's another mother and another father in this house and they want Coraline to stay with them and be their little girl. Coraline must use all of her wits and every ounce of courage in order to save herself and return home … but will she escape and will life ever be the same again? Elsewhere in this collection, a sinister jack-in-the-box haunts the lives of the children who ever owned it, a stray cat does nightly battle to protect his adopted family, and a boy raised in a graveyard confronts the much more troubled world of the living. From the scary to the whimsical, the fantastical to the humorous, Coraline & Other Storiesis a journey into the dark, magical world of Neil Gaiman.",
               "industryIdentifiers": [
                {
                 "type": "ISBN_10",
                 "identifier": "1408803453"
                },
                {
                 "type": "ISBN_13",
                 "identifier": "9781408803455"
                }
               ],
               "readingModes": {
                "text": false,
                "image": false
               },
               "pageCount": 277,
               "printType": "BOOK",
               "categories": [
                "Young adult fiction, English"
               ],
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=OltdPgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=OltdPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=OltdPgAACAAJ&dq=coraline&hl=&cd=5&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=OltdPgAACAAJ&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Coraline_Other_Stories.html?hl=&id=OltdPgAACAAJ"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "NO_PAGES",
               "embeddable": false,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED",
               "epub": {
                "isAvailable": false
               },
               "pdf": {
                "isAvailable": false
               },
               "webReaderLink": "http://play.google.com/books/reader?id=OltdPgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "NONE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "Elsewhere in this collection, a sinister jack-in-the-box haunts the lives of the children who ever owned it, a stray cat does nightly battle to protect his adopted family, and a boy raised in a graveyard confronts the much more troubled ..."
              }
             },
             {
              "kind": "books#volume",
              "id": "3tvInwtsoCcC",
              "etag": "ZlopIhwHpkQ",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/3tvInwtsoCcC",
              "volumeInfo": {
               "title": "Coraline",
               "authors": [
                "Neil Gaiman",
                "P. Craig Russell"
               ],
               "publisher": "Bloomsbury Publishing",
               "publishedDate": "2008",
               "description": "A brilliant graphic novel adaptation of Neil Gaiman's critically acclaimed novel for young people. When Coraline moves to a new home, she is fascinated by the fact that the 'house' is really only half a house - it was divided into flats years before. And it soon becomes clear to Coraline that the other flat is not quite as cosy and safe as her own.",
               "industryIdentifiers": [
                {
                 "type": "ISBN_13",
                 "identifier": "9780747594062"
                },
                {
                 "type": "ISBN_10",
                 "identifier": "0747594066"
                }
               ],
               "readingModes": {
                "text": false,
                "image": false
               },
               "pageCount": 186,
               "printType": "BOOK",
               "categories": [
                "Juvenile Fiction"
               ],
               "averageRating": 4.0,
               "ratingsCount": 60,
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=3tvInwtsoCcC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=3tvInwtsoCcC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=3tvInwtsoCcC&dq=coraline&hl=&cd=6&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=3tvInwtsoCcC&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Coraline.html?hl=&id=3tvInwtsoCcC"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "NO_PAGES",
               "embeddable": false,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED",
               "epub": {
                "isAvailable": false
               },
               "pdf": {
                "isAvailable": true
               },
               "webReaderLink": "http://play.google.com/books/reader?id=3tvInwtsoCcC&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "NONE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "When Coraline moves to a new home, she is fascinated by the fact that the &#39;house&#39; is really only half a house - it was divided into flats years before."
              }
             },
             {
              "kind": "books#volume",
              "id": "zyGAKHsGzvwC",
              "etag": "LA/Ugc2yNMk",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/zyGAKHsGzvwC",
              "volumeInfo": {
               "title": "Coraline",
               "subtitle": "A Visual Companion",
               "authors": [
                "Stephen Jones"
               ],
               "publisher": "Harper Collins",
               "publishedDate": "2009-01-06",
               "description": "Presents the plot, characters, and art of the motion picture, and discusses the creative and technical production of the film.",
               "industryIdentifiers": [
                {
                 "type": "ISBN_13",
                 "identifier": "9780061704222"
                },
                {
                 "type": "ISBN_10",
                 "identifier": "0061704229"
                }
               ],
               "readingModes": {
                "text": false,
                "image": false
               },
               "pageCount": 229,
               "printType": "BOOK",
               "categories": [
                "Performing Arts"
               ],
               "averageRating": 4.5,
               "ratingsCount": 4,
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=zyGAKHsGzvwC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=zyGAKHsGzvwC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=zyGAKHsGzvwC&dq=coraline&hl=&cd=7&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=zyGAKHsGzvwC&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Coraline.html?hl=&id=zyGAKHsGzvwC"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "NO_PAGES",
               "embeddable": false,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED",
               "epub": {
                "isAvailable": false
               },
               "pdf": {
                "isAvailable": false
               },
               "webReaderLink": "http://play.google.com/books/reader?id=zyGAKHsGzvwC&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "NONE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "Presents the plot, characters, and art of the motion picture, and discusses the creative and technical production of the film."
              }
             },
             {
              "kind": "books#volume",
              "id": "ieLFAQAAQBAJ",
              "etag": "BlJ5DIg3AXk",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/ieLFAQAAQBAJ",
              "volumeInfo": {
               "title": "LitStudy: A Complete Workbook for Coraline",
               "authors": [
                "Thomas Tobar"
               ],
               "publisher": "Lulu.com",
               "industryIdentifiers": [
                {
                 "type": "ISBN_13",
                 "identifier": "9780557531745"
                },
                {
                 "type": "ISBN_10",
                 "identifier": "0557531748"
                }
               ],
               "readingModes": {
                "text": false,
                "image": true
               },
               "printType": "BOOK",
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=ieLFAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=ieLFAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=ieLFAQAAQBAJ&printsec=frontcover&dq=coraline&hl=&cd=8&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=ieLFAQAAQBAJ&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/LitStudy_A_Complete_Workbook_for_Coralin.html?hl=&id=ieLFAQAAQBAJ"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "PARTIAL",
               "embeddable": true,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED",
               "epub": {
                "isAvailable": false
               },
               "pdf": {
                "isAvailable": false
               },
               "webReaderLink": "http://play.google.com/books/reader?id=ieLFAQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "SAMPLE",
               "quoteSharingAllowed": false
              }
             },
             {
              "kind": "books#volume",
              "id": "it5B-Y2EQhoC",
              "etag": "osYz/Iuq8pE",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/it5B-Y2EQhoC",
              "volumeInfo": {
               "title": "Coraline 10th Anniversary Edition",
               "authors": [
                "Neil Gaiman"
               ],
               "publisher": "Harper Collins",
               "publishedDate": "2012-04-24",
               "description": "\"Coraline discovered the door a little while after they moved into the house. . . .\" When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life. Celebrating ten years of Neil Gaiman's first modern classic for young readers, this edition is enriched with a brand-new foreword from the author, a reader's guide, and more.",
               "industryIdentifiers": [
                {
                 "type": "ISBN_13",
                 "identifier": "9780062205728"
                },
                {
                 "type": "ISBN_10",
                 "identifier": "0062205722"
                }
               ],
               "readingModes": {
                "text": true,
                "image": false
               },
               "pageCount": 208,
               "printType": "BOOK",
               "categories": [
                "Juvenile Fiction"
               ],
               "averageRating": 4.0,
               "ratingsCount": 27,
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": true,
               "contentVersion": "1.4.4.0.preview.2",
               "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
               },
               "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=it5B-Y2EQhoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=it5B-Y2EQhoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=it5B-Y2EQhoC&printsec=frontcover&dq=coraline&hl=&cd=9&source=gbs_api",
               "infoLink": "https://play.google.com/store/books/details?id=it5B-Y2EQhoC&source=gbs_api",
               "canonicalVolumeLink": "https://market.android.com/details?id=book-it5B-Y2EQhoC"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "FOR_SALE",
               "isEbook": true,
               "listPrice": {
                "amount": 5.99,
                "currencyCode": "USD"
               },
               "retailPrice": {
                "amount": 5.99,
                "currencyCode": "USD"
               },
               "buyLink": "https://play.google.com/store/books/details?id=it5B-Y2EQhoC&rdid=book-it5B-Y2EQhoC&rdot=1&source=gbs_api",
               "offers": [
                {
                 "finskyOfferType": 1,
                 "listPrice": {
                  "amountInMicros": 5990000.0,
                  "currencyCode": "USD"
                 },
                 "retailPrice": {
                  "amountInMicros": 5990000.0,
                  "currencyCode": "USD"
                 },
                 "giftable": true
                }
               ]
              },
              "accessInfo": {
               "country": "US",
               "viewability": "PARTIAL",
               "embeddable": true,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
               "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Coraline_10th_Anniversary_Edition-sample-epub.acsm?id=it5B-Y2EQhoC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
               },
               "pdf": {
                "isAvailable": false
               },
               "webReaderLink": "http://play.google.com/books/reader?id=it5B-Y2EQhoC&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "SAMPLE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "This edition of New York Times bestselling and Newbery Medal-winning author Neil Gaiman’s modern classic, Coraline—also an Academy Award-nominated film—is enriched with a foreword from the author, a reader&#39;s guide, and more."
              }
             },
             {
              "kind": "books#volume",
              "id": "z8HbugEACAAJ",
              "etag": "SZpUf80pUp0",
              "selfLink": "https://www.googleapis.com/books/v1/volumes/z8HbugEACAAJ",
              "volumeInfo": {
               "title": "Coraline",
               "authors": [
                "Bruno Coulais"
               ],
               "publishedDate": "2009",
               "description": "A dark and creepy film about family relationships directed by Henry Selick of Nightmare Before Christmas and James and the Giant Peach fame, Coraline is based on the haunting book Coraline by Neil Gaiman. The first stop-motion feature shot in stereoscopic 3-D, Coraline features big-headed, stick-bodied animated characters with huge eyes and demonic grins set against menacing backgrounds and an undercurrent of spooky music. Coraline is a teenager who has just moved to an old house in the middle of nowhere with her writer parents and she is bored, bored, bored. Her only companions are an annoyingly talkative boy Wybie (short for Why Born), some eccentric neighbors from the theater and circus, and a strange, button-eyed doll with a marked resemblance to Coraline which Wybie found in an old trunk of his grandmother's. When Coraline finds an old door hidden behind an armoire and papered over with wallpaper, she convinces her mother to unlock it, only to find a wall of bricks. When Coraline revisits the door later that night, the bricks magically disappear and she discovers a strange pathway to another world where everything is just what she wishes for. In stark contrast to the real world where Coraline's parents just don't have time for her, her \"Other Mother\" and \"Other Father\" in this alternate world are the perfect loving, attentive parents who anticipate her every need and desire. Initially comforted and quite happy in this new world, suspicion that things may not be quite as they seem grows inside Coraline and her disquiet is furthered by the mute \"Other Wybie\" and a strange-talking cat that seems to move between both worlds. Eventually, Coraline discovers some dark secrets about her \"other parents\" and the seemingly perfect \"other world,\" but it may be too late for her to escape back to the real world. Teri Hatcher is especially effective in her dual (voice) role as Mom and \"Other Mom\" and Dakota Fanning also gives a great performance as Coraline. Coraline is a disturbing, intriguing film that both captivates and frightens. (Ages 11 and older).",
               "industryIdentifiers": [
                {
                 "type": "OTHER",
                 "identifier": "OCLC:460353194"
                }
               ],
               "readingModes": {
                "text": false,
                "image": false
               },
               "printType": "BOOK",
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=z8HbugEACAAJ&dq=coraline&hl=&cd=10&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=z8HbugEACAAJ&dq=coraline&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Coraline.html?hl=&id=z8HbugEACAAJ"
              },
              "saleInfo": {
               "country": "US",
               "saleability": "NOT_FOR_SALE",
               "isEbook": false
              },
              "accessInfo": {
               "country": "US",
               "viewability": "NO_PAGES",
               "embeddable": false,
               "publicDomain": false,
               "textToSpeechPermission": "ALLOWED",
               "epub": {
                "isAvailable": false
               },
               "pdf": {
                "isAvailable": false
               },
               "webReaderLink": "http://play.google.com/books/reader?id=z8HbugEACAAJ&hl=&printsec=frontcover&source=gbs_api",
               "accessViewStatus": "NONE",
               "quoteSharingAllowed": false
              },
              "searchInfo": {
               "textSnippet": "A dark and creepy film about family relationships directed by Henry Selick of Nightmare Before Christmas and James and the Giant Peach fame, Coraline is based on the haunting book Coraline by Neil Gaiman."
              }
             }
            ]
           },
        savedBooks: {
            "kind": "books#volumes",
            "totalItems": 2511,
            "items": [
            {
            "kind": "books#volume",
            "id": "tcSMCwAAQBAJ",
            "etag": "BpxCojgxU94",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/tcSMCwAAQBAJ",
            "volumeInfo": {
            "title": "Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)",
            "authors": [
            "J.K. Rowling",
            "John Tiffany",
            "Jack Thorne"
            ],
            "publisher": "Pottermore Publishing",
            "publishedDate": "2016-07-31",
            "description": "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.",
            "industryIdentifiers": [
            {
            "type": "ISBN_13",
            "identifier": "9781781107041"
            },
            {
            "type": "ISBN_10",
            "identifier": "1781107041"
            }
            ],
            "readingModes": {
            "text": true,
            "image": true
            },
            "pageCount": 320,
            "printType": "BOOK",
            "categories": [
            "Drama"
            ],
            "averageRating": 3.5,
            "ratingsCount": 203,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.2.2.0.preview.3",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=tcSMCwAAQBAJ&printsec=frontcover&dq=harrypotter&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=tcSMCwAAQBAJ&dq=harrypotter&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Cursed_Child_Parts.html?hl=&id=tcSMCwAAQBAJ"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_the_Cursed_Child_Parts-sample-epub.acsm?id=tcSMCwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_the_Cursed_Child_Parts-sample-pdf.acsm?id=tcSMCwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=tcSMCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be ..."
            }
            },
            {
            "kind": "books#volume",
            "id": "DU0LDAAAQBAJ",
            "etag": "d5lGolvBAVw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/DU0LDAAAQBAJ",
            "volumeInfo": {
            "title": "Fantastic Beasts and Where to Find Them: The Original Screenplay",
            "authors": [
            "J.K. Rowling"
            ],
            "publisher": "Pottermore Publishing",
            "publishedDate": "2016-11-18",
            "description": "When Magizoologist Newt Scamander arrives in New York, he intends his stay to be just a brief stopover. However, when his magical case is misplaced and some of Newt's fantastic beasts escape, it spells trouble for everyone... Inspired by the original Hogwart’s textbook by Newt Scamander, Fantastic Beasts and Where to Find Them: The Original screenplay marks the screenwriting debut of J.K. Rowling, author of the beloved and internationally bestselling Harry Potter books. A feat of imagination and featuring a cast of remarkable characters and magical creatures, this is epic adventure-packed storytelling at its very best. Whether an existing fan or new to the wizarding world, this is a perfect addition for any film lover or reader’s bookshelf. The film Fantastic Beasts and Where to Find Them will have its theatrical release on 18th November 2016.",
            "industryIdentifiers": [
            {
            "type": "ISBN_13",
            "identifier": "9781781109601"
            },
            {
            "type": "ISBN_10",
            "identifier": "1781109605"
            }
            ],
            "readingModes": {
            "text": true,
            "image": true
            },
            "pageCount": 304,
            "printType": "BOOK",
            "categories": [
            "Performing Arts"
            ],
            "averageRating": 5,
            "ratingsCount": 3,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.6.6.0.preview.3",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=DU0LDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=DU0LDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=DU0LDAAAQBAJ&printsec=frontcover&dq=harrypotter&hl=&cd=2&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=DU0LDAAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-DU0LDAAAQBAJ"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
            "amount": 8.99,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amount": 8.99,
            "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=DU0LDAAAQBAJ&rdid=book-DU0LDAAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
            {
            "finskyOfferType": 1,
            "listPrice": {
            "amountInMicros": 8990000,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amountInMicros": 8990000,
            "currencyCode": "USD"
            },
            "giftable": true
            }
            ]
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Fantastic_Beasts_and_Where_to_Find_Them-sample-epub.acsm?id=DU0LDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Fantastic_Beasts_and_Where_to_Find_Them-sample-pdf.acsm?id=DU0LDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=DU0LDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "A feat of imagination and featuring a cast of remarkable characters and magical creatures, this is epic adventure-packed storytelling at its very best."
            }
            },
            {
            "kind": "books#volume",
            "id": "ilc0DwAAQBAJ",
            "etag": "XVdGXuHYQe8",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ilc0DwAAQBAJ",
            "volumeInfo": {
            "title": "Harry Potter - A Journey Through A History of Magic",
            "authors": [
            "British Library"
            ],
            "publisher": "Pottermore Publishing",
            "publishedDate": "2017-10-20",
            "description": "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
            "industryIdentifiers": [
            {
            "type": "ISBN_13",
            "identifier": "9781781109502"
            },
            {
            "type": "ISBN_10",
            "identifier": "1781109508"
            }
            ],
            "readingModes": {
            "text": true,
            "image": true
            },
            "pageCount": 144,
            "printType": "BOOK",
            "categories": [
            "Juvenile Nonfiction"
            ],
            "averageRating": 4,
            "ratingsCount": 5,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.9.6.0.preview.3",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=ilc0DwAAQBAJ&printsec=frontcover&dq=harrypotter&hl=&cd=3&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=ilc0DwAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-ilc0DwAAQBAJ"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
            "amount": 8.99,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amount": 8.99,
            "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=ilc0DwAAQBAJ&rdid=book-ilc0DwAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
            {
            "finskyOfferType": 1,
            "listPrice": {
            "amountInMicros": 8990000,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amountInMicros": 8990000,
            "currencyCode": "USD"
            },
            "giftable": true
            }
            ]
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_A_Journey_Through_A_History-sample-epub.acsm?id=ilc0DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_A_Journey_Through_A_History-sample-pdf.acsm?id=ilc0DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=ilc0DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories."
            }
            },
            {
            "kind": "books#volume",
            "id": "Aaug_RnI-xQC",
            "etag": "F0gjFZl+RQY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/Aaug_RnI-xQC",
            "volumeInfo": {
            "title": "The Irresistible Rise of Harry Potter",
            "authors": [
            "Andrew Blake"
            ],
            "publisher": "Verso",
            "publishedDate": "2002",
            "description": "Blake's examination of the Potter phenomenon raises serious questions about the condition of the publishing industry, filmmaking, and the ways in which the Potter consumer campaign has changed ideas about literature and reading.",
            "industryIdentifiers": [
            {
            "type": "ISBN_10",
            "identifier": "1859846661"
            },
            {
            "type": "ISBN_13",
            "identifier": "9781859846667"
            }
            ],
            "readingModes": {
            "text": false,
            "image": true
            },
            "pageCount": 118,
            "printType": "BOOK",
            "categories": [
            "Literary Criticism"
            ],
            "averageRating": 4,
            "ratingsCount": 7,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "1.1.2.0.preview.1",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=Aaug_RnI-xQC&printsec=frontcover&dq=harrypotter&hl=&cd=4&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=Aaug_RnI-xQC&dq=harrypotter&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/The_Irresistible_Rise_of_Harry_Potter.html?hl=&id=Aaug_RnI-xQC"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": false
            },
            "pdf": {
            "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=Aaug_RnI-xQC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "Blake&#39;s examination of the Potter phenomenon raises serious questions about the condition of the publishing industry, filmmaking, and the ways in which the Potter consumer campaign has changed ideas about literature and reading."
            }
            },
            {
            "kind": "books#volume",
            "id": "5iTebBW-w7QC",
            "etag": "eN+sv+7By14",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/5iTebBW-w7QC",
            "volumeInfo": {
            "title": "Harry Potter and the Chamber of Secrets",
            "authors": [
            "J.K. Rowling"
            ],
            "publisher": "Pottermore Publishing",
            "publishedDate": "2015-12-08",
            "description": "\"'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.'\" Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
            "industryIdentifiers": [
            {
            "type": "ISBN_13",
            "identifier": "9781781100509"
            },
            {
            "type": "ISBN_10",
            "identifier": "1781100500"
            }
            ],
            "readingModes": {
            "text": true,
            "image": true
            },
            "pageCount": 341,
            "printType": "BOOK",
            "categories": [
            "Juvenile Fiction"
            ],
            "averageRating": 4.5,
            "ratingsCount": 2377,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "2.17.14.0.preview.3",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=5iTebBW-w7QC&printsec=frontcover&dq=harrypotter&hl=&cd=5&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=5iTebBW-w7QC&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-5iTebBW-w7QC"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
            "amount": 8.99,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amount": 8.99,
            "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=5iTebBW-w7QC&rdid=book-5iTebBW-w7QC&rdot=1&source=gbs_api",
            "offers": [
            {
            "finskyOfferType": 1,
            "listPrice": {
            "amountInMicros": 8990000,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amountInMicros": 8990000,
            "currencyCode": "USD"
            },
            "giftable": true
            }
            ]
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_the_Chamber_of_Secrets-sample-epub.acsm?id=5iTebBW-w7QC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_the_Chamber_of_Secrets-sample-pdf.acsm?id=5iTebBW-w7QC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=5iTebBW-w7QC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "&quot;&#39;There is a plot, Harry Potter."
            }
            },
            {
            "kind": "books#volume",
            "id": "szF_pLGmJTQC",
            "etag": "1Os2EFwP0y8",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/szF_pLGmJTQC",
            "volumeInfo": {
            "title": "Baptizing Harry Potter",
            "subtitle": "A Christian Reading of J.K. Rowling",
            "authors": [
            "Luke Bell"
            ],
            "publisher": "Paulist Press",
            "publishedDate": "2010",
            "description": "The scope and tragedy of the thing : the structure of the series -- More things in heaven and earth : going beyond the normal -- As if a man were author of himself : good against evil -- Be absolute for death : life and death -- Power is made perfect in weakness : power and weakness -- To lay down one's life for one's friends : love and sacrifice -- It is essential that you understand this : freedom and determination -- A pretty boring life : the hidden and the ostentatious -- Telling it like it is : the struggle for truth -- They will see God : purity of heart and purity of blood.",
            "industryIdentifiers": [
            {
            "type": "ISBN_13",
            "identifier": "9781616431150"
            },
            {
            "type": "ISBN_10",
            "identifier": "1616431156"
            }
            ],
            "readingModes": {
            "text": false,
            "image": true
            },
            "pageCount": 224,
            "printType": "BOOK",
            "categories": [
            "Children"
            ],
            "averageRating": 3,
            "ratingsCount": 3,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "0.1.0.0.preview.1",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=szF_pLGmJTQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=szF_pLGmJTQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=szF_pLGmJTQC&printsec=frontcover&dq=harrypotter&hl=&cd=6&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=szF_pLGmJTQC&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-szF_pLGmJTQC"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
            "amount": 12.95,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amount": 9.99,
            "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=szF_pLGmJTQC&rdid=book-szF_pLGmJTQC&rdot=1&source=gbs_api",
            "offers": [
            {
            "finskyOfferType": 1,
            "listPrice": {
            "amountInMicros": 12950000,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amountInMicros": 9990000,
            "currencyCode": "USD"
            },
            "giftable": true
            }
            ]
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": false
            },
            "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Baptizing_Harry_Potter-sample-pdf.acsm?id=szF_pLGmJTQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=szF_pLGmJTQC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "The scope and tragedy of the thing : the structure of the series -- More things in heaven and earth : going beyond the normal -- As if a man were author of himself : good against evil -- Be absolute for death : life and death -- Power is ..."
            }
            },
            {
            "kind": "books#volume",
            "id": "iO5pApw2JycC",
            "etag": "gFAimaKffgc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/iO5pApw2JycC",
            "volumeInfo": {
            "title": "The Ivory Tower and Harry Potter",
            "subtitle": "Perspectives on a Literary Phenomenon",
            "authors": [
            "Lana A. Whited"
            ],
            "publisher": "University of Missouri Press",
            "publishedDate": "2004",
            "description": "Now available in paper, The Ivory Tower and Harry Potter is the first book-length analysis of J. K. Rowling's work from a broad range of perspectives within literature, folklore, psychology, sociology, and popular culture. A significant portion of the book explores the Harry Potter series' literary ancestors, including magic and fantasy works by Ursula K. LeGuin, Monica Furlong, Jill Murphy, and others, as well as previous works about the British boarding school experience. Other chapters explore the moral and ethical dimensions of Harry's world, including objections to the series raised within some religious circles. In her new epilogue, Lana A. Whited brings this volume up to date by covering Rowling's latest book, Harry Potter and the Order of the Phoenix.",
            "industryIdentifiers": [
            {
            "type": "ISBN_10",
            "identifier": "0826215491"
            },
            {
            "type": "ISBN_13",
            "identifier": "9780826215499"
            }
            ],
            "readingModes": {
            "text": true,
            "image": true
            },
            "pageCount": 418,
            "printType": "BOOK",
            "categories": [
            "Literary Criticism"
            ],
            "averageRating": 4.5,
            "ratingsCount": 13,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "2.0.4.0.preview.3",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=iO5pApw2JycC&printsec=frontcover&dq=harrypotter&hl=&cd=7&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=iO5pApw2JycC&dq=harrypotter&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/The_Ivory_Tower_and_Harry_Potter.html?hl=&id=iO5pApw2JycC"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/The_Ivory_Tower_and_Harry_Potter-sample-epub.acsm?id=iO5pApw2JycC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
            "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=iO5pApw2JycC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "In her new epilogue, Lana A. Whited brings this volume up to date by covering Rowling&#39;s latest book, Harry Potter and the Order of the Phoenix."
            }
            },
            {
            "kind": "books#volume",
            "id": "39iYWTb6n6cC",
            "etag": "hQVdGx+zPCs",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/39iYWTb6n6cC",
            "volumeInfo": {
            "title": "Harry Potter and the Philosopher's Stone",
            "authors": [
            "J.K. Rowling"
            ],
            "publisher": "Pottermore Publishing",
            "publishedDate": "2015-12-08",
            "description": "\"Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
            "industryIdentifiers": [
            {
            "type": "ISBN_13",
            "identifier": "9781781100219"
            },
            {
            "type": "ISBN_10",
            "identifier": "1781100217"
            }
            ],
            "readingModes": {
            "text": true,
            "image": false
            },
            "pageCount": 353,
            "printType": "BOOK",
            "categories": [
            "Juvenile Fiction"
            ],
            "averageRating": 4.5,
            "ratingsCount": 112,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.20.19.0.preview.2",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=39iYWTb6n6cC&dq=harrypotter&hl=&cd=8&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=39iYWTb6n6cC&dq=harrypotter&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Philosopher_s_Stone.html?hl=&id=39iYWTb6n6cC"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
            },
            "accessInfo": {
            "country": "US",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": true
            },
            "pdf": {
            "isAvailable": true
            },
            "webReaderLink": "http://play.google.com/books/reader?id=39iYWTb6n6cC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "&quot;Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter &#39;H&#39;.&quot; Harry Potter has never even heard of Hogwarts when the letters start ..."
            }
            },
            {
            "kind": "books#volume",
            "id": "DKcWE3WXoj8C",
            "etag": "4Z84bVKXesc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/DKcWE3WXoj8C",
            "volumeInfo": {
            "title": "Harry Potter and International Relations",
            "authors": [
            "Daniel H. Nexon",
            "Iver B. Neumann"
            ],
            "publisher": "Rowman & Littlefield",
            "publishedDate": "2006",
            "description": "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry's world contain aspects of our own. It also includes chapters on the political economy of the franchise, and on the problems of studying popular culture.",
            "industryIdentifiers": [
            {
            "type": "ISBN_10",
            "identifier": "0742539598"
            },
            {
            "type": "ISBN_13",
            "identifier": "9780742539594"
            }
            ],
            "readingModes": {
            "text": false,
            "image": true
            },
            "pageCount": 245,
            "printType": "BOOK",
            "categories": [
            "Literary Criticism"
            ],
            "averageRating": 4,
            "ratingsCount": 7,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=DKcWE3WXoj8C&printsec=frontcover&dq=harrypotter&hl=&cd=9&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=DKcWE3WXoj8C&dq=harrypotter&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_International_Relations.html?hl=&id=DKcWE3WXoj8C"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": false
            },
            "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_International_Relations-sample-pdf.acsm?id=DKcWE3WXoj8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=DKcWE3WXoj8C&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry&#39;s world contain aspects of our own."
            }
            },
            {
            "kind": "books#volume",
            "id": "o-QCOFDHmPEC",
            "etag": "8GjB8FRAM4I",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/o-QCOFDHmPEC",
            "volumeInfo": {
            "title": "Heroism in the Harry Potter Series",
            "authors": [
            "Dr Katrin Berndt",
            "Dr Lena Steveker"
            ],
            "publisher": "Ashgate Publishing, Ltd.",
            "publishedDate": "2013-05-28",
            "description": "Taking up the various conceptions of heroism that are conjured in the Harry Potter series, this collection examines the ways fictional heroism in the twenty-first century challenges the idealized forms of a somewhat simplistic masculinity associated with genres like the epic, romance and classic adventure story. The collection's three sections address broad issues related to genre, Harry Potter's development as the central heroic character and the question of who qualifies as a hero in the Harry Potter series. Among the topics are Harry Potter as both epic and postmodern hero, the series as a modern-day example of psychomachia, the series' indebtedness to the Gothic tradition, Harry's development in the first six film adaptations, Harry Potter and the idea of the English gentleman, Hermione Granger's explicitly female version of heroism, adult role models in Harry Potter, and the complex depictions of heroism exhibited by the series' minor characters. Together, the essays suggest that the Harry Potter novels rely on established generic, moral and popular codes to develop new and genuine ways of expressing what a globalized world has applauded as ethically exemplary models of heroism based on responsibility, courage, humility and kindness.",
            "industryIdentifiers": [
            {
            "type": "ISBN_13",
            "identifier": "9781409478416"
            },
            {
            "type": "ISBN_10",
            "identifier": "1409478416"
            }
            ],
            "readingModes": {
            "text": true,
            "image": true
            },
            "pageCount": 248,
            "printType": "BOOK",
            "categories": [
            "Literary Criticism"
            ],
            "averageRating": 5,
            "ratingsCount": 1,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "1.4.3.0.preview.3",
            "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
            },
            "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=o-QCOFDHmPEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=o-QCOFDHmPEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=o-QCOFDHmPEC&printsec=frontcover&dq=harrypotter&hl=&cd=10&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=o-QCOFDHmPEC&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-o-QCOFDHmPEC"
            },
            "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
            "amount": 149.95,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amount": 119.96,
            "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=o-QCOFDHmPEC&rdid=book-o-QCOFDHmPEC&rdot=1&source=gbs_api",
            "offers": [
            {
            "finskyOfferType": 1,
            "listPrice": {
            "amountInMicros": 149950000,
            "currencyCode": "USD"
            },
            "retailPrice": {
            "amountInMicros": 119960000,
            "currencyCode": "USD"
            },
            "giftable": true
            }
            ]
            },
            "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Heroism_in_the_Harry_Potter_Series-sample-epub.acsm?id=o-QCOFDHmPEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Heroism_in_the_Harry_Potter_Series-sample-pdf.acsm?id=o-QCOFDHmPEC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=o-QCOFDHmPEC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
            },
            "searchInfo": {
            "textSnippet": "Taking up the various conceptions of heroism that are conjured in the Harry Potter series, this collection examines the ways fictional heroism in the twenty-first century challenges the idealized forms of a somewhat simplistic masculinity ..."
            }
            }
            ]
            },
        bookSearch: ""
      }; 
    

  
  render() {
    return (
      <div>
        <SearchCard />
        
        {window.location.pathname ===  "/" ?  
            <SearchResult>
                {this.state.results.items.length ? (
                
                    this.state.results.items.map(book => {
                        return (
                            <BookItemCard
                                key = {book.id}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors[0]}
                                href={book.volumeInfo.previewLink}
                                thumbnail={(book.volumeInfo.imageLinks) ? (book.volumeInfo.imageLinks.thumbnail) : ("http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg")}
                                description={book.volumeInfo.description}
                            /> 
                        ) 
                    })
                ) : (
                    <h3>No Results to Display</h3>  
                )}  
            </SearchResult>
        : 
            <SaveCard>
                {this.state.savedBooks.items.length ? (
                
                this.state.savedBooks.items.map(book => {
                    return (
                        <BookItemCard
                            key = {book.id}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors[0]}
                            href={book.volumeInfo.previewLink}
                            thumbnail={(book.volumeInfo.imageLinks) ? (book.volumeInfo.imageLinks.thumbnail) : ("http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg")}
                            description={book.volumeInfo.description}
                        /> 
                    ) 
                })
                ) : (
                    <h3>No Saved Books</h3>  
                )}  
            </SaveCard>
        }
        
      </div>
    )
  }

}

export default Books;