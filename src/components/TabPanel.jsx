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
    <div className="relative">
      <Box sx={{ width: '90%', mx: 'auto', textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Simple Bookmarking" {...a11yProps(0)} />
            <Tab label="Speedy Searching" {...a11yProps(1)} />
            <Tab label="Easy Sharing" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="mx-auto flex h-[18rem]">
            <div className="flex w-1/2 justify-end">
              <img
                src={svgFeature1}
                alt="feature one"
                className="aspect-video w-2/3 bg-white"
              />
            </div>
            <div className="ml-10 flex w-1/3 flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold text-slate-700">
                Bookmark in one click
              </h3>
              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites
              </p>
              <div>
                <button className="cursor-pointer rounded-md bg-indigo-500 px-2 py-1 text-white">
                  More info
                </button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="mx-auto flex h-[18rem]">
            <div className="flex w-1/2 justify-end">
              <img
                src={svgFeature2}
                alt="feature one"
                className="aspect-video w-2/3 bg-white"
              />
            </div>
            <div className="ml-10 flex w-1/3 flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold text-slate-700">
                Intelligent search
              </h3>
              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <div>
                <button className="cursor-pointer rounded-md bg-indigo-500 px-2 py-1 text-white">
                  More info
                </button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="mx-auto flex h-[18rem]">
            <div className="flex w-1/2 justify-end">
              <img
                src={svgFeature3}
                alt="feature one"
                className="aspect-video w-2/3 bg-white"
              />
            </div>
            <div className="ml-10 flex w-1/3 flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold text-slate-700">
                Intelligent search
              </h3>
              <p>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <div>
                <button className="cursor-pointer rounded-md bg-indigo-500 px-2 py-1 text-white">
                  More info
                </button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>
      <div className="absolute -bottom-5 left-0 -z-10 h-[300px] w-[50%] rounded-br-full bg-indigo-500"></div>
    </div>
  );
}
