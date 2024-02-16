import React from 'react';

// Importing images
import deltaRadarProject from './projectDeltaRadar.png';
import dolphinanceProject from './projectDolphinance.png';
import uniChartsProject from './projectUniCharts.png';
import pixelArtProject from './projectPixelArt.png';
import puraVidaProject from './projectPuraVida.jpg';
import cadoProject from './projectCado.png';
import finiteElements from './finiteElements.png';
import driversDesk from './driversDesk.png';
import cvDocument from './CV Software Eng - David de Esteban.pdf';
import backgroundImage from './background.png';

export const completeSkillSet = [
    {
        name: 'Solidity',
        isBlockchain: true,
        isLanguage: true,
        iconText: 'solidity-plain'
    },
    {
        name: 'Ethers',
        isBlockchain: true,
        isFramework: true,
    },
    {
        name: 'Deployment to Mainnet',
        isBlockchain: true,
        isLanguage: false,
    },
    {
        name: 'Node.js',
        isGeneral: true,
        isFramework: true,
        iconText: 'nodejs-plain'
    },
    {
        name: 'React',
        isGeneral: true,
        isFramework: true,
        iconText: 'react-original'
    },
    {
        name: 'React Native',
        isGeneral: true,
        isFramework: true,
        iconText: 'react-original'
    },
    {
        name: 'React Native',
        isGeneral: true,
        isFramework: true,
        iconText: 'react-original'
    },
    {
        name: 'Redux',
        isGeneral: true,
        isFramework: true,
        iconText: 'redux-original'
    },
    {
        name: 'MongoDB',
        isGeneral: true,
        isFramework: true,
        iconText: 'mongodb-plain'
    },
    {
        name: 'GraphQL',
        isGeneral: true,
        isFramework: true,
        iconText: 'graphql-plain'
    },
    {
        name: 'GraphQL',
        isGeneral: true,
        isFramework: true,
        iconText: 'graphql-plain'
    },
    {
        name: 'Bootstrap',
        isGeneral: true,
        isFramework: true,
        iconText: 'bootstrap-plain'
    },
    {
        name: 'Truffle',
        isBlockchain: true,
        isFramework: false,
    },
    {
        name: 'Ganache',
        isBlockchain: true,
        isFramework: false,
    },
    {
        name: 'Flash Swaps',
        isBlockchain: true,
    },
    {
        name: 'Trading Bots',
        isBlockchain: true
    },
    {
        name: 'NFTs',
        isBlockchain: true,
    },
    {
        name: 'Uniswap V3',
        isBlockchain: true,
    },
    {
        name: 'Javascript',
        isGeneral: true,
        isLanguage: true,
        iconText: 'javascript-plain'
    },
    {
        name: 'Python',
        isGeneral: true,
        isLanguage: true,
        iconText: 'python-plain'
    },
    {
        name: 'Typescript',
        isGeneral: true,
        isLanguage: true,
        iconText: 'typescript-plain'
    },
    {
        name: 'Git',
        isGeneral: true,
        isFramework: true,
        iconText: 'git-plain'
    },
    {
        name: 'Github',
        isGeneral: true,
        isFramework: true,
        iconText: 'github-original'
    },
    {
        name: 'VS Code',
        isGeneral: true,
        isFramework: true,
        iconText: 'vscode-plain'
    },
    {
        name: 'Hardhat',
        isBlockchain: true,
        isFramework: false,
    },
    {
        name: 'Next.js',
        isGeneral: true,
        isFramework: true,
        iconText: 'nextjs-plain'
    }, {
        name: 'Tailwind CSS',
        isGeneral: true,
        isFramework: true,
        iconText: 'tailwindcss-plain'
    }, {
        name: 'Clerk',
        isGeneral: true,
        isFramework: false,
        iconText: 'clerk-plain'
    },
    {
        name: 'Socket.io',
        isGeneral: true,
        isFramework: false,
        iconText: 'socketio-plain'
    },

];

export const skillCategories = [
    {
        name: 'Frameworks/Tools',
        key: 'isFramework'
    },
    {
        name: 'Languages',
        key: 'isLanguage'
    },
    {
        name: 'Blockchain',
        key: 'isBlockchain'
    }
];

export const mainLinks = {
    email: 'mailto:estdav@protonmail.com',
    github: 'https://github.com/EstDavid/',
    linkedIn: 'https://www.linkedin.com/in/david-de-esteban',
    curriculum: 'https://drive.google.com/file/d/1XtedkbJQXXokyZCrb7DxDU3BFlluyrxo/view?usp=drive_link',
    cv: cvDocument,
    blog: 'https://blog.davidesteban.dev'
};

