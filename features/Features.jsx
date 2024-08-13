import React from 'react'
import './features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features() {
  return (
    <div className='features'>
        <div className='featureItem'>
            <span className='featureTitle'>Revenue</span>
            <div className="featuresContainer">
                <span className="featureMoney">$2.43</span>
                <span className="featureRate">-11.4
                    <ArrowDownwardIcon className='featureIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
        <div className='featureItem'>
            <span className='featureTitle'>Sales</span>
            <div className="featuresContainer">
                <span className="featureMoney">$1.43</span>
                <span className="featureRate">-1.4
                    <ArrowDownwardIcon className='featureIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
        <div className='featureItem'>
            <span className='featureTitle'>Cost</span>
            <div className="featuresContainer">
                <span className="featureMoney">$2.5</span>
                <span className="featureRate">+2.4
                    <ArrowUpwardIcon className='featureIcon'/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
    </div>
  )
}
