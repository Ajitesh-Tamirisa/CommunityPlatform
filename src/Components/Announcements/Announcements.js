import React, {useState} from 'react'
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';
import CreateCard from "../Card/CreateCard";
import Card from "../Card/Card";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {useParams} from 'react-router-dom';
import AnnPopup from './AnnPopup';
import "./Announcements.css";
import { makeStyles} from '@mui/styles';
import image from "../../Images/Time Table.png";
import image2 from "../../Images/NAAC A+.jpeg";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className="tabpanel">
      {value === index && (
        <div className='content'>
          {children}
        </div>
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

export default function Announcements() {
  
  const [openPopup, setOpenPopup] = useState(false);
  const [value, setValue] = React.useState(0);
  let { groupId } = useParams();
  const keys = {
    "All": "All",
    "18":"CSE-A 2018-2022",
    "733":"CSE-A 2018-2022",
    "734":"Electrical and Electronics Engineering",
    "735":"Electronics and Communication Engineering",
    "736":"Mechanical Engineering",
    "737":"Information Technology"
  }
  const useStyles = makeStyles({
    tabs: {
  
      "& .MuiTabs-indicator": {
        backgroundColor: "#394867",
        height: 3,
      },
      "& .MuiTab-root":{
        fontWeight:'500',
        color:"gray"
      },
      "& .MuiTab-root.Mui-selected": {
        fontWeight:'600',
        color: '#14274E'
      }
    }
  })
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let posts = {
    post1: {
      "author": "Sollicitudin",
      "timestamp": "Friday, 28th January 2022",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis.",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Mi eget mauris pharetra et ultrices.",
      "link": "https://matrusri.edu.in/",
      "image": image2
    },
    post2:{
      "author": "Viverra",
      "timestamp": "Saturday, 29th January 2022",
      "title": "Amet cursus sit amet dictum sit amet justo donec enim",
      "body": "Fermentum iaculis eu non diam phasellus vestibulum. Penatibus et magnis dis parturient montes. Aenean pharetra magna ac placerat vestibulum lectus mauris.",
      "link": "https://matrusri.edu.in/",
      "image": image
    },
    post3:{
      "author": "Neque",
      "timestamp": "Saturday, 29th January 2022",
      "title": "Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus",
      "body": "Nullam ac tortor vitae purus faucibus ornare suspendisse. Dui id ornare arcu odio. Egestas diam in arcu cursus euismod quis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Velit dignissim sodales ut eu sem integer. Bibendum arcu vitae elementum curabitur vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link": "https://matrusri.edu.in/",
      "image": image2
    },      
    post4:{
      "author": "Volutpat",
      "timestamp": "Sunday, 30th January 2022",
      "title": "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus",
      "body": "Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Vitae semper quis lectus nulla at volutpat diam ut. Sit amet nulla facilisi morbi tempus. Eget gravida cum sociis natoque penatibus et magnis dis. Mauris in aliquam sem fringilla ut morbi. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.",
      "link": "https://matrusri.edu.in/",
      "image": image
    }
  }

  return (
    <div>
    <div className="ann_general">
        <Sidebar/>        
        <div class="ann_general__right" style={{marginTop: '65px'}}>
          <div style={{backgroundColor: 'white', width: '100%', textAlign: 'center'}}>
            <Typography sx={{ fontWeight: 600, fontSize: 24, m: 1.5 }}>All</Typography>
          </div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <AppBar elevation={1} position="static" sx={{bgcolor: "#F1F6F9"}}>
                <Tabs className={classes.tabs} variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Posts" {...a11yProps(0)} />
                  <Tab label="Forms" {...a11yProps(1)} />
                  <Tab label="Notes" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
            </Box>

            <TabPanel value={value} index={0}>
              <CreateCard heading="Create Post" plholder="What do you want to ask or share?" openPopup={openPopup} setOpenPopup={setOpenPopup} />                    
              {Object.keys(posts).map((post)=>(
                  <Card key={post} author={posts[post].author} timestamp={posts[post].timestamp} title={posts[post].title} body={posts[post].body} link={posts[post].link} image={posts[post].image} forums={false} />
              ))}
              {/* <Card type="announcement" author="Lizard" timestamp="Friday, 28th January 2022" title="How to pass this exam?"/> */}
              <Card author="Lizard" timestamp="Friday, 28th January 2022" title="How to pass this exam?"/>
              <Card author="Lizard" timestamp="Friday, 28th January 2022" title="How to pass this exam?"/>
              <Card author="Lizard" timestamp="Friday, 28th January 2022" title="How to pass this exam?"/>
              <Card author="Lizard" timestamp="Friday, 28th January 2022" title="How to pass this exam?"/>
              <Card author="Lizard" timestamp="Friday, 28th January 2022" title="How to pass this exam?"/>
              <Card author="Lizard" timestamp="Friday, 28th January 2022" title="How to pass this exam?"/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CreateCard heading="Create Form" plholder="What do you want to ask or share?" openPopup={openPopup} setOpenPopup={setOpenPopup} />                    
              <Card author="Lizard" timestamp="Friday, 27th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 27th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 27th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 27th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 27th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 27th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 27th January 2022" title="How to pass this exam?"/>              
            </TabPanel>
            <TabPanel value={value} index={2}>
              <CreateCard heading="Add Notes" plholder="What do you want to ask or share?" openPopup={openPopup} setOpenPopup={setOpenPopup} />                    
              <Card author="Lizard" timestamp="Friday, 29th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 29th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 29th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 29th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 29th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 29th January 2022" title="How to pass this exam?"/>                    
              <Card author="Lizard" timestamp="Friday, 29th January 2022" title="How to pass this exam?"/>
            </TabPanel>
          </Box>
        </div>
    </div>
    
    <AnnPopup openPopup = {openPopup} setOpenPopup = {setOpenPopup}/>
    </div>
  )
}