export const home = {
    titleQuestion: 'Fullstack Developer',
    title: "Hey, I'm David",
    titleCaption: "I am a developer with experience in Front End, Back End, mainly in JavaScript, TypeScript and Node",
    backgroundImage
};

export const projects = [
    {
        title: 'Summer Festival App (Work in Progress)',
        image: puraVidaProject,
        description: [
            <h5>App for planning your activities in a Spiritual Festival</h5>,
            <span>There can be lots of very enriching and transforming activities and events to attend at a Spiritual Festival</span>,
            <span>This App allows you to choose an plan your activities, get around the different areas, find the healers you will visit.</span>,
            <span>It stores the information in the phone's local storage so you don't have to worry about poor internet connections</span>,
        ],
        skillSets: [
            'React Native',
            'Javascript',
            'Node.js',
            'Redux'
        ],
        demoCodeURLs: [
            {
                url: 'https://github.com/EstDavid/pura-vida-app',
                name: 'Code'
            }
        ]
    },
    {
        title: 'CADO - Connecting pet owners with loving pet sitters',
        image: cadoProject,
        description: [
            <h5>CADO is a Mobile web application helping pet owners to find pet sitters, and pet sitters to manage pet stays and send media updates</h5>,
            <span>- Collaborated in the creation of the database model and implemented several client and server components</span>,
            <span>- Centralized styling and colors of the app using Tailwind CSS</span>,
            <span>- Gave technical assistance to other developers in solving roadblocks</span>,
        ],
        skillSets: [
            'React',
            'Next.js',
            'MongoDB',
            'Tailwind CSS',
            'Clerk',
            'Socket.io'
        ],
        demoCodeURLs: [
            {
                url: 'https://github.com/EstDavid/pet-care-app',
                name: 'Code'
            },
            {
                url: 'https://youtu.be/RXkWKWYjr74',
                name: 'Demo Video'
            }
        ]
    },
    {
        title: 'Delta Radar',
        image: deltaRadarProject,
        description: [
            <h5>Web featuring the best potential trades of a Defi trading bot</h5>,
            <span>Delta Radar is a frontend app which shows potential profitable arbitrage trades accross different token pools in Decentralized Exchanges (DEX)</span>,
            <span>This frontend is a <strong>small part of a broader project</strong> which is aimed at creating a <strong>trading bot</strong> capable of:</span>,
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Scanning token pools accross different DEXs</li>
                <li className="list-group-item">Finding price differences which yield a profit</li>
                <li className="list-group-item">Calculating the optimum amount of the first token in the trade sequence</li>
                <li className="list-group-item">Triggering a smart contract with flash loan capabilities which attempts to catch the potential profit</li>
            </ul>,
            <span>
                The app displays the historic output from the trading bot scanner module and allows to search and filter past potential trades, according to criteria such as profitability, date, token or exchange
            </span>
        ],
        skillSets: [
            'Solidity',
            'Deployment to Mainnet',
            'ethers',
            'Trading Bots',
            'Flash Swaps',
            'Truffle',
            'Ganache',
            'Javascript',
            'Node.js',
            'React',
            'Redux',
            'MongoDB',
            'Bootstrap'
        ],
        demoCodeURLs: [
            {
                url: 'http://delta-radar.herokuapp.com/',
                name: 'Live Demo'
            },
            {
                url: 'https://github.com/EstDavid/delta-radar',
                name: 'Frontend Code'
            }
        ]
    },
    {
        title: 'Dolphinance',
        image: dolphinanceProject,
        description: [
            <h5>Exchange Dapp with its own ERC-20 token</h5>,
            <span>Both corresponding smart contracts are deployed on the Rinkeby network <a
                href="https://rinkeby.etherscan.io/address/0x6723e472b9de9b329f344aa6c8dc80e67db92de8" target="_blank" rel="noreferrer noopener" >here - Dapp -
            </a> and <a
                href="https://rinkeby.etherscan.io/address/0x664c8fcf50a588d3208c729362685ea911522198" target="_blank" rel="noreferrer noopener" >here - ERC-20 token -</a></span>,
            <span>Dolphinance is an exchange Dapp based on the capstone project from the <a
                href="https://www.dappuniversity.com/" target="_blank" rel="noreferrer noopener" >
                Dapp University</a> Blockchain Developer Bootcamp</span>,
            <span>The dapp allows <strong>buying and selling</strong> the native token of the exchange, <strong>deposits and withdrawals</strong>, <strong>placing limit orders</strong> and tracking token price</span>,
        ],
        skillSets: [
            'Solidity',
            'ethers',
            'Truffle',
            'Ganache',
            'Javascript',
            'Node.js',
            'React',
            'Redux'
        ],
        demoCodeURLs: [
            {
                url: 'http://dlp-token-exchange.herokuapp.com/',
                name: 'Live Demo'
            },
            {
                url: 'https://github.com/EstDavid/DappExchange',
                name: 'Frontend Code'
            }
        ]
    },
    {
        title: 'UniCharts',
        image: uniChartsProject,
        description: [
            <h5>Charting app that reads price data from Uniswap V3 pools</h5>,
            'The app is composed of a frontend and a backend. The backend retrieves data from Uniswap V3 pools and stores it on a database',
            'The frontend reads the historical price data from the database and generates the charts',
            'It features easy search of coin pairs, visualization of charts in different timeframes and use of exponential and simple moving averages (EMA and SMA)'
        ],
        skillSets: [
            'Uniswap V3',
            'Typescript',
            'ethers',
            'Javascript',
            'Node.js',
            'React',
            'Redux',
            'MongoDB'
        ],
        demoCodeURLs: [
            {
                url: 'http://uniswapv3-charts.herokuapp.com/',
                name: 'Live Demo'
            },
            {
                url: 'https://github.com/EstDavid/uniswapv3-charts',
                name: 'Frontend Code'
            },
            {
                url: 'https://github.com/EstDavid/UniswapV3OracleReader',
                name: 'Backend code'
            }
        ]
    },
    {
        title: 'Pixel Artifier',
        image: pixelArtProject,
        description: [
            <h5>Pixel Art App</h5>,
            <span>The 'Pixel Artifier' app is a Single Page Application app which allows the user to paint on a 'pixel-like' square canvas, which can have the sizes of (8 x 8), (12 x 12), (16 x 16), or (32 x 32) pixels.</span>
        ],
        skillSets: [
            'Javascript',
            'Node.js',
            'React',
            'Bootstrap'
        ],
        demoCodeURLs: [
            {
                url: 'https://estdavid.github.io/pixel-art-app/',
                name: 'Live Demo'
            },
            {
                url: 'https://github.com/EstDavid/pixel-art-app',
                name: 'Frontend Code'
            }
        ]
    }
];

