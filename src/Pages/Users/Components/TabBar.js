import React, { useState } from 'react'
import styled from 'styled-components';

export default function TabBar() {
    const [ tabs, setTabs ] = useState([
        { text: 'CLOSET', icon: 'fa fa-home', key: 0, selected: true },
        { text: 'ME GUSTA', icon: 'fa fa-archive', key: 1, selected: false },
        { text: 'REVIEW', icon: 'fa fa-bar-chart', key: 2, selected: false },
        { text: '+INFO', icon: 'fa fa-cloud-upload', key: 3, selected: false },
    ]);

    const handleTabs = (key) => {
        setTabs(tabs.map(tab => {
            if (tab.key === key) {
                tab.selected = true;
            } else {
                tab.selected = false;
            }
            return tab;
        }));
    }

  return (
    <TabBarLayaout>
        {
            tabs.map(tabs => 
                <div 
                    key={tabs.key} 
                    className={tabs.selected ? 'item-tab-selected' : 'item-tab'}
                    onClick={() => handleTabs(tabs.key)}
                >
                    {tabs.text}
                </div>
            )
        }
    </TabBarLayaout>
  )
}


const TabBarLayaout = styled.div`
    display: flex;
    /* background-color: red; */
    justify-content: space-around;
    border-bottom: 1px solid #000;
    margin-bottom: 1em;
    
    .item-tab {
        padding: 10px 0px 10px 0px;
        cursor: pointer;
    }
    
    .item-tab-selected {
        cursor: pointer;
        border-bottom: 5px solid #000;
        padding: 10px 0px 10px 0px;
    }


    @media screen and (max-width: 768px) {
        justify-content: space-around;
    }
`;