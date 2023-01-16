import React from 'react';

// Importing images
import deltaRadarProject from './projectDeltaRadar.png';
import dolphinanceProject from './projectDolphinance.png';
import uniChartsProject from './projectUniCharts.png';
import cvDocument from './CV Developer - David de Esteban.pdf';
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
        name: 'Truffle',
        isBlockchain: true,
        isFramework: true,
    },
    {
        name: 'Ganache',
        isBlockchain: true,
        isFramework: true,
    },
    {
        name: 'Hardhat',
        isBlockchain: true,
        isFramework: true,
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
        name: 'Redux',
        isGeneral: true,
        isFramework: true,
        iconText: 'redux-original'
    },
    {
        name: 'Bootstrap',
        isGeneral: true,
        isFramework: true,
        iconText: 'bootstrap-plain'
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
];

export const skillCategories = [
    {
        name: 'Blockchain',
        key: 'isBlockchain'
    },
    {
        name: 'Languages',
        key: 'isLanguage'
    },
    {
        name: 'Frameworks/Tools',
        key: 'isFramework'
    }
];

export const mainLinks = {
    email: 'mailto:estdav@protonmail.com',
    github: 'https://github.com/EstDavid/',
    linkedIn: 'https://www.linkedin.com/in/david-de-esteban',
    curriculum: 'https://drive.google.com/file/d/18Ep_vnJHpmnoUjvMV824ZLY84qyYiPm8/view?usp=share_link',
    cv: cvDocument
}

export const home = {
    titleQuestion: 'Looking for a Front End | Blockchain Developer?',
    title: "Hey, I'm David",
    titleCaption: "I'm a developer with experience in Front End and Blockchain",
    backgroundImage
};

export const projects = [
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
            'Bootstrap'
        ],
        demoCodeURLs: [
            'http://delta-radar.herokuapp.com/',
            'https://github.com/EstDavid/delta-radar'
        ]
    },
    {
        title: 'Dolphinance',
        image: dolphinanceProject,
        description: [
            <h5>Exchange Dapp with its own ERC-20 token</h5>,
            <span>Both corresponding smart contracts are deployed on the Rinkeby network <a 
                href="https://rinkeby.etherscan.io/address/0x6723e472b9de9b329f344aa6c8dc80e67db92de8" target="_blank" rel="noreferrer noopener" >here (Dapp)
                </a> and <a 
                href="https://rinkeby.etherscan.io/address/0x664c8fcf50a588d3208c729362685ea911522198" target="_blank" rel="noreferrer noopener" >here (ERC-20 token)</a></span>,
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
            'http://dlp-token-exchange.herokuapp.com/',
            'https://github.com/EstDavid/DappExchange'
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
            'Redux'
        ],
        demoCodeURLs: [
            'http://uniswapv3-charts.herokuapp.com/',
            'https://github.com/EstDavid/uniswapv3-charts',
            'https://github.com/EstDavid/UniswapV3OracleReader'
        ]
    }
];

export const about = {
    title1: 'Hey there!',
    title2: "I'm a Developer with experience in Front End and Blockchain",
    descriptions: [
        <span>My name is David, and I began to learn coding in the beginning of 2021.</span>,
        <span>My initial focus was on Blockchain and learning to code smart contracts on Solidity. </span>,
        <span>
            The need to showcase my projects brought me to learn Frontend Development and made me realize that I also really enjoy this area of software development.
        </span>
    ]

}

export const getSkill = (skillName) => {
    for(let skill of completeSkillSet) {
        if(skill.name === skillName) {
            return skill;
        }
    }
};

export const getIconSymbol = (textId) => {
    return <i className={`devicon-${textId} colored me-1`}></i>
}