export const about = {
    title1: 'Hey there!',
    title2: "I'm David, Software Engineer",
    descriptions: [
        <span>I come from a background as Mechanical Engineer designing and calculating systems for trains and locomotives.</span>,
        <div className='d-flex flex-row'>
            <img src={driversDesk} alt='' className='w-50 p-1' />
            <img src={finiteElements} alt='' className='w-50 p-1' />
        </div>,
        <span>Since 2021 I am a Full-Stack Software Developer, with ample experience in development of projects using JavaScript and TypeScript, leveraging on technologies such as Node, Express, Koa, Mongo, React, React Native, Redux and NextJS.</span>,
        <span>
            With over 15 years of experience as Mechanical Engineer in the railway industry, I possess a strong ability for learning new technologies. I am quite familiar with working in complex projects with a variety of stakeholders, where it is crucial to reach compromises between continuous improvement, technical quality, deadlines and costs. I love working in multidisciplinary and multicultural teams. During my career, I have worked and studied in different countries. Here is my set of language skills: Native Spanish and bilingual English, and fair knowledge of French, Dutch and German.
        </span>,
        <span>
            {'For finding out more, you can checkout here my '}
            <a href={mainLinks.curriculum} target="_blank" rel="noreferrer noopener" >Curriculum Vitae - CV -</a>
            {', or visit my profiles on '}
            <a href={mainLinks.github} target="_blank" rel="noreferrer noopener" >Github</a>
            {' and '}
            <a href={mainLinks.linkedIn} target="_blank" rel="noreferrer noopener" >LinkedIn</a>
        </span>
    ]

};

export const getSkill = (skillName) => {
    for (let skill of completeSkillSet) {
        if (skill.name === skillName) {
            for (let skill of completeSkillSet) {
                if (skill.name === skillName) {
                    return skill;
                }
            }
        };
    }
};

export const getIconSymbol = (textId) => {
    return <i className={`devicon-${textId} colored me-1`}></i>;
};