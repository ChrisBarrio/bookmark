import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import svgFeature1 from '../assets/illustration-features-tab-1.svg';
import svgFeature2 from '../assets/illustration-features-tab-2.svg';
import svgFeature3 from '../assets/illustration-features-tab-3.svg';

import BgSquare from '../components/BgSquare';

const dataTabs = [
  {
    id: 1,
    indexTab: 0,
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites',
    img: svgFeature1,
  },
  {
    id: 2,
    indexTab: 1,
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    img: svgFeature2,
  },
  {
    id: 3,
    indexTab: 2,
    title: 'Easy search',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    img: svgFeature3,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="relative max-sm:my-10">
      <Box sx={{ width: '90%', mx: 'auto', textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Simple Bookmarking"
              {...a11yProps(0)}
              sx={{ width: '8rem'}}
              
            />
            <Tab label="Speedy Searching" {...a11yProps(1)} sx={{ width: '8rem' }}/>
            <Tab label="Easy Sharing" {...a11yProps(2)} sx={{ width: '8rem' }}/>
          </Tabs>
        </Box>
        {dataTabs.map((e) => (
          <TabPanel value={value} index={e.indexTab} key={e.id}>
            <div className="mx-auto flex h-[18rem] max-sm:flex-col">
              <div className="flex w-1/2 justify-end max-sm:w-full">
                <img
                  src={e.img}
                  alt={e.title}
                  className="aspect-video w-2/3 bg-white max-lg:w-full max-sm:w-full"
                />
              </div>
              <div className="ml-10 flex w-1/3 flex-col justify-center gap-4 max-sm:my-5 max-sm:ml-0 max-sm:w-full">
                <h3 className="text-3xl font-bold text-slate-700 max-sm:text-2xl">
                  {e.title}
                </h3>
                <p className=" text-slate-400">{e.text}</p>
                <div>
                  <button className="cursor-pointer rounded-md bg-indigo-500 px-2 py-1 text-white">
                    More info
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Box>
      <div className="absolute -bottom-5 left-0 -z-10 h-[300px] w-[50%] rounded-br-full bg-indigo-500 max-sm:bottom-20 max-sm:h-[150px]"></div>
    </div>
  );
}
